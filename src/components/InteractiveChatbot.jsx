import { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Building2,
  Cpu,
  User,
  Award
} from 'lucide-react';
import { generateResponse, ChatIntent } from '../utils/chatbotEngine';

/**
 * InteractiveChatbot Component
 * A premium, recruiter-focused portfolio chatbot
 */
export default function InteractiveChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState({ lastIntent: null, mentionedProjects: [] });
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Quick suggestion questions
  const quickSuggestions = [
    { text: 'What are his strongest skills?', icon: Code2 },
    { text: 'Tell me about his projects', icon: Briefcase },
    { text: 'What technologies does he use?', icon: Cpu },
    { text: 'What is his educational background?', icon: GraduationCap },
    { text: 'Tell me about his certificates', icon: Award },
    { text: 'How can I contact him?', icon: Mail }
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Send message
  const sendMessage = async (messageText = inputValue) => {
    if (!messageText || !messageText.trim()) return;

    const userMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Simulate thinking delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Generate response
      const response = generateResponse(messageText, context);
      
      // Update context
      const newContext = {
        lastIntent: detectIntentFromMessage(messageText),
        mentionedProjects: response.mentionedProjects || context.mentionedProjects
      };
      setContext(newContext);

      const botMessage = { 
        role: 'bot', 
        content: response.text,
        suggestions: response.suggestions
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = { 
        role: 'bot', 
        content: 'Sorry, I encountered an error. Please try again.',
        suggestions: ['What are his strongest skills?', 'Tell me about his projects']
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Simple intent detection for context
  const detectIntentFromMessage = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) return ChatIntent.SKILLS;
    if (lowerMessage.includes('project')) return ChatIntent.PROJECTS;
    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) return ChatIntent.EXPERIENCE;
    if (lowerMessage.includes('education') || lowerMessage.includes('college')) return ChatIntent.EDUCATION;
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) return ChatIntent.CONTACT;
    if (lowerMessage.includes('hire') || lowerMessage.includes('opportunity')) return ChatIntent.OPPORTUNITIES;
    if (lowerMessage.includes('about') || lowerMessage.includes('who is')) return ChatIntent.ABOUT;
    return ChatIntent.UNKNOWN;
  };

  // Handle input key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Auto-resize textarea
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  // Format message text (basic markdown-like formatting)
  const formatMessage = (text) => {
    // Convert markdown-like syntax to HTML-safe format
    let formatted = text
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline">$1</a>')
      // Line breaks
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
    
    return formatted;
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: '#B01E3D',
          color: '#FFFDF9',
          padding: '12px 20px',
          borderRadius: '4px',
          boxShadow: '5px 5px 0px #1E1E1E',
          border: '2.5px solid #1E1E1E',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontFamily: "'Outfit', sans-serif",
          transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(-2px, -2px)';
          e.currentTarget.style.boxShadow = '8px 8px 0px #1E1E1E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = '5px 5px 0px #1E1E1E';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translate(2px, 2px)';
          e.currentTarget.style.boxShadow = '2px 2px 0px #1E1E1E';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translate(-2px, -2px)';
          e.currentTarget.style.boxShadow = '8px 8px 0px #1E1E1E';
        }}
        aria-label="Open chat"
      >
        <Bot size={20} />
        <span style={{ display: window.innerWidth >= 640 ? 'inline' : 'none' }}>Chat</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(30, 30, 30, 0.3)',
              backdropFilter: 'blur(4px)',
              zIndex: 99998,
              display: window.innerWidth < 640 ? 'block' : 'none'
            }}
          />

          {/* Chat Container */}
          <div 
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 99999,
              width: window.innerWidth < 640 ? 'calc(100vw - 2rem)' : '400px',
              maxHeight: window.innerWidth < 640 ? '80vh' : '650px',
              backgroundColor: '#FFFDF9',
              borderRadius: '8px',
              boxShadow: '5px 5px 0px #1E1E1E',
              border: '2.5px solid #1E1E1E',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              fontFamily: "'Outfit', sans-serif"
            }}
          >
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                borderBottom: '2.5px solid #1E1E1E',
                backgroundColor: '#F4EFE6'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    backgroundColor: '#B01E3D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #1E1E1E',
                    boxShadow: '2px 2px 0px #1E1E1E'
                  }}>
                    <Bot size={20} style={{ color: '#FFFDF9' }} />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontWeight: '800', 
                      color: '#1E1E1E', 
                      margin: 0,
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '18px'
                    }}>Abhijeet AI</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#1E1E1E', fontFamily: "'Outfit', sans-serif" }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#0F4C43', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '8px',
                    backgroundColor: '#FFFDF9',
                    border: '2.5px solid #1E1E1E',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: '2px 2px 0px #1E1E1E',
                    transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-1px, -1px)';
                    e.currentTarget.style.boxShadow = '3px 3px 0px #1E1E1E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '2px 2px 0px #1E1E1E';
                  }}
                  aria-label="Close chat"
                >
                  <X size={20} style={{ color: '#1E1E1E' }} />
                </button>
              </div>

              {/* Messages Area */}
              <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: '#F4EFE6'
              }}>
                {/* Welcome Screen */}
                {messages.length === 0 && (
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      margin: '0 auto',
                      borderRadius: '8px',
                      backgroundColor: '#B01E3D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      border: '2.5px solid #1E1E1E',
                      boxShadow: '3px 3px 0px #1E1E1E'
                    }}>
                      <Bot size={32} style={{ color: '#FFFDF9' }} />
                    </div>
                    <h2 style={{ 
                      fontSize: '24px', 
                      fontWeight: '800', 
                      color: '#1E1E1E', 
                      margin: 0,
                      fontFamily: "'Playfair Display', serif"
                    }}>
                      Hi, I'm Abhijeet's Assistant 👋
                    </h2>
                    <p style={{ 
                      color: '#1E1E1E', 
                      fontSize: '14px', 
                      margin: 0,
                      fontFamily: 'Outfit, sans-serif',
                      lineHeight: '1.5'
                    }}>
                      I'm here to help you quickly learn about Abhijeet. Ask me anything about his skills, projects, experience, education, or technical expertise.
                    </p>
                    
                    {/* Quick Suggestions */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: window.innerWidth >= 640 ? '1fr 1fr' : '1fr',
                      gap: '8px',
                      paddingTop: '16px'
                    }}>
                      {quickSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => sendMessage(suggestion.text)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px',
                            backgroundColor: '#FFFDF9',
                            border: '2.5px solid #1E1E1E',
                            borderRadius: '4px',
                            boxShadow: '2px 2px 0px #1E1E1E',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: '#1E1E1E'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translate(-1px, -1px)';
                            e.currentTarget.style.boxShadow = '3px 3px 0px #1E1E1E';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translate(0, 0)';
                            e.currentTarget.style.boxShadow = '2px 2px 0px #1E1E1E';
                          }}
                        >
                          <suggestion.icon size={16} style={{ color: '#B01E3D' }} />
                          <span>
                            {suggestion.text}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages */}
                {messages.map((message, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                    }}
                  >
                    {message.role === 'bot' && (
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '4px',
                        backgroundColor: '#B01E3D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '2px solid #1E1E1E',
                        boxShadow: '2px 2px 0px #1E1E1E'
                      }}>
                        <Bot size={16} style={{ color: '#FFFDF9' }} />
                      </div>
                    )}
                    
                    <div
                      style={{
                        maxWidth: '85%',
                        padding: '12px',
                        borderRadius: '8px',
                        background: message.role === 'user'
                          ? '#0F4C43'
                          : '#FFFDF9',
                        border: '2.5px solid #1E1E1E',
                        boxShadow: '3px 3px 0px #1E1E1E',
                        color: message.role === 'user' ? '#FFFDF9' : '#1E1E1E',
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5'
                      }}
                    >
                      <div 
                        dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                      />
                      
                      {/* Suggestions after bot message */}
                      {message.role === 'bot' && message.suggestions && (
                        <div style={{
                          marginTop: '12px',
                          paddingTop: '12px',
                          borderTop: '2.5px solid #1E1E1E',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}>
                          {message.suggestions.map((suggestion, sIndex) => (
                            <button
                              key={sIndex}
                              onClick={() => sendMessage(suggestion)}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#1E1E1E',
                                background: '#F4EFE6',
                                border: '2.5px solid #1E1E1E',
                                borderRadius: '4px',
                                boxShadow: '2px 2px 0px #1E1E1E',
                                cursor: 'pointer',
                                padding: '8px 12px',
                                fontFamily: 'Outfit, sans-serif',
                                transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translate(-1px, -1px)';
                                e.currentTarget.style.boxShadow = '3px 3px 0px #1E1E1E';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translate(0, 0)';
                                e.currentTarget.style.boxShadow = '2px 2px 0px #1E1E1E';
                              }}
                            >
                              • {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {message.role === 'user' && (
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '4px',
                        backgroundColor: '#F2B842',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '2px solid #1E1E1E',
                        boxShadow: '2px 2px 0px #1E1E1E'
                      }}>
                        <User size={16} style={{ color: '#1E1E1E' }} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '4px',
                      backgroundColor: '#B01E3D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '2px solid #1E1E1E',
                      boxShadow: '2px 2px 0px #1E1E1E'
                    }}>
                      <Bot size={16} style={{ color: '#FFFDF9' }} />
                    </div>
                    <div style={{
                      backgroundColor: '#FFFDF9',
                      border: '2.5px solid #1E1E1E',
                      padding: '12px',
                      borderRadius: '8px',
                      boxShadow: '3px 3px 0px #1E1E1E'
                    }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#1E1E1E', borderRadius: '50%', animation: 'bounce 1s infinite' }} />
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#1E1E1E', borderRadius: '50%', animation: 'bounce 1s infinite 0.15s' }} />
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#1E1E1E', borderRadius: '50%', animation: 'bounce 1s infinite 0.3s' }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div style={{
                padding: '16px',
                borderTop: '2.5px solid #1E1E1E',
                backgroundColor: '#F4EFE6'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask anything about Abhijeet..."
                    style={{
                      flex: 1,
                      backgroundColor: '#FFFDF9',
                      border: '2.5px solid #1E1E1E',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      color: '#1E1E1E',
                      resize: 'none',
                      outline: 'none',
                      minHeight: '44px',
                      maxHeight: '120px',
                      fontFamily: 'Outfit, sans-serif',
                      boxShadow: '2px 2px 0px #1E1E1E'
                    }}
                    rows={1}
                    disabled={isTyping}
                    aria-label="Chat input"
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    style={{
                      padding: '12px',
                      backgroundColor: '#B01E3D',
                      color: '#FFFDF9',
                      borderRadius: '4px',
                      border: '2.5px solid #1E1E1E',
                      boxShadow: '2px 2px 0px #1E1E1E',
                      cursor: inputValue.trim() && !isTyping ? 'pointer' : 'not-allowed',
                      opacity: inputValue.trim() && !isTyping ? 1 : 0.5,
                      flexShrink: 0,
                      transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: '700'
                    }}
                    onMouseEnter={(e) => {
                      if (inputValue.trim() && !isTyping) {
                        e.currentTarget.style.transform = 'translate(-1px, -1px)';
                        e.currentTarget.style.boxShadow = '3px 3px 0px #1E1E1E';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                      e.currentTarget.style.boxShadow = '2px 2px 0px #1E1E1E';
                    }}
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
}
