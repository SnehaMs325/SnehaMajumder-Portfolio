
export const portfolioData = {
  personalInfo: {
    name: "Sneha Majumder",
    email: "snehamsofficial@gmail.com",
    github: "https://github.com/SnehaMs325",
    linkedin: "https://www.linkedin.com/in/sneha-majumder-tech001",
  },

  about: {
    stats: [
      { label: "Year", value: "3rd Year" },
      { label: "Degree", value: "B.Tech CSE" },
      { label: "Focus", value: "DataSci · ML · Frontend" },
    ],
  },

  skills: {
    subtitle:
      "Core toolkit spanning data manipulation, exploratory analysis, frontend design, and software engineering fundamentals.",
    items: [
      { id: "1", name: "Python (Pandas & NumPy)", icon: "Code2" },
      { id: "2", name: "EDA & Data Visualization", icon: "BarChart3" },
      { id: "3", name: "React & Frontend UI/UX", icon: "Globe" },
      { id: "4", name: "HTML, CSS & JavaScript", icon: "Layout" },
      { id: "5", name: "DSA in Java", icon: "Brain" },
      { id: "6", name: "Git & GitHub", icon: "Github" },
    ],
  },

  projects: [
    {
      id: "proj-1",
      title: "Customer Segmentation using K-Means",
      description:
        "An unsupervised machine learning project that groups customers based on annual income and spending behavior. Applied K-Means clustering and the Elbow Method to identify distinct customer segments and generate insights for targeted marketing strategies.",
      techStack: [
        "Python",
        "Pandas",
        "Scikit-Learn",
        "K-Means",
        "Matplotlib",
      ],
      githubUrl:
        "https://github.com/SnehaMs325/customer-segmentation-kmeans",
      liveUrl: "",
    },
    {
      id: "proj-2",
      title: "Customer Churn Prediction",
      description:
        "A machine learning classification project designed to predict customer churn using historical customer data. Applied data preprocessing, Random Forest classification, model evaluation, and feature importance analysis to identify customers at risk of leaving.",
      techStack: [
        "Python",
        "Pandas",
        "Scikit-Learn",
        "Random Forest",
        "NumPy",
      ],
      githubUrl:
        "https://github.com/SnehaMs325/customer-churn-prediction",
      liveUrl: "",
    },
    {
      id: "proj-3",
      title: "Interactive Portfolio Platform",
      description:
        "A responsive developer portfolio engineered with React, Tailwind CSS, and Framer Motion to present data projects and technical skills cleanly.",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/SnehaMs325",
      liveUrl: "https://snehamj.is-a.dev/",
    },
  ],

  
contact: {
  subtitle:
    "Open to Data Science, Data Analytics, and Software Engineering internships — let's connect!",
  socials: [
    {
      name: "Email",
      icon: "Mail",
      href: "mailto:snehamsofficial@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      href: "https://www.linkedin.com/in/sneha-majumder-tech001",
    },
    {
      name: "GitHub",
      icon: "Github",
      href: "https://github.com/SnehaMs325",
    },
  ],
},

};
