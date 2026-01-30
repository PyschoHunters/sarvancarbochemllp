import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version, x-forwarded-for",
};

// Rate limiting store (in-memory for edge function)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

// Rate limit config: 5 submissions per 15 minutes
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

// Clean up old entries periodically
function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now > data.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  cleanupRateLimitStore();
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Input sanitization to prevent XSS
function sanitizeInput(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .slice(0, 5000); // Max length
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Validate phone format (optional field, basic check)
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Optional field
  const phoneRegex = /^[\d\s\+\-\(\)\.]{0,20}$/;
  return phoneRegex.test(phone);
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  honeypot?: string; // Honeypot field - should be empty
}

// Company-branded HTML email template for admin notification
function getAdminEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">SARVAN CARBOCHEM LLP</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">New Contact Form Submission</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 25px; color: #1e3a5f; font-size: 22px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong><br>
                    <span style="color: #333; font-size: 16px;">${data.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong><br>
                    <a href="mailto:${data.email}" style="color: #1e3a5f; font-size: 16px; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</strong><br>
                    <a href="tel:${data.phone}" style="color: #1e3a5f; font-size: 16px; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${data.company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Company</strong><br>
                    <span style="color: #333; font-size: 16px;">${data.company}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
              
              <div style="margin-top: 25px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #d4af37;">
                <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
                <p style="margin: 10px 0 0; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; color: #888; font-size: 13px;">
                This email was sent from the contact form at<br>
                <a href="https://www.sarvancarbochem.com" style="color: #1e3a5f; text-decoration: none;">www.sarvancarbochem.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Auto-reply template for customer
function getCustomerEmailTemplate(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">SARVAN CARBOCHEM LLP</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Specialty Chemicals & Carbon Products</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #1e3a5f; font-size: 24px;">Thank You, ${name}!</h2>
              
              <p style="margin: 0 0 15px; color: #333; font-size: 16px; line-height: 1.6;">
                We have received your message and appreciate you reaching out to us.
              </p>
              
              <p style="margin: 0 0 15px; color: #333; font-size: 16px; line-height: 1.6;">
                Our team will review your inquiry and get back to you within <strong>24-48 business hours</strong>.
              </p>
              
              <div style="margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 10px; border-left: 4px solid #d4af37;">
                <p style="margin: 0 0 10px; color: #1e3a5f; font-weight: 600; font-size: 16px;">In the meantime, you can:</p>
                <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 15px; line-height: 1.8;">
                  <li>Visit our <a href="https://www.sarvancarbochem.com/products" style="color: #1e3a5f;">Products page</a> to explore our offerings</li>
                  <li>Learn about our <a href="https://www.sarvancarbochem.com/principals" style="color: #1e3a5f;">Global Principals</a></li>
                  <li>Read our <a href="https://www.sarvancarbochem.com/about" style="color: #1e3a5f;">Company Story</a></li>
                </ul>
              </div>
              
              <p style="margin: 25px 0 0; color: #333; font-size: 16px; line-height: 1.6;">
                If your inquiry is urgent, please feel free to call us directly:
              </p>
              
              <table style="width: 100%; margin-top: 15px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                    <strong style="color: #1e3a5f;">Chennai:</strong> <a href="tel:+914426872203" style="color: #333; text-decoration: none;">+91 44 2687 2203</a><br>
                    <strong style="color: #1e3a5f;">Mumbai:</strong> <a href="tel:+912227664866" style="color: #333; text-decoration: none;">+91 22 2766 4866</a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 30px 0 0; color: #333; font-size: 16px;">
                Warm regards,<br>
                <strong style="color: #1e3a5f;">The Sarvan Carbochem Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e3a5f; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px; color: rgba(255,255,255,0.9); font-size: 14px;">
                <strong>Sarvan Carbochem LLP</strong>
              </p>
              <p style="margin: 0 0 15px; color: rgba(255,255,255,0.7); font-size: 13px;">
                Trusted Partner Since 2014 | Serving India & Beyond
              </p>
              <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 12px;">
                <a href="https://www.sarvancarbochem.com" style="color: #d4af37; text-decoration: none;">www.sarvancarbochem.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Check rate limit
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Too many submissions. Please try again later." 
        }),
        {
          status: 429,
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "X-RateLimit-Remaining": "0"
          },
        }
      );
    }

    const body: ContactFormData = await req.json();

    // Honeypot check - if filled, it's likely a bot
    if (body.honeypot && body.honeypot.trim() !== "") {
      console.log("Honeypot triggered - likely spam");
      // Return success to fool bots, but don't send email
      return new Response(
        JSON.stringify({ success: true }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate phone format
    if (!isValidPhone(body.phone || "")) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid phone number format" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate field lengths
    if (body.name.length > 100 || body.message.length > 5000) {
      return new Response(
        JSON.stringify({ success: false, error: "Input too long" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Sanitize inputs
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(body.name),
      email: body.email.trim().toLowerCase().slice(0, 255),
      phone: body.phone ? sanitizeInput(body.phone) : undefined,
      company: body.company ? sanitizeInput(body.company) : undefined,
      message: sanitizeInput(body.message),
    };

    const resend = new Resend(RESEND_API_KEY);

    // Send notification email to company
    const adminEmailResult = await resend.emails.send({
      from: "Sarvan Carbochem <onboarding@resend.dev>",
      to: ["sales@sarvancarbochem.com"],
      reply_to: sanitizedData.email,
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: getAdminEmailTemplate(sanitizedData),
    });

    console.log("Admin email sent:", adminEmailResult);

    // Send auto-reply to customer
    const customerEmailResult = await resend.emails.send({
      from: "Sarvan Carbochem <onboarding@resend.dev>",
      to: [sanitizedData.email],
      subject: "Thank you for contacting Sarvan Carbochem LLP",
      html: getCustomerEmailTemplate(sanitizedData.name),
    });

    console.log("Customer confirmation email sent:", customerEmailResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      }),
      {
        status: 200,
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "X-RateLimit-Remaining": String(rateLimit.remaining)
        },
      }
    );
  } catch (error: unknown) {
    console.error("Error in contact-form function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
