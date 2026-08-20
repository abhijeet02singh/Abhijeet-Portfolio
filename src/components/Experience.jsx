const Experience = () => {
  const workExperienceList = [
    {
      id: 1,
      number: '01',
      role: 'Java Developer Intern',
      company: 'Codec Technologies',
      period: 'Jan 2024',
      duration: '3 Months',
      description: 'Developed Java applications, worked on backend systems, and collaborated with the development team on various projects.',
      skills: ['Java', 'Spring Boot', 'MySQL', 'Git'],
      approvalBadge: 'APPROVED',
      internId: 'CT-2024-001',
      certificate: '/src/assets/images/experience/Java certificate.pdf'
    },
    {
      id: 2,
      number: '02',
      role: 'React.js Web Development Intern',
      company: 'Codtech IT Solutions',
      period: 'Mar 2024',
      duration: '3 Months',
      description: 'Built responsive web applications using React, implemented modern UI components, and worked on frontend architecture.',
      skills: ['React', 'JavaScript', 'CSS', 'Redux'],
      approvalBadge: 'APPROVED',
      internId: 'CT-2024-002',
      certificate: '/src/assets/images/experience/React.js certificate.pdf'
    }
  ];

  return (
    <section className="section paper-texture">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="experience-section-content animated-element fade-right">
        <div className="experience-header">
          <span className="cursive-accent">work</span>
          <h2 className="experience-title">EXPERIENCE</h2>
        </div>

        <div className="experience-cards-new grid-2">
          {workExperienceList.map((exp) => (
            <div key={exp.id} className="experience-card-new">
              <div className="experience-card-inner">
                <div className="experience-card-top">
                  <div className="experience-number">{exp.number}</div>
                  {exp.approvalBadge && (
                    <span className="experience-badge">{exp.approvalBadge}</span>
                  )}
                </div>
                <div className="experience-card-body">
                  <div className="experience-role-row">
                    <h3 className="experience-role">{exp.role}</h3>
                    {exp.internId && (
                      <span className="experience-intern-id">ID: {exp.internId}</span>
                    )}
                  </div>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-period">
                    <span>{exp.period}</span>
                    <span className="experience-dot"></span>
                    <span className="experience-duration">{exp.duration}</span>
                  </p>
                  <p className="experience-description">{exp.description}</p>
                </div>
                {exp.certificate && (
                  <div className="experience-card-certificate">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-certificate-btn"
                    >
                      View Certificate →
                    </a>
                  </div>
                )}
                <div className="experience-card-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="experience-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

