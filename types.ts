export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface UserProfile {
  name: string;
  title: string;
  about: string;
  location: string;
  email: string;
  avatar: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface AppState {
  user: UserProfile;
  skills: Skill[];
  projects: Project[];
  isAdmin: boolean;
}

export const INITIAL_STATE: AppState = {
  isAdmin: false, // Default to false, user logs in to edit
  user: {
    name: "Alex Architect",
    title: "Senior Full-Stack Engineer",
    about: "I craft high-performance digital experiences with a focus on aesthetics and usability. Specializing in React ecosystem and scalable backend architectures.",
    location: "San Francisco, CA",
    email: "alex@example.com",
    avatar: "https://picsum.photos/id/64/400/400",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  skills: [
    { id: '1', name: 'React', level: 95, category: 'Frontend' },
    { id: '2', name: 'TypeScript', level: 90, category: 'Frontend' },
    { id: '3', name: 'Node.js', level: 85, category: 'Backend' },
    { id: '4', name: 'Figma', level: 80, category: 'Design' },
    { id: '5', name: 'MongoDB', level: 80, category: 'Backend' },
    { id: '6', name: 'Tailwind', level: 95, category: 'Frontend' },
  ],
  projects: [
    {
      id: '1',
      title: 'Neon Dashboard',
      description: 'A real-time analytics dashboard featuring glassmorphism design and websocket data streams.',
      tags: ['React', 'D3.js', 'Socket.io'],
      image: 'https://picsum.photos/id/48/800/600',
      link: '#'
    },
    {
      id: '2',
      title: 'E-Commerce API',
      description: 'Scalable microservices architecture for a high-volume fashion retailer.',
      tags: ['Node.js', 'Docker', 'Redis'],
      image: 'https://picsum.photos/id/20/800/600',
      link: '#'
    },
    {
      id: '3',
      title: 'Aura UI Kit',
      description: 'An open-source component library built for speed and accessibility.',
      tags: ['TypeScript', 'Storybook', 'A11y'],
      image: 'https://picsum.photos/id/180/800/600',
      link: '#'
    }
  ]
};