const Expertise2 = ({ scrollToSection }) => {
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
        </div>

        <div className="expertise-cards-grid">
          {/* Card 03: AI & Machine Learning */}
          <div className="expertise-card expertise-card-3">
            <div className="expertise-card-inner">
              <div className="expertise-card-header">
                <div className="expertise-card-number expertise-number-teal">03</div>
                <span className="expertise-card-label">INTELLIGENCE & LLMS</span>
              </div>
              <div className="expertise-card-body">
                <h3 className="expertise-card-title">AI & Machine Learning</h3>
                <p className="expertise-card-desc">
                  Developing intelligent applications using Generative AI, LLMs, Computer Vision & data-driven machine learning solutions.
                </p>
              </div>
              <div className="expertise-card-badges">
                <span className="expertise-badge expertise-badge-emerald">OpenAI</span>
                <span className="expertise-badge expertise-badge-amber">Python</span>
                <span className="expertise-badge expertise-badge-yellow">HuggingFace</span>
                <span className="expertise-badge expertise-badge-purple">LangChain</span>
              </div>
              <div className="expertise-card-footer">
                <span className="expertise-footer-text">LLMS · VISION · DATA</span>
                <button onClick={handleExploreSkills} className="expertise-action-btn expertise-btn-teal">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Card 04: Cloud & Deployment */}
          <div className="expertise-card expertise-card-4">
            <div className="expertise-card-inner">
              <div className="expertise-card-header">
                <div className="expertise-card-number expertise-number-blue">04</div>
                <span className="expertise-card-label">DEPLOY · MANAGE · OPTIMIZE</span>
              </div>
              <div className="expertise-card-body">
                <h3 className="expertise-card-title">Cloud & Deployment</h3>
                <p className="expertise-card-desc">
                  Deploying and managing applications using Docker, GitHub Actions, CI/CD pipelines, and performance optimization practices.
                </p>
              </div>
              <div className="expertise-card-badges">
                <span className="expertise-badge expertise-badge-blue">Docker</span>
                <span className="expertise-badge expertise-badge-stone-dark">GitHub Actions</span>
                <span className="expertise-badge expertise-badge-amber">AWS</span>
                <span className="expertise-badge expertise-badge-red">Google Cloud</span>
              </div>
              <div className="expertise-card-footer">
                <span className="expertise-footer-text">SCALABLE · RELIABLE · AUTOMATED</span>
                <button onClick={handleExploreSkills} className="expertise-action-btn expertise-btn-blue">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Playful Sticker */}
        <div className="expertise-sticker">
          <span className="sticker-text">turning ideas into reality!</span>
        </div>
      </div>
    </section>
  );
};

export default Expertise2;
