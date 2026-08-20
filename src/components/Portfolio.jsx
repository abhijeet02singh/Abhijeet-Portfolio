import { useState } from 'react';
import { projects } from '../data/projects';
import CaseStudyModal from './CaseStudyModal';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const handleViewCaseStudy = (project) => {
    if (project.hasCaseStudy && !project.inProgress) {
      setIsCaseStudyOpen(true);
    }
  };

  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <span className="signature">Abhijeet Singh</span>
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="portfolio-section-content animated-element scale-up">
        <div className="portfolio-header">
          <h2 className="portfolio-title">PROJECTS</h2>
          <p className="portfolio-subtitle">
            A showcase of my technical journey through full-stack development, creative problem-solving, and innovative design solutions.
          </p>
        </div>

        <div className="project-browser scrapbook-card paperclip">
          {/* Project Tabs */}
          <div className="project-tabs">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(idx)}
                className={`project-tab-btn ${activeProject === idx ? 'active' : ''}`}
              >
                Project {proj.id}
              </button>
            ))}
          </div>

          {/* Active Project Viewer */}
          <div className="project-viewer">
            <div className="project-details">
              <div className="project-header-block">
                <span className="project-number">Project {projects[activeProject].id}</span>
                <h3 className="project-name">{projects[activeProject].title}</h3>
              </div>
              
              <p className="project-desc">{projects[activeProject].description}</p>
              
              {projects[activeProject].tech && (
                <div className="project-tech-block">
                  <strong>Tech Stack:</strong>
                  <code className="project-tech-code">{projects[activeProject].tech}</code>
                </div>
              )}

              {projects[activeProject].inProgress ? (
                <button className="btn-brutalist btn-mustard" disabled>
                  In Progress
                </button>
              ) : (
                <div className="project-actions">
                  {projects[activeProject].links?.liveDemo && (
                    <a 
                      href={projects[activeProject].links.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-brutalist btn-burgundy"
                    >
                      Live Demo
                    </a>
                  )}
                  {projects[activeProject].links?.github && (
                    <a 
                      href={projects[activeProject].links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-brutalist btn-dark"
                    >
                      GitHub
                    </a>
                  )}
                  {projects[activeProject].hasCaseStudy && (
                    <button 
                      onClick={() => handleViewCaseStudy(projects[activeProject])} 
                      className="btn-brutalist btn-teal"
                    >
                      View Case Study
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="project-visuals">
              {projects[activeProject].image ? (
                <div className="project-main-image-wrapper">
                  <img
                    src={projects[activeProject].image}
                    className="project-main-image"
                    alt={`Screenshot of ${projects[activeProject].title} project interface`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="project-placeholder flex-center">
                  <span className="cursive-accent" style={{ fontSize: '2.5rem' }}>Development in progress...</span>
                </div>
              )}

              {projects[activeProject].extraImages?.length > 0 && (
                <div className="project-extra-gallery">
                  {projects[activeProject].extraImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="project-gallery-img"
                      alt={`Additional screenshot ${i+1} showing ${projects[activeProject].title} project features`}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CaseStudyModal 
        isOpen={isCaseStudyOpen} 
        onClose={() => setIsCaseStudyOpen(false)} 
        project={projects[activeProject]}
      />
    </section>
  );
};

export default Portfolio;
