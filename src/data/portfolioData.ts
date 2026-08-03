// src/data/portfolioData.ts

export const portfolioData = {
  personalInfo: {
    name: "Sneha Majumder",
    role: "Aspiring Data Scientist & Data Analyst",
    bio: "Computer Science student specializing in Data Analytics, Exploratory Data Analysis (EDA), and Python data manipulation, backed by strong UI/UX frontend development skills.",
    email: "snehamsofficial@gmail.com",
    github: "https://github.com/SnehaMs325",
    linkedin: "https://www.linkedin.com/in/sneha-majumder-tech001",
  },

  about: {
    title: "About",
    titleHighlight: "Me",
    bio: "I am a Computer Science student dedicated to solving problems through data analysis, exploratory data research, and visual insights. Skilled in Python, Pandas, NumPy, and Data Visualization, alongside core Data Structures & Algorithms in Java. I also leverage my frontend React and UI/UX skillset to build clean, intuitive dashboards and data presentations.",
    stats: [
      { label: 'Year', value: '3rd Year' },
      { label: 'Degree', value: 'B.Tech CSE' },
      { label: 'Focus', value: 'DataSci · ML · Frontend' },
    ],
  },

  skills: {
    title: "Technical",
    titleHighlight: "Skills",
    subtitle: "Core toolkit spanning data manipulation, exploratory analysis, frontend design, and software engineering fundamentals.",
    items: [
      { id: '1', name: 'Python (Pandas & NumPy)', icon: 'Code2', color: '#a855f7' },
      { id: '2', name: 'EDA & Data Visualization', icon: 'BarChart3', color: '#c084fc' },
      { id: '3', name: 'React & Frontend UI/UX', icon: 'Globe', color: '#818cf8' },
      { id: '4', name: 'HTML, CSS & JavaScript', icon: 'Layout', color: '#d8b4fe' },
      { id: '5', name: 'DSA in Java', icon: 'Brain', color: '#6366f1' },
      { id: '6', name: 'Git & GitHub', icon: 'Github', color: '#e879f9' },
    ],
  },

  experience: {
    title: "Experience &",
    titleHighlight: "Journey",
    subtitle: "Practical exposure through technical clubs, campus ambassadorships, and rapid project hackathons.",
    items: [
      {
        id: 'exp-1',
        title: 'Bit 2 Byte Club Member',
        organization: 'College Tech Club',
        location: 'College Campus',
        period: '2024 - Present',
        description: 'Active contributor participating in programming workshops and collaborative tech activities.',
        details: 'Engaged in peer coding sessions, supported technical event execution, and collaborated on software and logic-building projects.',
        icon: 'Users',
      },
      {
        id: 'exp-2',
        title: 'Internshala Student Partner',
        organization: 'Internshala',
        location: 'Remote',
        period: '2025',
        description: 'Campus ambassador facilitating tech initiatives and student skill growth.',
        details: 'Promoted technical training programs, organized awareness sessions, and drove student engagement across campus.',
        icon: 'Briefcase',
      },
      {
        id: 'exp-3',
        title: 'Hackathons',
        organization: '1x Winner (1st Position Track Prize)',
        location: 'Online / On-Site',
        period: '2024 - Present',
        description: 'Secured 1st position as a track prize winner by designing and developing rapid technical prototypes under strict hackathon deadlines.',
        details: 'Collaborated in a high-performing team to translate data concepts and responsive UI wireframes into a winning, functional prototype.',
        icon: 'Award',
      },
    ],
  },

  projects: [
    {
      id: 'proj-1',
      title: "Data Analytics & EDA Showcase",
      description: "A series of exploratory data analysis (EDA) workflows using Python, Pandas, and visualization libraries to perform data cleaning and extract statistical insights.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/SnehaMs325",
      liveUrl: "",
      isComingSoon: true,
    },
    {
      id: 'proj-2',
      title: "Machine Learning Predictive Model",
      description: "An upcoming hands-on project applying core Machine Learning algorithms for classification and predictive modeling on real-world datasets.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      githubUrl: "https://github.com/SnehaMs325",
      liveUrl: "",
      isComingSoon: true,
    },
    {
      id: 'proj-3',
      title: "Interactive Portfolio Platform",
      description: "A responsive developer portfolio engineered with React, Tailwind CSS, and Framer Motion to present data projects and technical skills cleanly.",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/SnehaMs325",
      liveUrl: "https://snehamajumder-portfolio.netlify.app/",
      isComingSoon: false,
    },
  ],

  contact: {
    title: "Let's",
    titleHighlight: "Connect",
    subtitle: "Open to Data Science, Data Analytics, and Software Engineering internships — let's connect!",
    socials: [
      { name: 'Email', icon: 'Mail', href: 'mailto:snehamsofficial@gmail.com', color: '#a855f7' },
      { name: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/in/sneha-majumder-tech001', color: '#c084fc' },
      { name: 'GitHub', icon: 'Github', href: 'https://github.com/SnehaMs325', color: '#d8b4fe' },
    ],
  },
};