import { educationData } from '../data/education';

const Education = () => {
  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="edu-content animated-element scale-up">
        <h2 className="edu-title">EDUCATION BACKGROUND</h2>
        
        <div className="timeline-container scrapbook-card pushpin">
          <div className="timeline-line"></div>
          
          <div className="timeline-grid">
            {educationData.map((edu, index) => (
              <div key={index} className="timeline-node">
                <div className={`node-marker ${edu.markerClass}`}></div>
                <h4 className="node-year">{edu.year}</h4>
                <h3 className="node-degree">{edu.degree}</h3>
                <p className="node-school">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
