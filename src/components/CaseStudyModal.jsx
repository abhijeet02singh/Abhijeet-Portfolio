import { X } from 'lucide-react';

const CaseStudyModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const caseStudies = {
    '01': {
      title: 'BrainBox',
      subtitle: 'Productivity & Text Utility Platform',
      sections: [
        {
          title: 'Project Overview',
          content: 'BrainBox is a modern all-in-one productivity platform designed to help users organize their thoughts, manage notes, track events, and use powerful text utilities from a single workspace. It combines productivity tools with a clean, modern interface to provide a centralized digital workspace for everyday planning and organization.'
        },
        {
          title: 'Problem It Solves',
          content: 'BrainBox was developed to solve the problem of using multiple disconnected tools for notes, text editing, event tracking, and personal organization. The platform brings essential productivity features into one centralized workspace where users can manage information efficiently and maintain better control over their daily activities.'
        },
        {
          title: 'Core Focus',
          content: [
            'Managing notes and ideas',
            'Recording personal thoughts',
            'Tracking events and activities',
            'Using useful text-processing tools',
            'Secure user authentication',
            'Viewing productivity-related information and analytics',
            'Providing a clean and responsive user experience'
          ]
        },
        {
          title: 'Key Features',
          items: [
            {
              name: 'Text Utilities',
              description: 'BrainBox provides tools for processing and manipulating text efficiently. Users can convert text to uppercase or lowercase, remove unnecessary spaces, count words and characters, analyze text content, copy processed text, and improve readability and formatting.'
            },
            {
              name: 'Notes Management',
              description: 'Users can create, edit, delete, and organize personal notes in one centralized workspace. The feature is designed to provide a simple digital environment for managing ideas and important information.'
            },
            {
              name: 'Thoughts & Journaling',
              description: 'BrainBox allows users to quickly capture thoughts, ideas, and reflections. Users can save random ideas, record important thoughts, maintain personal reflections, and organize information for later use.'
            },
            {
              name: 'Event Management',
              description: 'Users can manage and track important events and activities. Features include creating events, tracking important dates, organizing upcoming activities, and supporting better daily planning.'
            },
            {
              name: 'Secure Authentication',
              description: 'The application includes user registration, secure login, JWT-based authentication, protected routes, and personalized user data to provide secure access to the platform.'
            },
            {
              name: 'Personalized Dashboard',
              description: 'The dashboard acts as the central control panel of BrainBox, providing access to notes, thoughts, events, text utilities, and personal productivity information from a single organized interface.'
            },
            {
              name: 'Responsive Modern UI',
              description: 'BrainBox focuses on responsive layouts, clean navigation, modern cards and components, a dark-themed visual experience, smooth interactions, and user-friendly workflows inspired by modern SaaS design principles.'
            }
          ]
        },
        {
          title: 'Technology Stack',
          tech: [
            { category: 'Frontend', technologies: 'React.js, JavaScript, HTML5, CSS3, Tailwind CSS, React Router' },
            { category: 'Backend', technologies: 'Node.js, Express.js' },
            { category: 'Database', technologies: 'MongoDB, MongoDB Atlas' },
            { category: 'Authentication & Security', technologies: 'JWT Authentication, bcryptjs, Protected Routes' },
            { category: 'Tools & Deployment', technologies: 'Git, GitHub, Netlify / Vercel, Render' }
          ]
        },
        {
          title: 'Application Architecture',
          content: 'BrainBox follows a modern client-server architecture. The React frontend provides the user interface and communicates with the Node.js and Express.js backend through REST APIs. The backend manages authentication, business logic, and API operations, while MongoDB stores application data.',
          flow: 'User → React Frontend → REST APIs → Express / Node.js Backend → MongoDB'
        },
        {
          title: 'My Role',
          role: 'Full-Stack Developer',
          responsibilities: [
            'Designing the application architecture',
            'Building responsive frontend interfaces',
            'Developing reusable React components',
            'Creating REST APIs',
            'Implementing authentication and authorization',
            'Integrating frontend and backend services',
            'Designing and managing database structures',
            'Improving UI/UX and application performance',
            'Deploying and maintaining the application'
          ]
        },
        {
          title: 'Portfolio Case Study',
          subsections: [
            {
              subtitle: 'The Challenge',
              content: 'Modern users often rely on multiple disconnected tools to manage notes, ideas, events, and text-related tasks. This creates fragmented workflows and makes personal organization more difficult.'
            },
            {
              subtitle: 'The Solution',
              content: 'I developed BrainBox, a centralized productivity platform that combines multiple essential tools into one application. Users can manage notes, capture thoughts, track events, and use text-processing utilities through a single modern dashboard.'
            },
            {
              subtitle: 'The Result',
              content: 'BrainBox demonstrates my ability to build a complete full-stack application—from designing the user interface and frontend experience to implementing backend APIs, authentication, and database integration.'
            }
          ]
        }
      ],
      tags: 'React.js • Node.js • Express.js • MongoDB • JWT • Tailwind CSS • REST API • Full Stack',
      links: {
        liveDemo: 'https://brainbox-demo.vercel.app',
        github: 'https://github.com/abhijeetk02/brainbox'
      }
    },
    '02': {
      title: 'GossipsNews',
      subtitle: 'Portfolio Project Case Study',
      sections: [
        {
          title: 'Project Overview',
          content: 'GossipsNews is a modern news aggregation web application designed to bring trending and category-based news into one centralized, easy-to-use platform. The application provides a clean and responsive interface where users can discover, browse, search, and access news articles efficiently. It demonstrates how a modern frontend application can consume dynamic data from external APIs and transform it into a user-friendly digital product.'
        },
        {
          title: 'Problem Statement',
          content: 'News content is distributed across many websites and platforms, requiring users to switch between multiple sources to stay informed. This can make discovering relevant and trending stories time-consuming and create an inconsistent reading experience. GossipsNews addresses this by organizing news content in one centralized interface.'
        },
        {
          title: 'Solution',
          content: 'GossipsNews fetches news dynamically from external data sources and presents articles through an organized, card-based interface. Users can explore different topics, search for relevant stories, and open complete articles from their original sources.'
        },
        {
          title: 'Key Features',
          content: [
            'Latest & Trending News: Displays current and trending stories in an organized news feed.',
            'Category-Based Browsing: Allows users to explore topics such as Technology, Business, Sports, Entertainment, Science, Health, Politics, and World News.',
            'Search Functionality: Helps users discover articles based on keywords and topics.',
            'Dynamic API Integration: Retrieves article data dynamically through REST APIs.',
            'Interactive News Cards: Presents article images, headlines, descriptions, sources, dates, and links in an easy-to-scan layout.',
            'Responsive Design: Optimized for desktop, tablet, and mobile devices.',
            'Article Access: Allows users to navigate to the original source to read the complete article.',
            'Loading & Error Handling: Improves reliability by handling loading states, empty results, and API failures.'
          ]
        },
        {
          title: 'Technology Stack',
          tech: [
            { category: 'React.js', technologies: 'Building the component-based user interface' },
            { category: 'JavaScript', technologies: 'Application logic and dynamic functionality' },
            { category: 'HTML5 & CSS3', technologies: 'Page structure, styling, and responsive design' },
            { category: 'REST API', technologies: 'Retrieving dynamic news data' },
            { category: 'Fetch API / Axios', technologies: 'Communicating with external services' },
            { category: 'Git & GitHub', technologies: 'Version control and source code management' },
            { category: 'Netlify / Vercel', technologies: 'Application deployment' }
          ]
        },
        {
          title: 'Application Architecture',
          content: 'The application uses reusable components to separate the interface into manageable sections such as the navigation bar, search interface, category navigation, news cards, and footer. This component-based approach improves maintainability, code reuse, and scalability.',
          flow: 'User Interaction → React Frontend → API Request → External News API → JSON Response → Data Processing → News Card Components → User Interface'
        },
        {
          title: 'My Contribution',
          content: [
            'Designed the overall user interface and responsive layout.',
            'Built reusable React components for displaying news content.',
            'Integrated external REST APIs and processed JSON responses.',
            'Implemented category-based browsing and topic search.',
            'Managed application state for news data, loading, and errors.',
            'Created organized, card-based layouts for article presentation.',
            'Optimized the application for desktop, tablet, and mobile screens.',
            'Used Git and GitHub for version control and project management.',
            'Prepared the application for deployment.'
          ]
        },
        {
          title: 'Technical Skills Demonstrated',
          items: [
            {
              name: 'Frontend Development',
              description: 'React.js, JavaScript, component-based architecture, responsive web development.'
            },
            {
              name: 'API Integration',
              description: 'REST APIs, HTTP requests, JSON processing, asynchronous data handling.'
            },
            {
              name: 'UI/UX',
              description: 'Information hierarchy, card-based design, responsive layouts, intuitive navigation.'
            },
            {
              name: 'Development Workflow',
              description: 'Git, GitHub, debugging, deployment, error handling.'
            }
          ]
        },
        {
          title: 'Challenges & Solutions',
          items: [
            {
              name: 'Incomplete API Data',
              description: 'Handled missing images, descriptions, or metadata using fallback values and safe UI rendering.'
            },
            {
              name: 'Loading Experience',
              description: 'Used loading states or indicators so users receive feedback while news data is being fetched.'
            },
            {
              name: 'API Failures',
              description: 'Implemented error handling and meaningful messages to prevent the interface from breaking.'
            },
            {
              name: 'Responsive Layout',
              description: 'Used flexible layouts, CSS Grid/Flexbox, and media queries to support multiple screen sizes.'
            }
          ]
        },
        {
          title: 'Future Scope',
          content: [
            'AI-powered article summaries and recommendations',
            'Personalized news feeds',
            'Bookmark and save functionality',
            'Dark mode',
            'Breaking news notifications',
            'User authentication',
            'Multi-language support',
            'Trending topic analytics'
          ]
        },
        {
          title: 'Portfolio Description',
          content: 'GossipsNews is a modern, responsive news aggregation web application built to provide users with a centralized platform for discovering trending and category-based news. The application integrates external REST APIs to dynamically retrieve and display news articles through a clean, card-based interface. Users can browse different categories, search for topics, and access complete articles from their original sources. Built using React.js and JavaScript, GossipsNews demonstrates skills in component-based frontend development, REST API integration, asynchronous data handling, responsive UI design, and building real-world data-driven web applications.'
        }
      ],
      tags: 'React.js • JavaScript • REST API • Fetch API • Axios • Responsive Design • Git • GitHub • Netlify',
      links: {
        liveDemo: 'https://gossipsnews.vercel.app',
        github: 'https://github.com/abhijeetk02/gossipsnews'
      }
    },
    '03': {
      title: 'BandhanAI',
      subtitle: 'AI-Powered Wedding Experience Platform',
      sections: [
        {
          title: 'Project Overview',
          content: 'BandhanAI is an interactive prototype that reimagines the traditional wedding invitation as a complete digital wedding experience. Rather than simply sharing a date and venue, the platform explores how couples can create personalized wedding journeys that bring together storytelling, event information, guest interaction, planning tools, and digital memories. The project was created to demonstrate how AI-assisted, prompt-driven development can transform a complex product idea into a polished and interactive application prototype.'
        },
        {
          title: 'The Idea',
          content: 'Not Just an Invitation. A Digital Celebration of Your Love Story. Traditional wedding invitations are often temporary—they announce an event and are soon forgotten. BandhanAI explores a different approach: a personalized digital space where a wedding invitation can become the starting point of an entire celebration. From sharing the couple\'s story and wedding events to managing guests, exploring AI-generated content, and preserving memories, BandhanAI brings multiple wedding experiences into one unified product concept.'
        },
        {
          title: 'What the Prototype Demonstrates',
          items: [
            {
              name: 'Premium Indian Wedding Experience',
              description: 'A visually rich experience inspired by Indian wedding traditions, luxury aesthetics, cultural celebrations, and multi-day wedding events. The prototype explores dedicated experiences for events such as Mehendi, Haldi, Sangeet, Wedding Ceremony, and Reception.'
            },
            {
              name: 'Digital Invitation Experience',
              description: 'A modern approach to wedding invitations that combines storytelling and event information into a personalized digital experience. The prototype demonstrates how guests could access couple information and stories, wedding event details, dates and schedules, venue information, and personalized wedding content.'
            },
            {
              name: 'Guest Experience & RSVP',
              description: 'The application explores a centralized experience for guests to access important wedding information. Conceptual features include digital RSVP, event schedules, countdown experiences, venue directions, guest information, and interactive event details.'
            },
            {
              name: 'Traditions-Focused Design',
              description: 'Unlike generic event platforms, BandhanAI is designed around the structure of Indian wedding celebrations. The product concept places cultural events and traditions at the center of the user experience, allowing each celebration to have its own identity and information.'
            },
            {
              name: 'Digital Memory Experience',
              description: 'BandhanAI explores the concept of preserving wedding memories within the same digital ecosystem. The prototype includes ideas for showcasing pre-wedding memories, wedding photography, family portraits, event galleries, and personalized digital memory collections.'
            },
            {
              name: 'Unified Wedding Dashboard Concept',
              description: 'The platform explores how different aspects of wedding planning could eventually be organized in one place. Future development could include modules for guest management, RSVP tracking, budget planning, wedding checklists, seating arrangements, and digital invitations.'
            }
          ]
        },
        {
          title: 'Why I Built It',
          content: 'BandhanAI was built as an experiment in prompt-driven application development. The goal was to demonstrate how AI tools and carefully structured prompts can accelerate the journey from Product Idea → Feature Concept → User Experience → Interface Design → Interactive Prototype. The project demonstrates that prompting can be used as a powerful part of the modern development workflow.'
        },
        {
          title: 'My Contribution',
          content: [
            'Defining the product concept and vision',
            'Planning the application structure',
            'Designing the user experience and navigation',
            'Creating the visual interface and design system',
            'Developing interactive frontend screens',
            'Designing wedding-focused user flows',
            'Exploring AI-powered feature concepts',
            'Using structured prompts to accelerate the development and prototyping process'
          ]
        },
        {
          title: 'Technology & Development Approach',
          subsections: [
            {
              subtitle: 'Current Prototype',
              content: 'React.js, JavaScript / TypeScript, Tailwind CSS, Modern Component-Based UI, Responsive Web Design, AI-Assisted Development, Prompt Engineering / Prompt-Driven Development'
            },
            {
              subtitle: 'Future Development Possibilities',
              content: 'The prototype provides a foundation that could later be extended with backend APIs, user authentication, database integration, real AI model integration, RSVP and guest management systems, QR-based wedding access, vendor marketplace functionality, cloud storage and deployment.'
            }
          ]
        },
        {
          title: 'Key Learning',
          content: [
            'Transform a broad product idea into a structured application concept',
            'Design a complex multi-feature user experience',
            'Build visually consistent interfaces',
            'Apply prompt engineering to the development workflow',
            'Rapidly prototype product ideas using AI-assisted tools',
            'Distinguish between a product prototype and a production-ready application',
            'Plan a scalable path from prototype to a future functional product'
          ]
        },
        {
          title: 'Project Status',
          content: 'BandhanAI is currently an interactive prototype and product concept. The current version is designed to demonstrate the application\'s vision, user interface, user experience, and potential workflows. It is not yet a fully functional production application, and some features are represented as prototype interfaces or future concepts. The project can be further developed with backend services, databases, authentication, AI integrations, and production-ready functionality.'
        },
        {
          title: 'Project Summary',
          content: 'BandhanAI is a prompt-driven interactive prototype that reimagines wedding invitations as complete digital wedding experiences. Built using AI-assisted development workflows, the project demonstrates how a complex product idea can be rapidly transformed into a polished interface and interactive prototype, while establishing a foundation for future development into a fully functional wedding technology platform. "Your Wedding Lasts a Few Days. The Memories Last Forever."'
        }
      ],
      tags: 'React.js • TypeScript • Tailwind CSS • AI-Assisted Development • Prompt Engineering • Component-Based UI • Responsive Design',
      links: {
        liveDemo: 'https://bandhanai.vercel.app',
        github: 'https://github.com/abhijeetk02/bandhanai'
      }
    },
    '04': {
      title: 'Personal Portfolio',
      subtitle: 'Professional Portfolio Website',
      sections: [
        {
          title: 'Project Overview',
          content: 'My personal portfolio website is a modern, responsive web application designed to showcase my skills, projects, and professional journey. The site features interactive project showcases, detailed case studies, expertise sections, education background, and a clean, professional design optimized for both desktop and mobile devices.'
        },
        {
          title: 'Purpose & Goals',
          content: 'The portfolio serves as a central hub for potential employers, clients, and collaborators to learn about my capabilities, view my work, and understand my professional background. It demonstrates my technical skills in modern web development while providing an engaging user experience.'
        },
        {
          title: 'Key Features',
          items: [
            {
              name: 'Interactive Project Showcase',
              description: 'A dynamic portfolio section displaying my projects with images, descriptions, technology stacks, and links to live demos and GitHub repositories.'
            },
            {
              name: 'Detailed Case Studies',
              description: 'Comprehensive case studies for major projects that provide in-depth information about project overview, problem statement, solutions, technology stack, and my contributions.'
            },
            {
              name: 'Skills & Expertise',
              description: 'Dedicated sections showcasing my technical skills, areas of expertise, and professional competencies with visual representations and categorization.'
            },
            {
              name: 'Experience & Education',
              description: 'Timeline-based presentation of my work experience and educational background, highlighting key achievements and qualifications.'
            },
            {
              name: 'Responsive Design',
              description: 'Fully responsive layout that provides optimal viewing experience across desktop, tablet, and mobile devices with consistent design and functionality.'
            },
            {
              name: 'Modern UI/UX',
              description: 'Clean, modern interface with smooth animations, intuitive navigation, and professional color scheme designed for optimal user engagement.'
            }
          ]
        },
        {
          title: 'Technical Implementation',
          content: [
            'Component-based React architecture for maintainable and reusable code',
            'Responsive CSS with modern layout techniques (Flexbox, Grid)',
            'Interactive modals for detailed project case studies',
            'Dynamic data management through JavaScript objects',
            'Optimized performance with efficient rendering',
            'Cross-browser compatibility and accessibility considerations'
          ]
        },
        {
          title: 'Technology Stack',
          tech: [
            { category: 'Frontend Framework', technologies: 'React.js, JavaScript (ES6+)' },
            { category: 'Styling', technologies: 'CSS3, CSS Modules, Responsive Design' },
            { category: 'Build Tools', technologies: 'Vite, npm, ES Modules' },
            { category: 'Icons', technologies: 'Lucide React Icons' },
            { category: 'Deployment', technologies: 'Vercel, Netlify, or GitHub Pages' }
          ]
        },
        {
          title: 'Design Philosophy',
          content: 'The portfolio follows a minimalist yet engaging design philosophy. The interface prioritizes content clarity, easy navigation, and professional presentation. Dark mode aesthetics create a modern feel while ensuring excellent readability and visual hierarchy.'
        },
        {
          title: 'My Role',
          role: 'Full-Stack Developer & Designer',
          responsibilities: [
            'Conceptualized the overall portfolio structure and user experience',
            'Designed the visual identity, color scheme, and layout',
            'Implemented all frontend components using React.js',
            'Created responsive designs for mobile, tablet, and desktop',
            'Developed interactive features like case study modals',
            'Organized project data and content management',
            'Optimized performance and loading times',
            'Deployed and maintained the live website'
          ]
        },
        {
          title: 'Challenges & Solutions',
          items: [
            {
              name: 'Content Organization',
              description: 'Structured complex information about skills, projects, and experience into intuitive sections with clear hierarchy and navigation.'
            },
            {
              name: 'Responsive Complexity',
              description: 'Implemented flexible layouts that adapt seamlessly to different screen sizes while maintaining design consistency and functionality.'
            },
            {
              name: 'Performance Optimization',
              description: 'Optimized image loading, component rendering, and code splitting to ensure fast page loads and smooth interactions.'
            },
            {
              name: 'Interactive Elements',
              description: 'Created engaging interactive features like case study modals, project cards, and smooth scrolling while maintaining accessibility.'
            }
          ]
        },
        {
          title: 'Future Enhancements',
          content: [
            'Add blog section for technical articles and tutorials',
            'Implement dark/light theme toggle',
            'Add contact form with backend integration',
            'Include testimonials and recommendations',
            'Add language switching for international reach',
            'Implement advanced animations and micro-interactions',
            'Add project filtering and search functionality',
            'Integrate social media feeds and dynamic content'
          ]
        },
        {
          title: 'Portfolio Value',
          content: 'This portfolio website serves as both a showcase of my technical abilities and a demonstration of my approach to web development. It represents my commitment to clean code, user-centered design, and continuous improvement in modern web technologies.'
        }
      ],
      tags: 'React.js • JavaScript • CSS3 • HTML5 • Responsive Design • Component-Based Architecture • Modern UI/UX • Web Development',
      links: {
        liveDemo: 'https://your-portfolio-url.com',
        github: 'https://github.com/yourusername/portfolio'
      }
    }
  };

  const caseStudy = caseStudies[project.id];

  if (!caseStudy) return null;

  return (
    <div className="case-study-modal-overlay" onClick={onClose}>
      <div className="case-study-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="case-study-close-btn" onClick={onClose} aria-label="Close case study">
          <X className="w-6 h-6" />
        </button>

        <div className="case-study-header">
          <h2 className="case-study-title">{caseStudy.title}</h2>
          <p className="case-study-subtitle">{caseStudy.subtitle}</p>
        </div>

        <div className="case-study-body">
          {caseStudy.sections.map((section, idx) => (
            <div key={idx} className="case-study-section">
              {section.title && <h3 className="case-study-section-title">{section.title}</h3>}
              
              {section.content && typeof section.content === 'string' && (
                <p className="case-study-text">{section.content}</p>
              )}
              
              {section.content && Array.isArray(section.content) && (
                <ul className="case-study-list">
                  {section.content.map((item, i) => (
                    <li key={i} className="case-study-list-item">{item}</li>
                  ))}
                </ul>
              )}
              
              {section.items && (
                <div className="case-study-items">
                  {section.items.map((item, i) => (
                    <div key={i} className="case-study-item">
                      <h4 className="case-study-item-title">{item.name}</h4>
                      <p className="case-study-item-text">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {section.tech && (
                <div className="case-study-tech-grid">
                  {section.tech.map((tech, i) => (
                    <div key={i} className="case-study-tech-item">
                      <strong className="case-study-tech-category">{tech.category}:</strong>
                      <span className="case-study-tech-value">{tech.technologies}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {section.flow && (
                <div className="case-study-flow">
                  <strong>Architecture Flow:</strong>
                  <code className="case-study-flow-code">{section.flow}</code>
                </div>
              )}
              
              {section.role && (
                <div className="case-study-role">
                  <strong>Role:</strong> <span className="case-study-role-value">{section.role}</span>
                </div>
              )}
              
              {section.responsibilities && (
                <ul className="case-study-list">
                  {section.responsibilities.map((resp, i) => (
                    <li key={i} className="case-study-list-item">{resp}</li>
                  ))}
                </ul>
              )}
              
              {section.subsections && (
                <div className="case-study-subsections">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="case-study-subsection">
                      <h4 className="case-study-subsection-title">{sub.subtitle}</h4>
                      <p className="case-study-text">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {caseStudy.tags && (
            <div className="case-study-tags">
              <strong>Tags:</strong>
              <span className="case-study-tags-value">{caseStudy.tags}</span>
            </div>
          )}
          
          {caseStudy.links && (
            <div className="case-study-actions">
              {caseStudy.links.liveDemo && (
                <a 
                  href={caseStudy.links.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="case-study-action-btn case-study-demo-btn"
                >
                  Live Demo
                </a>
              )}
              {caseStudy.links.github && (
                <a 
                  href={caseStudy.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="case-study-action-btn case-study-github-btn"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
