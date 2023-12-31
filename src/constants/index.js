import {
    backend,
    web,
    javascript,
    mongodb,
    reactjs,
    tailwind,
    nodejs,
    git,
    threejs,
    master,
    southerng,
    legacy,
    python,
    sql,
    githubs,
    flask,
    movie,
    bot,
    social,
    ts,
    next,
    proj,
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
      name: "Next.js",
      icon: next,
    },
    {
      name: "TypeScript",
      icon: ts,
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
    },
    {
      name: "MongoDb",
      icon: mongodb,
    },
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
  //kept as a reference for future use
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
      name: "hireMe Overflow",
      description:
        "Think of it as your virtual coffee shop ☕ for tech talks and career moves. We're built on TypeScript, React, Tailwind CSS, Next.js, and MongoDB, aiming to be your go-to place for all things dev. ⚠️ Note: We're still under construction, so pardon our dust! ⚠️ - feel free to see our site while we build with the link above. You will be able to see the home screen, but authentication through Clerk is required to see the rest of the site.",
      tags: [
        {
          name: "TypeScript",
          color: "orange-text-gradient",
        },
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI API",
          color: "green-text-gradient",
        },
      ],
      image: proj,
      source_code_link: "https://github.com/itsevanb/hireMeOverflow",
      deployed_link: "https://hire-me-overflow.vercel.app/",
    },
    {
      name: "Movie Database",
      description:
        "Web-based platform that allows users to search, edit, and save their favorite movies to their profile, as well as view other people's profiles. To test the site in action visit the link above and use the following credentials: username: test, password: test.",
      tags: [
        {
          name: "Python",
          color: "orange-text-gradient",
        },
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/itsevanb/MovieDataBase",
      deployed_link: "http://itsevanb.pythonanywhere.com/",
    },
    {
      name: "Social-Media Application",
      description:
        "A full-stack social media application, that allows users to set up profiles, post content, reply to other users, start/join communities and so much more. It is a forever project but it is fully functional and deployed. This project will require authentication through Clerk.",
      tags: [
        {
          name: "Full MERN Stack",
          color: "pink-text-gradient",
        },
        {
          name: "Next.js 13",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: social,
      source_code_link: "https://github.com/itsevanb/social_media",
      deployed_link: "https://social-media-pink-two.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };