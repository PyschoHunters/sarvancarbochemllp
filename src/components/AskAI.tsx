import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const FAQ_DATA: Record<string, string> = {
  // Founding & History
  'who founded sarvan': 'Sarvan Carbochem LLP was founded by Mr. V. Suresh in 2014, backed by a family legacy in the rubber and chemical industry dating back to 1941.',
  'when was sarvan founded': 'Sarvan Carbochem LLP was established in 2014. However, our family legacy in the rubber and chemical industry dates back to 1941.',
  'year started': 'Sarvan Carbochem LLP was established in 2014, with a family legacy dating back to 1941.',
  'history': 'Sarvan Carbochem LLP was founded in 2014 by Mr. V. Suresh. We are backed by a rich family legacy in the rubber and chemical industry that began in 1941. Today, we are a leading supplier of specialty chemicals, polymers, and rubber additives across India.',
  'legacy': 'Our legacy dates back to 1941 when our family first entered the rubber and chemical industry. Sarvan Carbochem LLP was formally established in 2014, carrying forward this rich heritage.',
  
  // Principals
  'principals': 'Our esteemed principals include:\n\n• **Cancarb Ltd** (Canada) - Thermal Carbon Black\n• **Performance Additives** (Malaysia) - EPDM Rubber\n• **Munch Chemie** (Germany) - Rubber Chemicals\n• **Nantex Industry** (Taiwan) - Synthetic Rubber\n• **Polychromos** (India) - Pigments & Dyes\n• **Advanced Fluoro Tubes** (India) - PTFE Products\n• **RevoSync** (Germany) - Synchronizer Rings\n• **Herli Technochem** (Germany) - Specialty Chemicals',
  'partners': 'We represent 8 global principals including Cancarb (Canada), Performance Additives (Malaysia), Munch Chemie (Germany), Nantex (Taiwan), Polychromos (India), Advanced Fluoro Tubes (India), RevoSync (Germany), and Herli Technochem (Germany).',
  'cancarb': 'Cancarb Ltd is a Canadian company and world leader in Thermal Carbon Black (Thermax®). We are their exclusive sales agent for India since 2015.',
  'performance additives': 'Performance Additives Sdn Bhd (Malaysia) specializes in EPDM Rubber products. We became their agent in 2016.',
  'munch': 'Munch Chemie International GmbH (Germany) manufactures specialty rubber chemicals. We are their exclusive sales agent for India.',
  'nantex': 'Nantex Industry Co., Ltd. (Taiwan) produces synthetic rubber including NBR, SBR, and specialty polymers.',
  
  // Products
  'products': 'We supply a comprehensive range of specialty chemicals including:\n\n• Carbon Black (Thermal & Specialty)\n• Synthetic Rubber (NBR, SBR, EPDM)\n• Rubber Chemicals & Additives\n• Fluoropolymers & PTFE\n• Pigments & Dyes\n• Industrial Chemicals\n• Synchronizer Rings (Automotive)\n• Specialty Polymers',
  'what do you sell': 'We are suppliers of specialty chemicals, polymers, rubber additives, carbon black, fluoropolymers, pigments, and industrial chemicals for various industries including automotive, rubber, plastics, and manufacturing.',
  
  // Contact & Location
  'contact': 'You can reach us at:\n\n📧 Email: sales@sarvancarbochem.com\n📞 Phone: +91 44 26872203\n📍 Offices: Chennai & Mumbai, India',
  'location': 'We have offices in Chennai and Mumbai, India. Our headquarters is located in Chennai.',
  'email': 'You can email us at sales@sarvancarbochem.com',
  'phone': 'You can call us at +91 44 26872203',
  
  // About
  'about': 'Sarvan Carbochem LLP is a leading supplier of specialty chemicals, polymers, and rubber additives in India. Founded in 2014 with a legacy dating back to 1941, we represent 8 global principals and serve industries including automotive, rubber, plastics, and manufacturing.',
  'what is sarvan': 'Sarvan Carbochem LLP is a premier specialty chemicals trading company based in India. We are exclusive agents for leading global manufacturers, supplying high-quality chemicals, polymers, and additives to various industries.',
  
  // Industries
  'industries': 'We serve multiple industries including:\n\n• Automotive\n• Rubber Manufacturing\n• Plastics & Polymers\n• Paints & Coatings\n• Textiles\n• Pharmaceuticals\n• General Manufacturing',
};

