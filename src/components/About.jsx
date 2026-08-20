import profileImg2 from '../assets/images/about/profile-smiling.png';

const About = ({ scrollToSection }) => {
  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="about-content grid-2 animated-element fade-right">
        <div className="about-text-block">
          <span className="cursive-accent">Hi, I'm a</span>
          <h2 className="about-name">Abhijeet Singh</h2>
          <p className="about-paragraph">
            I build fast, scalable, and modern web applications using <strong>React</strong>, 
            <strong> Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, 
            and some <strong>AI Integration</strong>.
          </p>
          <div className="about-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn-brutalist btn-burgundy">
             contact
            </button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-brutalist btn-teal">
              Resume
            </a>
          </div>
        </div>

        <div className="about-visual">
          <div className="polaroid-wrapper pushpin">
            <img src={profileImg2} className="polaroid-img-large" alt="Abhijeet Singh smiling, professional headshot" loading="lazy" />
            <p className="polaroid-caption-large">Software Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
