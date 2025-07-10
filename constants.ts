import type { Certification, ResearchPaper, Project } from './types';

export const PROFILE_INFO = {
  name: 'Your Full-Name (Acronym)',
  aspiration: 'Single line Descriptions | can add more | as you wish',
  goal: 'Declare your goals-aims-agenda here',
  keySkills: ['Your Main Skills', 'e.g., Robotics', 'IoT', 'Sustainable Technology', 'Machine Learning', 'Deep Learning', 'LLM-NLP'],
  email: 'your-email-address@domain.com',
};

export const CERTIFICATIONS: Certification[] = [
  { 
    name: 'TinyML2: Applications of TinyML', 
    issuer: 'HarvardX (via edX)', 
    year: 2025,
    id: '6969696969696969696969',
    url: 'https://courses.edx.org/certificates/6969669696969699699669' 
  },
  { 
    name: 'CS50x: CS50's Introduction to Computer Science', 
    issuer: 'HarvardX (via edX)', 
    year: 2025,
    id: '420420420420420',
    url: 'https://courses.edx.org/certificates/420420420420420' 
  },
  { 
    name: 'Emotional Intelligence for Cybersecurity Professionals', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '2054f968890567ee22f748c27944da2574abb97d7b54c6524f7d101739d04718',
    url: 'https://www.linkedin.com/learning/certificates/2054f968890567ee22f748c27944da2574abb97d7b54c6524f7d101739d04718'
  },
  { name: 'Artificial Intelligence & Machine Learning Fundamentals', issuer: 'Grameenphone Academy', year: 2024 },
  { name: 'Career Launchpad', issuer: 'Grameenphone Academy', year: 2024 },
  { name: 'Acing Aptitude Tests', issuer: 'Grameenphone Academy', year: 2024 },
  { name: 'Art of Communication', issuer: 'Grameenphone Academy', year: 2024 },
  { name: 'Corporate Presentation Skills', issuer: 'Grameenphone Academy', year: 2024 },
].sort((a, b) => b.year - a.year);


export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: 'AI Psychological Mirroring: How Artificial Intelligence Systems Create Dangerous Comfort Zones That Delay Critical Mental Health Treatment',
    journal: 'TechRxiv',
    year: 2024,
    url: 'https://www.techrxiv.org/users/937889/articles/1308139-ai-psychological-mirroring-how-artificial-intelligence-systems-create-dangerous-comfort-zones-that-delay-critical-mental-health-treatment',
    authors: 'Khan Tahsin Abrar'
  },
  {
    title: 'Adversarial-Resistant AI Tutoring: A Dual-LLM Architecture for Mitigating H-CoT Attacks and Ensuring Pedagogically-Aligned Code Assistance',
    journal: 'OSF Preprints',
    year: 2024,
    url: 'https://osf.io/preprints/osf/kjng3_v2',
    authors: 'Khan Tahsin Abrar'
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Project Fanum-Tax: AI Porto-rico Builder',
    description: 'relax at Puerto Rican sea-beach',
    tags: ['React', 'TypeScript', 'Node.js', 'Gemini API'],
    imageUrl: 'https://lol.lol',
    liveUrl: '#',
    sourceUrl: 'https://github.com/sophisticatedstupid'
  },
  {
    title: 'Autonomous Drone Delivery System',
    description: 'A simulation of a drone delivery network optimized using pathfinding algorithms and computer vision for obstacle avoidance.',
    tags: ['Python', 'OpenCV', 'Simulation', 'Algorithms'],
    imageUrl: 'https://images.unsplash.com/photo-1579999013498-f23512c5fdae?w=400&h=300&fit=crop',
    sourceUrl: 'https://github.com/sophisticatedstupid'
  },
  {
    title: 'Smart Home IoT Dashboard',
    description: 'A responsive dashboard to monitor and control various IoT devices in a smart home environment.',
    tags: ['Vue.js', 'Firebase', 'IoT', 'PWA'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
    liveUrl: '#',
  },
  {
    title: 'LOL',
    description: 'LOML',
    tags: ['AI', 'Chatbot', 'NLP', 'Fact-Checking', 'GenZ Studies', 'Conversational LLM Advisor'],
    imageUrl: 'https://images',
    sourceUrl: 'https://github.com/sophisticatedstupid'
  },
];

export const NAV_LINKS = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Research', href: '/#research' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Certifications', href: '#/certifications' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/your_github_cred_link' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your_linkedin_link' },
  { name: 'Email', url: '#email' },
];
