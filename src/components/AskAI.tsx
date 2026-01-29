import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Verified FAQs from sarvancarbochem.com
const FAQS: FAQ[] = [
  {
    question: "Who are the founders of Sarvan Carbochem?",
    answer: "Sarvan Carbochem LLP was founded by Mr. A Jai Venkkatesh and Mr. Karthi Sankar, who are the Managing Partners of the company."
  },
  {
    question: "When was Sarvan Carbochem established?",
    answer: "Sarvan Carbochem LLP was established in December 2014."
  },
  {
    question: "Where are your offices located?",
    answer: "We have offices in Mumbai and Chennai, with warehouses in Chennai and Ahmedabad.\n\n**Chennai (Registered Office):**\nH09, Central Avenue, Korattur, Chennai – 600 080, Tamil Nadu\nPhone: +91 44 26872203 / 25342046\n\n**Mumbai Office:**\nNo. 424, Shiv Centre, Plot No. 72, D.B.C, Sector – 17, Vashi, Navi Mumbai – 400 705\nPhone: +91 22 2766 48 66 / 77"
  },
  {
    question: "What is your email address?",
    answer: "You can reach us at sales@sarvancarbochem.com"
  },
  {
    question: "What is your LLP Identification Number?",
    answer: "Our LLP Identification Number is AAD-0296"
  },
  {
    question: "What products does Sarvan Carbochem offer?",
    answer: "We offer a wide range of products including:\n• Polymers\n• Fillers\n• Processing Additives\n• Release Agents\n• Coupling Agents\n• Products for Plastics\n• Specialty Chemicals\n• Specialty Masterbatches"
  },
  {
    question: "What industries do you serve?",
    answer: "We serve the Indian Rubber and Plastic Industries with technical marketing of Synthetic Rubbers and Rubber and Plastic Additives."
  },
  {
    question: "Who are your principals/partners?",
    answer: "Our esteemed principals include:\n• Cancarb Ltd (Canada) - Thermal Carbon Black\n• Performance Additives (Malaysia) - EPDM Rubber\n• Munch Chemie International (Germany) - Rubber Chemicals\n• Nantex Industry (Taiwan) - Synthetic Rubber\n• Polychromos (India) - Pigments & Dyes\n• Advanced Fluoro Tubes (India) - PTFE Products\n• RevoSync (Germany) - Synchronizer Rings\n• Herli Technochem (Germany) - Specialty Chemicals"
  },
  {
    question: "What is special about your team?",
    answer: "Our company has the able support of competent senior team members having more than 100 years of combined experience among themselves. Professionalism is always the utmost important aspect within our organization."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us at:\n\n📧 Email: sales@sarvancarbochem.com\n📞 Chennai: +91 44 26872203 / 25342046\n📞 Mumbai: +91 22 2766 48 66 / 77\n\nOr visit our Contact page for more details."
  }
];

export function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm here to help you learn about Sarvan Carbochem LLP. Please select a question from the dropdown below, or type your own question."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const findAnswer = (question: string): string | null => {
    const lowerQuestion = question.toLowerCase().trim();
    
    for (const faq of FAQS) {
      const faqLower = faq.question.toLowerCase();
      // Check for keyword matches
      const keywords = faqLower.split(' ').filter(w => w.length > 3);
      const matchCount = keywords.filter(kw => lowerQuestion.includes(kw)).length;
      
      if (matchCount >= 2 || lowerQuestion.includes(faqLower.slice(0, 20))) {
        return faq.answer;
      }
    }
    
    // Specific keyword matching
    if (lowerQuestion.includes('founder') || lowerQuestion.includes('who started') || lowerQuestion.includes('who created')) {
      return FAQS[0].answer;
    }
    if (lowerQuestion.includes('when') && (lowerQuestion.includes('start') || lowerQuestion.includes('establish') || lowerQuestion.includes('founded'))) {
      return FAQS[1].answer;
    }
    if (lowerQuestion.includes('office') || lowerQuestion.includes('location') || lowerQuestion.includes('address') || lowerQuestion.includes('where')) {
      return FAQS[2].answer;
    }
    if (lowerQuestion.includes('email')) {
      return FAQS[3].answer;
    }
    if (lowerQuestion.includes('llp') || lowerQuestion.includes('identification') || lowerQuestion.includes('registration')) {
      return FAQS[4].answer;
    }
    if (lowerQuestion.includes('product') || lowerQuestion.includes('sell') || lowerQuestion.includes('offer')) {
      return FAQS[5].answer;
    }
    if (lowerQuestion.includes('industry') || lowerQuestion.includes('sector') || lowerQuestion.includes('serve')) {
      return FAQS[6].answer;
    }
    if (lowerQuestion.includes('principal') || lowerQuestion.includes('partner') || lowerQuestion.includes('represent')) {
      return FAQS[7].answer;
    }
    if (lowerQuestion.includes('team') || lowerQuestion.includes('experience')) {
      return FAQS[8].answer;
    }
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('phone') || lowerQuestion.includes('call') || lowerQuestion.includes('reach')) {
      return FAQS[9].answer;
    }
    
    return null;
  };

  const handleSelectFAQ = async (faq: FAQ) => {
    setShowDropdown(false);
    
    const userMessage: Message = { role: 'user', content: faq.question };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 400));

    const assistantMessage: Message = { role: 'assistant', content: faq.answer };
    setIsTyping(false);
    setMessages(prev => [...prev, assistantMessage]);
  };

  const handleSend = async () => {
    const messageText = input.trim();
    if (!messageText) return;

    const userMessage: Message = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    const answer = findAnswer(messageText);
    
    const assistantMessage: Message = { 
      role: 'assistant', 
      content: answer || "I don't have specific information about that in my knowledge base. For detailed assistance, please contact us at **sales@sarvancarbochem.com** — we will be happy to assist you!\n\nYou can also select from the frequently asked questions in the dropdown above."
    };
    
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
          "fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)]",
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
              <p className="text-xs text-muted-foreground">Frequently Asked Questions</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* FAQ Dropdown */}
        <div className="p-3 border-b border-border bg-muted/30" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-xl",
                "bg-card border border-border hover:border-primary/50",
                "text-sm font-medium text-foreground",
                "transition-all duration-200",
                showDropdown && "border-primary ring-2 ring-primary/20"
              )}
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                Select a frequently asked question
              </span>
              <ChevronDown className={cn(
                "h-4 w-4 text-muted-foreground transition-transform duration-200",
                showDropdown && "rotate-180"
              )} />
            </button>
            
            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 z-[100] bg-card border border-border rounded-xl shadow-xl max-h-[250px] overflow-y-auto">
                {FAQS.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectFAQ(faq)}
                    className={cn(
                      "w-full text-left px-4 py-3 text-sm",
                      "hover:bg-primary/10 transition-colors",
                      "border-b border-border/50 last:border-b-0",
                      "text-foreground hover:text-primary"
                    )}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="h-[280px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/20">
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

        {/* Input */}
        <div className="p-4 border-t border-border bg-card rounded-b-2xl">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Or type your question..."
              className="flex-1 bg-muted/50 border-0 focus:ring-1 focus:ring-primary/50 rounded-full px-4 py-2.5 text-sm outline-none"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="rounded-full bg-primary hover:bg-primary/90 shadow-md h-10 w-10"
              disabled={!input.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Can't find your answer? Email us at sales@sarvancarbochem.com
          </p>
        </div>
      </div>
    </>
  );
}
