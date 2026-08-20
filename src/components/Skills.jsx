import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="skills-content animated-element fade-left">
        <div className="skills-header">
          <span className="cursive-accent">Technical</span>
          <h2 className="skills-title">SKILLS</h2>
          <p className="skills-subtitle">Full-stack expertise across modern development and AI.</p>
        </div>

        <div className="skills-columns">
          {/* Column 1: Frontend */}
          <div className="skills-col scrapbook-card paperclip">
            <h3 className={`skills-col-title ${skillsData.frontend.borderClass}`}>{skillsData.frontend.title}</h3>
            <div className="skills-tags">
              {skillsData.frontend.skills.map((skill, index) => (
                <span key={index} className={`skill-tag ${skill.tagClass}`}>{skill.name}</span>
              ))}
            </div>
          </div>

          {/* Column 2: Backend */}
          <div className="skills-col scrapbook-card paperclip">
            <h3 className={`skills-col-title ${skillsData.backend.borderClass}`}>{skillsData.backend.title}</h3>
            <div className="skills-tags">
              {skillsData.backend.skills.map((skill, index) => (
                <span key={index} className={`skill-tag ${skill.tagClass}`}>{skill.name}</span>
              ))}
            </div>
          </div>

          {/* Column 3: AI & Tools */}
          <div className="skills-col scrapbook-card paperclip paperclip-right">
            <h3 className={`skills-col-title ${skillsData.aiTools.borderClass}`}>{skillsData.aiTools.title}</h3>
            <div className="skills-tags">
              {skillsData.aiTools.skills.map((skill, index) => (
                <span key={index} className={`skill-tag ${skill.tagClass}`}>{skill.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
