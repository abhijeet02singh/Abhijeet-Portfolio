import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { X, Lightbulb, Target } from 'lucide-react';

const VisionMission = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="vision-mission-content grid-2 animated-element fade-left">
        <div className="vision-block scrapbook-card paperclip">
          <h2 className="vision-title color-burgundy">VISION</h2>
          <p className="vision-quote">
            "{personalInfo.visionQuote}"
          </p>
          <button 
            onClick={() => setActiveModal('vision')}
            className="btn-brutalist btn-burgundy mt-2"
          >
            Learn More
          </button>
        </div>

        <div className="mission-block scrapbook-card paperclip paperclip-right">
          <h2 className="mission-title color-teal">MISSION</h2>
          <p className="mission-quote">
            "{personalInfo.missionQuote}"
          </p>
          <button 
            onClick={() => setActiveModal('mission')}
            className="btn-brutalist btn-teal mt-2"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Expanded Vision / Mission Dialog */}
      {activeModal && (
        <div
          className="vision-mission-modal-overlay"
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="vision-mission-modal"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="vision-mission-modal-close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="vision-mission-modal-header">
              <div
                className={`vision-mission-modal-icon-wrapper ${
                  activeModal === 'vision' ? 'vision' : 'mission'
                }`}
              >
                {activeModal === 'vision' ? (
                  <Lightbulb className="w-6 h-6" />
                ) : (
                  <Target className="w-6 h-6" />
                )}
              </div>
              <h3 className="vision-mission-modal-title">
                {activeModal === 'vision' ? 'Long-term Vision' : 'Guiding Mission'}
              </h3>
            </div>

            <div className="vision-mission-modal-body">
              {activeModal === 'vision' ? (
                <>
                  <p className="vision-mission-modal-quote">
                    {personalInfo.visionQuote}
                  </p>
                  <p>
                    I strive to bridge the gap between academic computer science theory and production-scale software delivery. My aim is to architect resilient systems that scale effortlessly, whether via intelligent autonomous agents, reactive frontend interfaces, or enterprise-grade server backends.
                  </p>
                  <p>
                    Long term, I seek to lead innovative engineering teams, contribute to impactful open-source tools, and push the boundaries of AI integration in everyday consumer software.
                  </p>
                </>
              ) : (
                <>
                  <p className="vision-mission-modal-quote">
                    {personalInfo.missionQuote}
                  </p>
                  <p>
                    Every day I focus on hands-on code craftsmanship: writing clean, typed, modular code, reviewing security best practices, and constantly exploring new paradigms like generative AI integration and full-stack cloud workflows.
                  </p>
                  <p>
                    My standard of success is shipping software that users genuinely love to use—fast, stable, accessible, and solving practical real-world problems.
                  </p>
                </>
              )}
            </div>

            <div className="vision-mission-modal-footer">
              <button
                onClick={() => setActiveModal(null)}
                className="vision-mission-modal-close-btn"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default VisionMission;
