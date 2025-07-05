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
// Add more and more certs here by following this format, copy-paste and edit the info for each certs
  { 
    name: 'VSFO01: Verizon Skill Forward Orientation Course', 
    issuer: 'edX', 
    year: 2025,
    id: 'bb2c6afc56e44abcadcb457c98f7ef71',
    url: 'https://courses.edx.org/certificates/bb2c6afc56e44abcadcb457c98f7ef71' 
  },
  { 
    name: 'Strategic Product Development: A Practical Guide to Research', 
    issuer: 'MTF Institute (via Udemy)', 
    year: 2025,
    id: 'UC-3e53e611-7ca3-42bd-acbc-b73a184c5ebe',
    url: 'https://www.udemy.com/certificate/UC-3e53e611-7ca3-42bd-acbc-b73a184c5ebe'
  },
  { 
    name: 'Strategic Product Development: A Practical Guide to Research', 
    issuer: 'MTF Institute (GTFI Instituto)', 
    year: 2025,
    id: '4554836007KA'
  },
  { 
    name: 'GSWAIA: Getting Started with AI Agents in GitHub Copilot', 
    issuer: 'Microsoft (via edX)', 
    year: 2025,
    id: '80c178aa3b6e464298415fb03780ef79',
    url: 'https://courses.edx.org/certificates/80c178aa3b6e464298415fb03780ef79' 
  },
  { 
    name: 'IoT Foundations: Operating System Applications', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '3a20fcbc34611d6faba290f228ee5e3b17dfc1b353a9419f2ce2338893dbe22f',
    url: 'https://www.linkedin.com/learning/certificates/3a20fcbc34611d6faba290f228ee5e3b17dfc1b353a9419f2ce2338893dbe22f'
  },
  { 
    name: 'Artificial Intelligence Foundations: Thinking Machines', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '1d9858ba17539edc9467c3783201317e761fa6a39d269291c18e29214afc7d74',
    url: 'https://www.linkedin.com/learning/certificates/1d9858ba17539edc9467c3783201317e761fa6a39d269291c18e29214afc7d74'
  },
  { 
    name: 'Digital Technologies Case Studies: AI, IOT, Robotics, Blockchain', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: 'fc1340cd31ee4d001139d8317101495a3bafdf5078469966731b95bf4b5f670f',
    url: 'https://www.linkedin.com/learning/certificates/fc1340cd31ee4d001139d8317101495a3bafdf5078469966731b95bf4b5f670f'
  },
  { 
    name: 'Arduino: Prototyping', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '217fd46dfb9b889bb33d7e899f8ffd408db92dbad9e8286915e8100ea54ac97d',
    url: 'https://www.linkedin.com/learning/certificates/217fd46dfb9b889bb33d7e899f8ffd408db92dbad9e8286915e8100ea54ac97d'
  },
  { 
    name: 'IoT Foundations: Device Management', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '3769eb6ba51576f5a95283a9797c872fdcf817f82ae7cfd822752f68bea19d83',
    url: 'https://www.linkedin.com/learning/certificates/3769eb6ba51576f5a95283a9797c872fdcf817f82ae7cfd822752f68bea19d83'
  },
  { 
    name: 'IoT Foundations: Operating Systems Fundamentals', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '97705b07422273990d14a471f8a245127ab49afeb0c3b16456a1960797d48dab',
    url: 'https://www.linkedin.com/learning/certificates/97705b07422273990d14a471f8a245127ab49afeb0c3b16456a1960797d48dab'
  },
  { 
    name: 'Learning Arduino: Interfacing with Analog Devices', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '61c08c25b65821a0d33e6f4f90598662055be25620b201f55b9c7e20807279c9',
    url: 'https://www.linkedin.com/learning/certificates/61c08c25b65821a0d33e6f4f90598662055be25620b201f55b9c7e20807279c9'
  },
  { 
    name: 'IoT Foundations: Low-Power Wireless Networking', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: 'd3750107d34bff4998da2a44a020c1e16c619e43c59e89081e2f2547e3f069f0',
    url: 'https://www.linkedin.com/learning/certificates/d3750107d34bff4998da2a44a020c1e16c619e43c59e89081e2f2547e3f069f0'
  },
  { 
    name: 'Real Ethical Hacking in 43 Hours: Certificated CSEH+CEH PRO', 
    issuer: 'OCSALY Academy (via Udemy)', 
    year: 2025,
    id: 'UC-9d52faf1-6162-495e-9e38-fc160e6f2cb8',
    url: 'https://www.udemy.com/certificate/UC-9d52faf1-6162-495e-9e38-fc160e6f2cb8' 
  },
  { 
    name: 'Learning Arduino: Foundations', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '2d650101efee3013c2dc4ee91c27758f563cf8deb8ff2b0d9d303f2aa8e97c68',
    url: 'https://www.linkedin.com/learning/certificates/2d650101efee3013c2dc4ee91c27758f563cf8deb8ff2b0d9d303f2aa8e97c68'
  },
  { 
    name: 'IoT Foundations: Fundamentals', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '6f941dcbc76be3ee150363e044734625a1f8df99ed561dd865b6ce4ff8e66a65',
    url: 'https://www.linkedin.com/learning/certificates/6f941dcbc76be3ee150363e044734625a1f8df99ed561dd865b6ce4ff8e66a65'
  },
  { 
    name: 'Input Sensors with PLC: Sinking and Sourcing', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '86c0e823ce2b0da0bdfc6abc431517e77b3c0f8cc75c0b7770adefa4130c2999',
    url: 'https://www.linkedin.com/learning/certificates/86c0e823ce2b0da0bdfc6abc431517e77b3c0f8cc75c0b7770adefa4130c2999'
  },
  { 
    name: 'Input Sensors with PLC: 4-20 mA Current Loop', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '2a5ae1c356eafcc5e1d107f3ac0e87cb29f029040003cb22820b6b4e473635e0',
    url: 'https://www.linkedin.com/learning/certificates/2a5ae1c356eafcc5e1d107f3ac0e87cb29f029040003cb22820b6b4e473635e0'
  },
  { 
    name: 'Learning Arduino: Interfacing with Hardware', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: 'f4eddc8362b6e0f8fedf2803ad5c681a2c0005b92662d5535e146d16cfd6d150',
    url: 'https://www.linkedin.com/learning/certificates/f4eddc8362b6e0f8fedf2803ad5c681a2c0005b92662d5535e146d16cfd6d150'
  },
  { 
    name: 'Electronics Foundations: Semiconductor Devices', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '1d5fc7574a669dc0bdf4e264784475d10ab9a63997f12576a1129f73a6a21ea9',
    url: 'https://www.linkedin.com/learning/certificates/1d5fc7574a669dc0bdf4e264784475d10ab9a63997f12576a1129f73a6a21ea9'
  },
  { 
    name: 'Electronics Foundations: Basic Circuits', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '8a76267252370c1a7b092ccb16153a142ff17fee152e4640adacd148428a2707',
    url: 'https://www.linkedin.com/learning/certificates/8a76267252370c1a7b092ccb16153a142ff17fee152e4640adacd148428a2707'
  },
  { 
    name: 'Electronics Foundations: Fundamentals', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '618a99676d0b8f579cd2bd4e41e11830c60b598a9dae2362bcdc0f0924a13ed5',
    url: 'https://www.linkedin.com/learning/certificates/618a99676d0b8f579cd2bd4e41e11830c60b598a9dae2362bcdc0f0924a13ed5'
  },
  { 
    name: 'Software Development Fundamentals', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '033c58018f5bba66256fe4775bd1d9cda9db1b0e18eef671f891e9ef22c4c776',
    url: 'https://www.linkedin.com/learning/certificates/033c58018f5bba66256fe4775bd1d9cda9db1b0e18eef671f891e9ef22c4c776'
  },
  { 
    name: 'Emotional Intelligence for Cybersecurity Professionals', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '2054f968890567ee22f748c27944da2574abb97d7b54c6524f7d101739d04718',
    url: 'https://www.linkedin.com/learning/certificates/2054f968890567ee22f748c27944da2574abb97d7b54c6524f7d101739d04718'
  },
  { 
    name: 'Career Essentials in GitHub Professional Certificate', 
    issuer: 'LinkedIn Learning & GitHub', 
    year: 2025,
    id: '27f6a3c822e552f8dc7d7ebd84cbe96893a3e2a607b54ee4ed78eba11792ed19',
    url: 'https://www.linkedin.com/learning/certificates/27f6a3c822e552f8dc7d7ebd84cbe96893a3e2a607b54ee4ed78eba11792ed19'
  },
  { 
    name: 'MySQL for Beginners: A Complete Training for beginners', 
    issuer: 'Meta Brains (via Udemy)', 
    year: 2025,
    id: 'UC-f5c8625b-cee1-4f8d-8f99-da9bae5f9a5f',
    url: 'https://www.udemy.com/certificate/UC-f5c8625b-cee1-4f8d-8f99-da9bae5f9a5f' 
  },
  { 
    name: 'CSS, JavaScript And PHP Complete Course For Beginners', 
    issuer: 'PROPER DOT INSTITUTE (via Udemy)', 
    year: 2025,
    id: 'UC-ea92d608-f78f-4981-8c76-a67bfe9d2282',
    url: 'https://www.udemy.com/certificate/UC-ea92d608-f78f-4981-8c76-a67bfe9d2282' 
  },
  { 
    name: 'Computer Networks Fundamentals', 
    issuer: 'Cyber Quince (via Udemy)', 
    year: 2025,
    id: 'UC-d67fa77e-5ec8-4e69-a798-1a6d26deafad',
    url: 'https://www.udemy.com/certificate/UC-d67fa77e-5ec8-4e69-a798-1a6d26deafad' 
  },
  { 
    name: 'Python: From Zero to Hero - Code Your Way to the Top', 
    issuer: 'Ahmed El Mohandes (via Udemy)', 
    year: 2025,
    id: 'UC-1928195f-889d-4733-8eca-6ca7f5641c21',
    url: 'https://www.udemy.com/certificate/UC-1928195f-889d-4733-8eca-6ca7f5641c21' 
  },
  { 
    name: 'Cybersecurity Upskilling: A Practical Guide to LinkedIn Learning\'s Cybersecurity Framework', 
    issuer: 'LinkedIn Learning', 
    year: 2025,
    id: '23a6fcde4ed32417184c92e04d3d429617acdd5aba091f5bc31111adb12339a4',
    url: 'https://www.linkedin.com/learning/certificates/23a6fcde4ed32417184c92e04d3d429617acdd5aba091f5bc31111adb12339a4'
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
    title: 'Project Genesis: AI Portfolio Builder',
    description: 'A web application that uses generative AI to help users create stunning portfolios by simply providing their data.',
    tags: ['React', 'TypeScript', 'Node.js', 'Gemini API'],
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-26fc7ee5505e?w=400&h=300&fit=crop',
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
    title: 'IslamicaAI',
    description: 'An Islamic chatbot designed to provide authenticated knowledge about Islam, combating the spread of misinformation from AI and deepfake fabrications.',
    tags: ['AI', 'Chatbot', 'NLP', 'Fact-Checking', 'Islamic Studies', 'Conversational LLM Advisor'],
    imageUrl: 'https://images.unsplash.com/photo-1599250322964-f58476b8b933?w=400&h=300&fit=crop',
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
  { name: 'GitHub', url: 'https://github.com/sophisticatedstupid' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/khantahsinabrar' },
  { name: 'Email', url: '#email' },
];