const SUGGESTED_QUESTIONS = [
  'Who founded Sarvan?',
  'Who are your principals?',
  'What products do you sell?',
  'How can I contact you?',
];

function findAnswer(question: string): string {
  const lowerQuestion = question.toLowerCase().trim();
  
  // Direct keyword matching
  for (const [key, value] of Object.entries(FAQ_DATA)) {
    if (lowerQuestion.includes(key)) {
      return value;
    }
  }
  
  // Fuzzy matching for common patterns
  if (lowerQuestion.includes('founder') || lowerQuestion.includes('start') || lowerQuestion.includes('begin')) {
    return FAQ_DATA['who founded sarvan'];
  }
  if (lowerQuestion.includes('principal') || lowerQuestion.includes('partner') || lowerQuestion.includes('represent')) {
    return FAQ_DATA['principals'];
  }
  if (lowerQuestion.includes('product') || lowerQuestion.includes('sell') || lowerQuestion.includes('offer') || lowerQuestion.includes('supply')) {
    return FAQ_DATA['products'];
  }
  if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('call') || lowerQuestion.includes('email')) {
    return FAQ_DATA['contact'];
  }
  if (lowerQuestion.includes('where') || lowerQuestion.includes('location') || lowerQuestion.includes('office') || lowerQuestion.includes('address')) {
    return FAQ_DATA['location'];
  }
  if (lowerQuestion.includes('about') || lowerQuestion.includes('what is') || lowerQuestion.includes('who is') || lowerQuestion.includes('tell me')) {
    return FAQ_DATA['about'];
  }
  if (lowerQuestion.includes('industry') || lowerQuestion.includes('sector') || lowerQuestion.includes('serve')) {
    return FAQ_DATA['industries'];
  }
  if (lowerQuestion.includes('year') || lowerQuestion.includes('when') || lowerQuestion.includes('established')) {
    return FAQ_DATA['when was sarvan founded'];
  }
  if (lowerQuestion.includes('legacy') || lowerQuestion.includes('1941') || lowerQuestion.includes('history')) {
    return FAQ_DATA['legacy'];
  }
  
  return "I'm sorry, I don't have specific information about that. Please try asking about our principals, products, history, or contact details. You can also reach us directly at sales@sarvancarbochem.com for more detailed inquiries.";
}

export function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Sarvan's AI assistant. I can help you with questions about our company, principals, products, and more. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (question?: string) => {
    const messageText = question || input.trim();
    if (!messageText) return;

    const userMessage: Message = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

    const answer = findAnswer(messageText);
    const assistantMessage: Message = { role: 'assistant', content: answer };
    
    setIsTyping(false);
    setMessages(prev => [...prev, assistantMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full",
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
          "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
          "transition-all duration-300 hover:scale-105 hover:-translate-y-1",
          "font-semibold text-sm",
          isOpen && "opacity-0 pointer-events-none"
        )}
      >
        <Sparkles className="h-4 w-4" />
        Ask AI
        <MessageCircle className="h-4 w-4" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)]",
          "bg-card border border-border rounded-2xl shadow-2xl",
          "transition-all duration-300 transform origin-bottom-right",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Sarvan AI Assistant</h3>
              <p className="text-xs text-muted-foreground">Ask about our company</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/20">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-2",
                message.role === 'user' ? "justify-end" : "justify-start"
              )}
            >
              {message.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  message.role === 'user'
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted/50 text-foreground rounded-bl-md border border-border/50"
                )}
              >
                <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ 
                  __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                }} />
              </div>
              {message.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="h-4 w-4 text-secondary" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-muted/50 rounded-2xl rounded-bl-md px-4 py-3 border border-border/50">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-border bg-card rounded-b-2xl">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              className="flex-1 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary/50 rounded-full px-4"
            />
            <Button
              onClick={() => handleSend()}
              size="icon"
              className="rounded-full bg-primary hover:bg-primary/90 shadow-md"
              disabled={!input.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
