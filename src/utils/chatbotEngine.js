import { skillsData } from '../data/skills';
import { projects } from '../data/projects';
import { educationData } from '../data/education';
import { contactData } from '../data/contact';
import { personalInfo } from '../data/portfolioData';

/**
 * Chat intent types
 */
export const ChatIntent = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
  CONTACT: 'contact',
  OPPORTUNITIES: 'opportunities',
  TECHNOLOGY: 'technology',
  ABOUT: 'about',
  CERTIFICATES: 'certificates',
  UNKNOWN: 'unknown'
};

/**
 * Keyword patterns for each intent
 */
const intentKeywords = {
  [ChatIntent.SKILLS]: [
    'skills',
    'skillset',
    'strongest skills',
    'expertise',
    'strengths',
    'good at',
    'programming languages',
    'frontend skills',
    'backend skills',
    'database skills'
  ],

  [ChatIntent.PROJECTS]: [
    'projects',
    'project',
    'portfolio projects',
    'best project',
    'major project',
    'built',
    'developed',
    'applications',
    'apps',
    'brainbox',
    'gossipsnews',
    'bandhanai',
    'storybook'
  ],

  [ChatIntent.EXPERIENCE]: [
    'experience',
    'work experience',
    'internship',
    'internships',
    'professional experience',
    'job experience',
    'worked',
    'company',
    'role'
  ],

  [ChatIntent.EDUCATION]: [
    'education',
    'educational background',
    'college',
    'university',
    'degree',
    'btech',
    'b.tech',
    'qualification',
    'study',
    'studied',
    'school'
  ],

  [ChatIntent.CONTACT]: [
    'contact',
    'email',
    'linkedin',
    'github',
    'reach',
    'connect',
    'phone',
    'call'
  ],

  [ChatIntent.OPPORTUNITIES]: [
    'hire',
    'hiring',
    'available',
    'opportunity',
    'opportunities',
    'recruiter',
    'position',
    'open to work'
  ],

  [ChatIntent.TECHNOLOGY]: [
    'technologies',
    'technology',
    'tech stack',
    'react',
    'javascript',
    'java',
    'spring boot',
    'node',
    'express',
    'mongodb',
    'mysql',
    'postgresql',
    'frontend',
    'backend',
    'database',
    'python',
    'tailwind',
    'html',
    'css',
    'typescript',
    'git'
  ],

  /**
   * IMPORTANT:
   * Do not use generic words such as:
   * 'about', 'him', 'his', or 'tell me about'
   *
   * Otherwise:
   * "Tell me about his project"
   * will incorrectly match ABOUT.
   */
  [ChatIntent.ABOUT]: [
    'who is abhijeet',
    'about abhijeet',
    'tell me about abhijeet',
    'introduce abhijeet',
    'abhijeet background',
    'abhijeet profile',
    'who are you',
    'tell me about yourself'
  ],

  [ChatIntent.CERTIFICATES]: [
    'certificate',
    'certificates',
    'certification',
    'certifications',
    'certified',
    'credentials',
    'professional credentials',
    'course completion',
    'internship certificate',
    'training',
    'courses',
    'completed course',
    'earned certificate'
  ]
};

/**
 * Normalize and clean user message
 */
function normalizeMessage(message) {
  return message
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}

/**
 * Detect intent from user message using scoring system
 */
export function detectIntent(message, context = {}) {
  const normalized = normalizeMessage(message);
  const scores = {};

  // Initialize scores
  Object.values(ChatIntent).forEach((intent) => {
    scores[intent] = 0;
  });

  // Score each intent based on keyword matches
  Object.entries(intentKeywords).forEach(([intent, keywords]) => {
    keywords.forEach((keyword) => {
      if (normalized.includes(keyword)) {
        scores[intent] += 1;
      }
    });
  });

  /**
   * Give PROJECTS priority when project-related words exist.
   */
  if (
    normalized.includes('project') ||
    normalized.includes('projects') ||
    normalized.includes('brainbox') ||
    normalized.includes('bandhanai') ||
    normalized.includes('gossipsnews')
  ) {
    scores[ChatIntent.PROJECTS] += 2;
  }

  // Context-based project follow-up detection
  if (context.lastIntent === ChatIntent.PROJECTS) {
    if (
      normalized.includes('which one') ||
      normalized.includes('tell me more') ||
      normalized.includes('details') ||
      normalized.includes('about that') ||
      normalized.includes('main one') ||
      normalized.includes('main project')
    ) {
      scores[ChatIntent.PROJECTS] += 3;
    }
  }

  // Find highest scoring intent
  let maxScore = 0;
  let detectedIntent = ChatIntent.UNKNOWN;

  Object.entries(scores).forEach(([intent, score]) => {
    if (score > maxScore) {
      maxScore = score;
      detectedIntent = intent;
    }
  });

  if (maxScore === 0) {
    return ChatIntent.UNKNOWN;
  }

  return detectedIntent;
}

