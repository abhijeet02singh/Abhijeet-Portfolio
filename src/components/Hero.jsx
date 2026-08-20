import profileImg1 from '../assets/images/hero/profile.png';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>
      
      <div className="hero-content grid-2 animated-element fade-left">
        <div className="hero-visual">
          <div className="polaroid-wrapper">
            <img src={profileImg1} className="polaroid-img" alt="Portrait of Abhijeet Singh, a software developer" loading="eager" />
            <p className="polaroid-caption">Abhijeet Singh</p>
          </div>
        </div>
        
        <div className="hero-text-block">
          <div className="hero-banner">
            <h1 className="hero-title">ABHIJEET SINGH</h1>
          </div>
          <p className="hero-paragraph">
            Full-Stack Web Developer, AI Explorer, and Problem Solver crafting scalable digital experiences.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('portfolio')} className="btn-brutalist btn-burgundy">
              Explore Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="btn-brutalist btn-teal">
              Get to Know Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
