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


  projects: [
    {
      id: 'proj-1',
      title: "Customer Segmentation using K-Means",
      description: "An unsupervised machine learning project that groups customers based on annual income and spending behavior. Applied K-Means clustering and the Elbow Method to identify distinct customer segments and generate insights for targeted marketing strategies.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "K-Means", "Matplotlib"],
      githubUrl: "https://github.com/SnehaMs325/customer-segmentation-kmeans",
      liveUrl: "",
      isComingSoon: false,
    },
    {
      id: 'proj-2',
      title: "Customer Churn Prediction",
      description: "A machine learning classification project designed to predict customer churn using historical customer data. Applied data preprocessing, Random Forest classification, model evaluation, and feature importance analysis to identify customers at risk of leaving.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Random Forest", "NumPy"],
      githubUrl: "https://github.com/SnehaMs325/customer-churn-prediction",
      liveUrl: "",
      isComingSoon: false,
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