/**
 * Find a specific project by name
 */
function findProjectByName(message) {
  const normalized = normalizeMessage(message);

  for (const project of projects) {
    if (project.inProgress) continue;

    const projectName = project.title.toLowerCase();

    if (normalized.includes(projectName)) {
      return project;
    }
  }

  return null;
}

/**
 * Generate response based on intent and context
 */
export function generateResponse(message, context = {}) {
  try {
    const specificProject = findProjectByName(message);
    const intent = detectIntent(message, context);

    // Specific project gets highest priority
    if (specificProject) {
      return generateProjectResponse(specificProject);
    }

    switch (intent) {
      case ChatIntent.SKILLS:
        return generateSkillsResponse();

      case ChatIntent.PROJECTS:
        return generateProjectsOverview();

      case ChatIntent.EXPERIENCE:
        return generateExperienceResponse();

      case ChatIntent.EDUCATION:
        return generateEducationResponse();

      case ChatIntent.CONTACT:
        return generateContactResponse();

      case ChatIntent.OPPORTUNITIES:
        return generateOpportunitiesResponse();

      case ChatIntent.TECHNOLOGY:
        return generateTechnologyResponse();

      case ChatIntent.ABOUT:
        return generateAboutResponse();

      case ChatIntent.CERTIFICATES:
        return generateCertificatesResponse();

      default:
        return generateFallbackResponse();
    }
  } catch (error) {
    console.error('Error in generateResponse:', error);
    return generateFallbackResponse();
  }
}

/**
 * Generate skills response
 */
function generateSkillsResponse() {
  const frontendSkills = skillsData.frontend.skills
    .map((s) => s.name)
    .join(', ');

  const backendSkills = skillsData.backend.skills
    .map((s) => s.name)
    .join(', ');

  const aiSkills = skillsData.aiTools.skills
    .map((s) => s.name)
    .join(', ');

  return {
    text: `Abhijeet's technical strengths include:

**Frontend Development:** ${frontendSkills}

**Backend Development:** ${backendSkills}

**AI & Tools:** ${aiSkills}`,

    suggestions: [
      'Tell me about his projects',
      'What technologies does he use?',
      'What is his educational background?'
    ]
  };
}

/**
 * Generate specific project response
 */
function generateProjectResponse(project) {
  let links = '';

  if (project.links?.liveDemo) {
    links += `- [Live Demo](${project.links.liveDemo})\n`;
  }

  if (project.links?.github) {
    links += `- [GitHub](${project.links.github})`;
  }

  return {
    text: `**${project.title}**

${project.description}

**Technologies:** ${project.tech || 'Not specified'}${
      links ? `\n\n**Links:**\n${links}` : ''
    }`,

    suggestions: [
      'Tell me about his other projects',
      'What are his strongest skills?',
      'How can I contact him?'
    ],

    project: project.title
  };
}

/**
 * Generate projects overview
 */
function generateProjectsOverview() {
  const activeProjects = projects.filter((project) => !project.inProgress);

  const projectNames = activeProjects
    .map((project) => project.title)
    .join(', ');

  return {
    text: `Abhijeet has worked on several impactful projects, including:

${activeProjects
  .map(
    (project) =>
      `• **${project.title}**: ${project.description.substring(0, 120)}...`
  )
  .join('\n\n')}

**Featured Projects:** ${projectNames}

Would you like to know more about any specific project?`,

    suggestions: [
      'Tell me about BrainBox',
      'Tell me about BandhanAI',
      'Tell me about GossipsNews'
    ],

    mentionedProjects: activeProjects.map((project) => project.title)
  };
}

/**
 * Generate experience response
 */
function generateExperienceResponse() {
  return {
    text: `Abhijeet has gained practical hands-on experience through internships and personal projects.

His work focuses on full-stack development, AI applications, and modern web technologies. He has experience building projects such as BrainBox, BandhanAI, and GossipsNews, along with working with technologies used in frontend and backend development.`,

    suggestions: [
      'Tell me about his projects',
      'What are his strongest skills?',
      'What is his educational background?'
    ]
  };
}

/**
 * Generate education response
 */
