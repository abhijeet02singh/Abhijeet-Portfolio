import proj1 from '../assets/images/projects/brainbox.png';
import proj2 from '../assets/images/projects/gossipsnews.png';
import proj3_main from '../assets/images/projects/bandhanai-main.png';
import proj3_s1 from '../assets/images/projects/bandhanai-s1.png';
import proj3_s2 from '../assets/images/projects/bandhanai-s2.png';
import proj4_main from '../assets/images/projects/portfolio.png';
import proj4_s1 from '../assets/images/projects/portfolio1.png';
import proj4_s2 from '../assets/images/projects/portfolio2.png';
import proj5_s1 from '../assets/images/projects/birthday-storybook-s1.png';
import proj5_s2 from '../assets/images/projects/birthday-storybook-s2.png';

export const projects = [
  {
    id: '01',
    title: 'BrainBox',
    description: 'BrainBox is a modern productivity workspace designed to help users organize their notes, thoughts, events, and everyday text-related tasks in one place. Built with a modern full-stack architecture, BrainBox combines productivity tools with a scalable foundation for future AI-powered personal knowledge management.',
    tech: 'React | Node.js | Express | MongoDB | JWT',
    image: proj1,
    extraImages: [],
    hasCaseStudy: true,
    links: {
      liveDemo: 'https://brainbox-demo.vercel.app',
      github: 'https://github.com/abhijeetk02/brainbox'
    }
  },
  {
    id: '02',
    title: 'GossipsNews',
    description: 'A modern web application that aggregates trending news from multiple sources and displays them in a clean, organized, and responsive interface.',
    tech: 'React.js | Tailwind CSS | News API | Axios',
    image: proj2,
    extraImages: [],
    hasCaseStudy: true,
    links: {
      liveDemo: 'https://gossipsnews.vercel.app',
      github: 'https://github.com/abhijeetk02/gossipsnews'
    }
  },
  {
    id: '03',
    title: 'BandhanAI',
    description: 'An AI-powered wedding planning application designed to simplify operations for couples. Features include AI Website Builder, Guest List CRM, Seating Arrangement helpers, Budget Planner Portal, and interactive Budget Analytics.',
    tech: 'React | Python | AI Agentic Framework | charts.js',
    image: proj3_main,
    extraImages: [proj3_s1, proj3_s2],
    hasCaseStudy: true,
    links: {
      liveDemo: 'https://bandhanai.vercel.app',
      github: 'https://github.com/abhijeetk02/bandhanai'
    }
  },
  {
    id: '04',
    title: 'Personal Portfolio',
    description: 'A modern, responsive personal portfolio website showcasing my skills, projects, and professional journey. Features include interactive project showcases, case studies, expertise sections, and a clean, professional design optimized for desktop and mobile devices.',
    tech: 'React.js | JavaScript | CSS3 | HTML5 | Responsive Design',
    image: proj4_main,
    extraImages: [proj4_s1, proj4_s2],
    hasCaseStudy: true,
    links: {
      liveDemo: 'https://your-portfolio-url.com',
      github: 'https://github.com/yourusername/portfolio'
    }
  },
  {
    id: '05',
    title: 'Birthday Storybook',
    description: 'A personalized interactive digital storybook and memory journey. Designed to turn traditional birthday wishes into an engaging, immersive digital gift experience.',
    tech: 'HTML5 | CSS3 Animation | JavaScript | Audio API',
    image: proj5_s1,
    extraImages: [proj5_s2],
    hasCaseStudy: true,
     links: {
      liveDemo: 'https://your-portfolio-url.com',
      github: 'https://github.com/yourusername/portfolio'
    }
  },
  {
    id: '06',
    title: 'AI Related',
    description: 'process',
    tech: '....',
    image: null,
    extraImages: [],
    inProgress: true,
  }
];
