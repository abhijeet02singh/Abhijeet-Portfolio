import { useState, useEffect } from 'react';
import {
  FileText,
  Send,
  Maximize2,
  Minimize2,
  ChevronDown,
  ArrowUp,
  Share2,
  Check,
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppInquiry from './WhatsAppInquiry';

const sections = [
  { num: 1, title: 'Home', id: 'hero' },
  { num: 2, title: 'About', id: 'about' },
  { num: 3, title: 'Skills', id: 'skills' },
  { num: 4, title: 'Education', id: 'education' },
  { num: 5, title: 'Experience', id: 'experience' },
  { num: 6, title: 'Projects', id: 'portfolio' },
  { num: 7, title: 'Credentials', id: 'credentials' },
  { num: 8, title: 'Vision', id: 'vision' },
  { num: 9, title: 'Contact', id: 'contact' },
];

const Navigation = ({ scrollToSection }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Progress calculation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0
          ? (window.scrollY / totalHeight) * 100
          : 0;

      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      // Detect active section
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.4;

      let activeIndex = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);

        if (element && scrollPosition >= element.offsetTop) {
          activeIndex = index;
        }
      });

      setCurrentSection(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener(
      'fullscreenchange',
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        'fullscreenchange',
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.1 },
      });

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSectionSelect = (sectionIndex) => {
    const section = sections[sectionIndex];

    if (!section) return;

    scrollToSection(section.id);
    setCurrentSection(sectionIndex);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="nav-progress-bar">
        <div
          className="nav-progress-fill"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* Navigation Header */}
      <header className="nav-header">

        {/* Brand */}
        <button
          className="nav-brand-badge"
          onClick={() => handleSectionSelect(0)}
          type="button"
        >
          <span className="nav-brand-name">
            Abhijeet Singh
          </span>

          <span className="nav-brand-tag">
            PORTFOLIO
          </span>
        </button>

        {/* Page Counter */}
        <div className="nav-center">
          <div className="nav-dropdown-container">

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen((previous) => !previous)
              }
              className="nav-jump-button"
              aria-expanded={isMenuOpen}
            >
              <span className="nav-current-page">
                {String(currentSection + 1).padStart(2, '0')}
              </span>

              <span className="nav-divider">
                /
              </span>

              <span className="nav-total-page">
                {String(sections.length).padStart(2, '0')}
              </span>

              <ChevronDown
                className={`nav-chevron ${
                  isMenuOpen ? 'nav-chevron-open' : ''
                }`}
              />
            </button>

            {/* Dropdown */}
            {isMenuOpen && (
              <div className="nav-dropdown">

                <div className="nav-dropdown-header">
                  Jump to Section
                </div>

                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() =>
                      handleSectionSelect(index)
                    }
                    className={`nav-dropdown-item ${
                      currentSection === index
                        ? 'nav-dropdown-active'
                        : ''
                    }`}
                  >
                    <span>
                      <span className="nav-item-num">
                        {String(section.num).padStart(2, '0')}
                      </span>

                      {section.title}
                    </span>
                  </button>
                ))}

              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="nav-actions">

          <button
            className="nav-resume-btn"
            type="button"
            onClick={() =>
              window.open('/resume.pdf', '_blank')
            }
          >
            <FileText className="nav-icon" />
            <span>Resume</span>
          </button>

          <button
            className="nav-contact-btn"
            type="button"
            onClick={() => handleSectionSelect(8)}
          >
            <Send className="nav-icon" />
            <span className="nav-contact-text">
              Contact
            </span>
          </button>

          <button
            className="nav-whatsapp-btn"
            type="button"
            onClick={() => setShowWhatsApp(true)}
            title="Chat on WhatsApp"
          >
            <MessageCircle className="nav-icon" />
            <span className="nav-whatsapp-text">
              WhatsApp
            </span>
          </button>

          <button
            className="nav-share-btn"
            type="button"
            onClick={handleShare}
            title="Share Portfolio"
          >
            {copied ? (
              <Check className="nav-icon" />
            ) : (
              <Share2 className="nav-icon" />
            )}
          </button>

          <button
            className="nav-fullscreen-btn"
            type="button"
            onClick={toggleFullscreen}
            title={
              isFullscreen
                ? 'Exit Fullscreen'
                : 'Enter Fullscreen'
            }
          >
            {isFullscreen ? (
              <Minimize2 className="nav-icon" />
            ) : (
              <Maximize2 className="nav-icon" />
            )}
          </button>

        </div>
      </header>

      {/* Back to Top */}
      {scrollProgress > 10 && (
        <div className="nav-bottom-actions">
          <button
            type="button"
            onClick={scrollToTop}
            className="nav-back-to-top"
            title="Back to Top"
          >
            <ArrowUp className="nav-icon" />
          </button>
        </div>
      )}

      {/* WhatsApp Modal */}
      {showWhatsApp && (
        <div
          className="whatsapp-modal-overlay"
          onClick={() => setShowWhatsApp(false)}
        >
          <div
            className="whatsapp-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="whatsapp-modal-close"
              onClick={() => setShowWhatsApp(false)}
              aria-label="Close"
            >
              ×
            </button>
            <WhatsAppInquiry phoneNumber="919771384351" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;