function generateEducationResponse() {
  return {
    text: `**Educational Background:**

${educationData
  .map(
    (education) =>
      `• **${education.year}** - ${education.degree}
  ${education.school}`
  )
  .join('\n\n')}`,

    suggestions: [
      'Tell me about his projects',
      'What are his strongest skills?',
      'How can I contact him?'
    ]
  };
}

/**
 * Generate contact response
 */
function generateContactResponse() {
  return {
    text: `You can connect with Abhijeet through:

• **Email:** ${contactData.email}
• **LinkedIn:** ${contactData.linkedin}
• **GitHub:** ${contactData.github}
• **Phone:** ${contactData.phone}`,

    suggestions: [
      'Tell me about his projects',
      'What are his strongest skills?',
      'Is he available for opportunities?'
    ]
  };
}

/**
 * Generate opportunities response
 */
function generateOpportunitiesResponse() {
  return {
    text: `Abhijeet is open to opportunities in software development and technology-focused roles.

His interests include full-stack development, modern web technologies, and AI-powered applications.

**To discuss an opportunity:**
• Email: ${contactData.email}
• LinkedIn: ${contactData.linkedin}`,

    suggestions: [
      'Tell me about his projects',
      'What are his strongest skills?',
      'How can I contact him?'
    ]
  };
}

/**
 * Generate technology response
 */
function generateTechnologyResponse() {
  const allSkills = [
    ...skillsData.frontend.skills,
    ...skillsData.backend.skills,
    ...skillsData.aiTools.skills
  ].map((skill) => skill.name);

  return {
    text: `Abhijeet's technology stack includes:

${allSkills.map((skill) => `• ${skill}`).join('\n')}`,

    suggestions: [
      'Tell me about his projects',
      'What are his strongest skills?',
      'What is his educational background?'
    ]
  };
}

/**
 * Generate about response
 */
function generateAboutResponse() {
  return {
    text: `**About Abhijeet:**

${personalInfo.visionQuote}

${personalInfo.missionQuote}

He is a Computer Science and Engineering graduate with an interest in full-stack development, AI applications, and modern web technologies. Abhijeet is passionate about building practical products that deliver real value.`,

    suggestions: [
      'Tell me about his projects',
      'What are his strongest skills?',
      'What is his educational background?'
    ]
  };
}

/**
 * Generate certificates response
 */
function generateCertificatesResponse() {
  const certificates = [
    {
      title: 'React.js Web Development Intern',
      organization: 'Codtech IT Solutions',
      period: 'Mar 2024 - May 2024',
      duration: '3 Months',
      hours: '120 Hours',
      type: 'Internship'
    },
    {
      title: 'Java Developer Intern',
      organization: 'Codec Technologies',
      period: 'Jan 2024 - Mar 2024',
      duration: '3 Months',
      hours: '120 Hours',
      type: 'Internship'
    },
    {
      title: 'Java Object Oriented Programming',
      organization: 'Great Learning',
      period: 'Dec 2023',
      hours: '40 Hours',
      type: 'Course'
    },
    {
      title: 'Python Software Development',
      organization: 'Udemy',
      period: 'Nov 2023',
      hours: '35 Hours',
      type: 'Course'
    },
    {
      title: 'Web Design and Development',
      organization: 'Coursera',
      period: 'Oct 2023',
      hours: '45 Hours',
      type: 'Course'
    }
  ];

  const internshipCerts = certificates.filter(
    (certificate) => certificate.type === 'Internship'
  );

  const courseCerts = certificates.filter(
    (certificate) => certificate.type === 'Course'
  );

  let response = '**Professional Certifications & Credentials:**\n\n';

  response += '**Internships:**\n';

  internshipCerts.forEach((certificate) => {
    response += `• **${certificate.title}** - ${certificate.organization}
  ${certificate.period} | ${certificate.duration} | ${certificate.hours}

`;
  });

  response += '**Courses:**\n';

  courseCerts.forEach((certificate) => {
    response += `• **${certificate.title}** - ${certificate.organization}
  ${certificate.period} | ${certificate.hours}

`;
  });

  return {
    text: response,

    suggestions: [
      'Tell me about his projects',
      'What are his strongest skills?',
      'What is his educational background?'
    ]
  };
}

/**
 * Generate fallback response
 */
function generateFallbackResponse() {
  return {
    text: `I can help you learn about Abhijeet's skills, projects, technical expertise, experience, education, certificates, and professional background. Try asking me something related to his portfolio!`,

    suggestions: [
      'What are his strongest skills?',
      'Tell me about his projects',
      'What technologies does he use?',
      'What is his educational background?',
      'Tell me about his certificates'
    ]
  };
}