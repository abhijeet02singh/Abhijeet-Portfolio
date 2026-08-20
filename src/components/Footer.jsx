import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({
  leftLinks = [],
  rightLinks = [],
  copyrightText = '',
  barCount = 23,
}) => {
  const waveRefs = useRef([]);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentFooter = footerRef.current;
    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []);

  useEffect(() => {
    let t = 0;

    const animateWave = () => {
      const waveElements = waveRefs.current;
      let offset = 0;

      waveElements.forEach((element, index) => {
        if (element) {
          offset += Math.max(0, 20 * Math.sin((t + index) * 0.3));
          element.style.transform = `translateY(${index + offset}px)`;
        }
      });

      t += 0.1;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      animateWave();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="footer-section"
    >
      <div className="footer-content">
        <div className="footer-left">
          <blockquote className="footer-quote">
            <h4><b>"Think Bold. Design with Purpose. Innovate Without Limits."</b></h4>
          </blockquote>
          <ul className="footer-links">
            {leftLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-copyright">
            <span className="footer-copyright-icon">©</span>
            {copyrightText}
          </p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            {rightLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={scrollToTop} className="footer-back-to-top">
            <ArrowUp className="footer-back-icon" />
            Back to top
          </button>
        </div>
      </div>
      <div className="footer-wave-container">
        <div className="footer-wave-inner">
          {Array.from({ length: barCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => { waveRefs.current[index] = el; }}
              className="footer-wave-segment"
              style={{
                height: `${index + 1}px`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
