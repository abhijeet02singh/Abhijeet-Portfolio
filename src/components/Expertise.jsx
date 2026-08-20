const Expertise = ({ scrollToSection }) => {

  const handleExploreSkills = () => {
    if (scrollToSection) {
      scrollToSection('skills');
    }
  };

  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="expertise-content animated-element fade-up">
        <div className="expertise-header">
          <span className="cursive-accent">Building Modern</span>
          <h2 className="expertise-title">Digital Solutions with Code & AI</h2>
          <p className="expertise-subtitle">
            Combining full-stack development, artificial intelligence, and cloud technologies to create scalable and impactful digital experiences.
          </p>
        </div>

        <div className="expertise-cards-grid">
          {/* Card 01: Frontend Development */}
          <div className="expertise-card expertise-card-1">
            <div className="expertise-card-inner">
              <div className="expertise-card-header">
                <div className="expertise-card-number expertise-number-burgundy">01</div>
                <span className="expertise-card-label">MAIN EXPERTISE</span>
              </div>
              <div className="expertise-card-body">
                <h3 className="expertise-card-title">Frontend Development</h3>
                <p className="expertise-card-desc">
                  Crafting responsive and intuitive user interfaces on modern web technologies.
                </p>
              </div>
              <div className="expertise-card-badges">
                <span className="expertise-badge expertise-badge-cyan">React</span>
                <span className="expertise-badge expertise-badge-amber">JavaScript</span>
                <span className="expertise-badge expertise-badge-sky">TailwindCSS</span>
              </div>
              <div className="expertise-card-footer">
                <span className="expertise-footer-text">BUILD · DESIGN · CREATE</span>
                <button onClick={handleExploreSkills} className="expertise-action-btn expertise-btn-burgundy">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Card 02: Backend Development */}
          <div className="expertise-card expertise-card-2">
            <div className="expertise-card-inner">
              <div className="expertise-card-header">
                <div className="expertise-card-number expertise-number-orange">02</div>
                <span className="expertise-card-label">API & DATA CORE</span>
              </div>
              <div className="expertise-card-body">
                <h3 className="expertise-card-title">Backend Development</h3>
                <p className="expertise-card-desc">
                  Building secure REST APIs, authentication systems, server-side applications, and database integrations.
                </p>
              </div>
              <div className="expertise-card-badges">
                <span className="expertise-badge expertise-badge-emerald">Node.js</span>
                <span className="expertise-badge expertise-badge-stone">Express.js</span>
                <span className="expertise-badge expertise-badge-emerald-dark">MongoDB</span>
                <span className="expertise-badge expertise-badge-blue">PostgreSQL</span>
              </div>
              <div className="expertise-card-footer">
                <span className="expertise-footer-text">APIS · AUTH · DATABASE</span>
                <button onClick={handleExploreSkills} className="expertise-action-btn expertise-btn-orange">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
