import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    master,
    southerng,
    legacy,
    python,
    sql,
    githubs,
    flask,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: githubs,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    }
  ];
  
  const experiences = [
    {
      title: "Masterschool Bootcamp Graduate",
      company_name: "Masterschool",
      icon: master,
      iconBg: "#383E56",
      date: "January 2023 - September 2023",
      points: [
        "Developed practical expertise in Python, backend developnent utilizing SQL, Git, Flask and more.",
        "Completed 1000+ hours of coding, 100+ hours of projects, and 100+ hours of job preparation.",
        "Continued self learning and interested in multple frameworks and languages like React, Tailwind CSS and three.js.",
        "Introduced to algorithms, data structures, and other computer science fundamentals.",
      ],
    },
    {
      title: "Sales Consultant",
      company_name: "Southern Glazer's Wine & Spirits",
      icon: southerng,
      iconBg: "#E6DEDD",
      date: "April 2022 - October 2022",
      points: [
        "Managed high-value portfolio of 200+ accounts to drive over $ 2M in annual revenue, and contributed to company expansion",
        "Fostered long term relationships with clients to understand their needs and provide tailored solutions",
        "Contributed to monthly sales growth",
        "Ranked top in the region and second company wide sor specialty product sales, consistently exceeding sales goals",
      ],
    },
    {
      title: "Operations Manager",
      company_name: "Legacy Food Hall",
      icon: legacy,
      iconBg: "#383E56",
      date: "Jannuary 2021 - May 2022",
      points: [
        "Led professional development for a team of 50+ staff, including 30+ exoert bartenders",
        "Innovative creative and cost effective cocktail menues to achieve a lean Cost of Goods Sold (COGS) of 14%",
        "Caollaborated with marketing, finance, and IT, to ecxecute impactful organizational initiatives",
        "Help develope training programs contributing to successful new location openings",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };