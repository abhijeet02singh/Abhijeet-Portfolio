import { useState } from 'react';
import cert1 from '../assets/images/certificates/React.js certificate1.pdf';
import cert2 from '../assets/images/certificates/Java certificate1.pdf';
import cert3 from '../assets/images/certificates/oops java certificate.pdf';
import cert4 from '../assets/images/certificates/python certificate.pdf';
import cert5 from '../assets/images/certificates/web design certificate.pdf';

const Credentials = () => {
  const [selectedCred, setSelectedCred] = useState(null);

  const professionalCredentials = [
    {
      id: 1,
      type: 'internship',
      title: 'React.js Web Development Intern',
      organization: 'Codtech IT Solutions',
      period: 'Mar 2024 - May 2024',
      duration: '3 Months',
      hours: '120 Hours',
      description: 'Completed intensive React.js development internship focusing on modern web applications, component architecture, and frontend best practices.',
      signatory: 'Dr. Rajesh Kumar',
      signatoryRole: 'Technical Director',
      certificateImage: cert1
    },
    {
      id: 2,
      type: 'internship',
      title: 'Java Developer Intern',
      organization: 'Codec Technologies',
      period: 'Jan 2024 - Mar 2024',
      duration: '3 Months',
      hours: '120 Hours',
      description: 'Gained hands-on experience in Java application development, backend systems, and enterprise software solutions.',
      signatory: 'Prof. S. Sharma',
      signatoryRole: 'Head of Engineering',
      certificateImage: cert2
    },
    {
      id: 3,
      type: 'course',
      title: 'Java Object Oriented Programming',
      organization: 'Great Learning',
      period: 'Dec 2023',
      hours: '40 Hours',
      description: 'Mastered core OOP concepts including encapsulation, inheritance, polymorphism, and abstraction in Java.',
      signatory: 'Dr. A. Patel',
      signatoryRole: 'Course Instructor',
      certificateImage: cert3
    },
    {
      id: 4,
      type: 'course',
      title: 'Python Software Development',
      organization: 'Udemy',
      period: 'Nov 2023',
      hours: '35 Hours',
      description: 'Developed comprehensive Python skills including data structures, algorithms, and software design patterns.',
      signatory: 'Dr. M. Williams',
      signatoryRole: 'Lead Instructor',
      certificateImage: cert4
    },
    {
      id: 5,
      type: 'course',
      title: 'Web Design and Development',
      organization: 'Coursera',
      period: 'Oct 2023',
      hours: '45 Hours',
      description: 'Acquired expertise in HTML, CSS, JavaScript, and responsive web design principles.',
      signatory: 'Prof. L. Johnson',
      signatoryRole: 'Program Director',
      certificateImage: cert5
    }
  ];

  const handleInspect = (cred) => {
    setSelectedCred(cred);
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

      <div className="credentials-content animated-element rotate-in">
        <h2 className="credentials-title">PROFESSIONAL CREDENTIALS</h2>
        
        <div className="credentials-frame">
          <div className="credentials-rail"></div>
          <div className="credentials-grid">
            {professionalCredentials.map((cred) => (
              <div key={cred.id} className="credential-item">
                <div className="credential-pin"></div>
                <div
                  onClick={() => handleInspect(cred)}
                  className="credential-card"
                >
                  <div className="credential-card-header">
                    <span className="credential-type">
                      {cred.type === 'internship' ? 'INTERNSHIP' : 'COURSE'}
                    </span>
                    <span className="credential-icon">🏆</span>
                  </div>
                  <h3 className="credential-title">{cred.title}</h3>
                  <p className="credential-org">{cred.organization}</p>
                  <div className="credential-details">
                    <p>{cred.period}</p>
                    {cred.hours && <p>Length: {cred.hours}</p>}
                    {cred.duration && <p>Duration: {cred.duration}</p>}
                  </div>
                  {cred.certificateImage && (
                    <span className="credential-attached">DOC ATTACHED</span>
                  )}
                  <div className="credential-footer">
                    <span className="credential-signatory">{cred.signatory}</span>
                    <span className="credential-verified">VERIFIED</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCred && (
        <div
          className="credential-modal-overlay"
          onClick={() => setSelectedCred(null)}
        >
          <div
            className="credential-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCred(null)}
              className="credential-modal-close"
            >
              ✕
            </button>

            <div className="credential-modal-header">
              <div className="credential-modal-icon">🏆</div>
              <div>
                <span className="credential-modal-type">
                  {selectedCred.type.toUpperCase()} CERTIFICATION
                </span>
                <h3 className="credential-modal-title">{selectedCred.title}</h3>
              </div>
            </div>

            <div className="credential-modal-body">
              <p className="credential-modal-org">{selectedCred.organization}</p>
              <p className="credential-modal-desc">{selectedCred.description}</p>

              <div className="credential-modal-grid">
                <div className="credential-modal-info">
                  <span className="credential-modal-label">Timeline</span>
                  <span className="credential-modal-value">{selectedCred.period}</span>
                </div>
                <div className="credential-modal-info">
                  <span className="credential-modal-label">Signatory</span>
                  <span className="credential-modal-value">{selectedCred.signatory}</span>
                  {selectedCred.signatoryRole && (
                    <span className="credential-modal-role">{selectedCred.signatoryRole}</span>
                  )}
                </div>
              </div>

              {selectedCred.certificateImage && (
                <div className="credential-modal-action">
                  <a
                    href={selectedCred.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credential-modal-btn"
                  >
                    View Official Certificate Document →
                  </a>
                </div>
              )}
            </div>

            <div className="credential-modal-footer">
              <button
                onClick={() => setSelectedCred(null)}
                className="credential-modal-close-btn"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Credentials;
