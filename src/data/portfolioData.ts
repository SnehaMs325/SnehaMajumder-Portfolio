// src/data/portfolioData.ts

export const portfolioData = {
  personalInfo: {
    name: "Sneha Majumder",
    role: "Full Stack Developer",
    bio: "Passionate about building scalable web applications and intuitive user experiences.",
    email: "your.email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  },

  about: {
    title: "About",
    titleHighlight: "Me",
    bio: "I'm a computer science student with a passion for building meaningful technology. From hackathons to internships, I thrive on challenges that push me to grow. I believe in learning by doing, collaborating with others, and turning ideas into reality — one line of code at a time.",
    stats: [
      { label: 'Year', value: '2nd Year' },
      { label: 'Degree', value: 'B.Tech CSE' },
      { label: 'Location', value: 'India' },
    ],
  },

  skills: {
    title: "My",
    titleHighlight: "Superpowers",
    subtitle: "These are my current superpowers (still leveling up 💡)",
    items: [
      { id: '1', name: 'HTML & CSS', icon: 'Code2', color: '#a855f7' },
      { id: '2', name: 'JavaScript', icon: 'Code2', color: '#c084fc' },
      { id: '3', name: 'React (Learning)', icon: 'Globe', color: '#818cf8' },
      { id: '4', name: 'Git & GitHub', icon: 'Github', color: '#d8b4fe' },
      { id: '5', name: 'DSA in Java', icon: 'Brain', color: '#6366f1' },
      { id: '6', name: 'Problem Solving', icon: 'Zap', color: '#e879f9' },
    ],
  },

  experience: {
    title: "Experience &",
    titleHighlight: "Journey",
    subtitle: "Hackathons are my playground — long nights, too much coffee, and unexpected breakthroughs.",
    items: [
      {
        id: 'exp-1',
        title: 'Bit 2 Byte Club Member',
        organization: 'College Tech Club',
        location: 'College Campus',
        period: '2024 - Present',
        description: 'Active member contributing to technical events and workshops.',
        details: 'Participated in coding workshops, mentored juniors, and led team projects focused on web development and AI.',
        icon: 'Users',
      },
      {
        id: 'exp-2',
        title: 'Internshala Student Partner',
        organization: 'Internshala',
        location: 'Pan India - Remote',
        period: '2025',
        description: 'Campus ambassador promoting internships and learning opportunities.',
        details: 'Connected students with opportunities, organized webinars and ties.',
        icon: 'Briefcase',
      },
      {
        id: 'exp-3',
        title: 'Hackathon Enthusiast',
        organization: 'Multiple Platforms',
        location: 'Online & Offline',
        period: '2024 - Present',
        description: 'Regular participant in national and online hackathons.',
        details: 'Hackathons are my playground — long nights, too much coffee, and unexpected breakthroughs.',
        icon: 'Award',
      },
    ],
  },

  projects: [
    {
      id: 'proj-1',
      title: "Project One",
      description: "Brief overview of what you built and the problem it solved.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/your-username/project-one",
      liveUrl: "https://project-one.com",
    },
  ],

  contact: {
    title: "Let's",
    titleHighlight: "Connect",
    subtitle: "Drop me a message — let's code, collaborate, or just talk space & ideas 🌠",
    socials: [
      { name: 'Email', icon: 'Mail', href: 'mailto:snehamsofficial@gmail.com', color: '#a855f7' },
      { name: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/in/sneha-majumder-tech001', color: '#c084fc' },
      { name: 'GitHub', icon: 'Github', href: 'https://github.com/SnehaMs325', color: '#d8b4fe' },
    ],
  },
};