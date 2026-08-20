import { MessageCircle } from 'lucide-react';

const WhatsAppInquiry = ({ phoneNumber = '91 9771384351' }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Abhijeet, I visited your portfolio and would like to connect regarding an opportunity."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-inquiry">
      <div className="whatsapp-inquiry-content">
        <div className="whatsapp-icon-wrapper">
          <MessageCircle className="whatsapp-icon" />
        </div>
        <div className="whatsapp-text-content">
          <h4 className="whatsapp-title">Let's Connect</h4>
          <p className="whatsapp-subtitle">Have an opportunity or idea?</p>
        </div>
        <button 
          onClick={openWhatsApp}
          className="whatsapp-cta-btn"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="whatsapp-btn-icon" />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default WhatsAppInquiry;
