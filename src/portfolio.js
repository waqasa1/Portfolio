/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Waqas Anwar",
  title: "Hi all, I'm Waqas",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Xo8Gj8lIRPQWlyZbLbH3vLpt-2iGGty6/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/waqasa1",
  linkedin: "https://www.linkedin.com/in/waqas-anwar-41873020a/",
  gmail: "waqasanwar1308@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Full Stack Application for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AOS / GSAP / JWT"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bahria University",
      logo: require("./assets/images/bu_logo.webp"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2020 - July 2024",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Joined mlh hackathon and learning different aspect of software engineering ",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Developer",
      company: "Rocco Live",
      companylogo: require("./assets/images/rocco.webp"),
      date: "May 2025 – July 2025",
      desc: "Worked on frontend development for Rocco Live, a live streaming app",
      descBullets: [
        "Created Dashboard, Promotional Websites during my time in the company",
        "Used Git for version control and team collaboration.",
        "Explored different libraries such as Mui, Gsap, Framer-Motion etc"
      ]
    }, {
      role: "Mern Developer",
      company: "Web Write",
      companylogo: require("./assets/images/webwrite.webp"),
      date: "Nov 2025 – Present",
      desc: "Worked on backend development for webWrite",
      descBullets: [
        "Created Ecommerce site with analytics in collab with frontend dev",
        "Used Git for version control and team collaboration.",
        "Practiced security concern and deployed to render"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/asaanqurbanilogoo.webp"),
      projectName: "AsaanQurbani",
      projectDesc: "A site to showcase goats/animals for selling purpose with admin dashboard analytics crud.",
      detailedDesc: "AsaanQurbani is a comprehensive platform designed to streamline the process of buying and selling animals for Qurbani. The platform features a modern admin dashboard with real-time analytics, CRUD operations for managing listings, and a user-friendly interface for buyers to browse available animals.",
      screenshots: [
        require("./assets/images/projects/asaanqurbani/screenshot1.webp"),
        require("./assets/images/projects/asaanqurbani/screenshot2.webp"),
        require("./assets/images/projects/asaanqurbani/screenshot3.webp"),
      ],
      techStack: ["Next.js", "Serverless Functions", "MongoDB"],
      features: [
        "Admin dashboard with analytics",
        "Real-time inventory management",
        "User authentication and authorization",
        "Responsive design for mobile and desktop"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://asaan-qurbani.vercel.app/"
        },
        {
          name: "View Details",
          url: "/project/asaanqurbani"
        }
      ]
    },
    {
      image: require("./assets/images/productcat.webp"),
      projectName: "ProductCatalog",
      projectDesc: "An Ecommerce site with user,seller and superadmin side with stock management and analytics.",
      detailedDesc: "ProductCatalog is a full-featured e-commerce platform with three distinct user roles. It provides comprehensive stock management, sales analytics, and a seamless shopping experience. The platform includes seller tools for managing inventory and a super admin panel for overseeing the entire marketplace.",
      screenshots: [
        require("./assets/images/projects/productcatalog/screenshot1.webp"),
        require("./assets/images/projects/productcatalog/screenshot2.webp"),
        require("./assets/images/projects/productcatalog/screenshot3.webp"),
        require("./assets/images/projects/productcatalog/screenshot4.webp"),
        require("./assets/images/projects/productcatalog/screenshot5.webp"),
        require("./assets/images/projects/productcatalog/screenshot6.webp"),
        require("./assets/images/projects/productcatalog/screenshot7.webp"),
        require("./assets/images/projects/productcatalog/screenshot8.webp"),
        require("./assets/images/projects/productcatalog/screenshot9.webp"),
      ],
      techStack: ["MERN Stack", "Redux", "JWT", "Render"],
      features: [
        "Multi-role authentication (User, Seller, SuperAdmin)",
        "Stock management system",
        "Sales analytics and reporting",
        "Secure payment integration"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://product-catalog-ybcr.onrender.com/"
        },
        {
          name: "View Details",
          url: "/project/productcatalog"
        }
      ]
    },
    {
      image: require("./assets/images/gsap-practice.webp"),
      projectName: "Live Streaming Practice",
      projectDesc: "A creative GSAP practice project with custom animations and scroll interactions.",
      detailedDesc:
        "This project was built from scratch to experiment with GSAP animations and scroll-triggered interactions. The site is fully responsive and demonstrates creative layout design without relying on Figma or pre-made designs. It showcases dynamic animations, interactive elements, and smooth transitions.",
      screenshots: [
        require("./assets/images/projects/gsappractice/screenshot1.webp"),
        require("./assets/images/projects/gsappractice/screenshot2.webp"),
        require("./assets/images/projects/gsappractice/screenshot3.webp"),
      ],
      techStack: ["React.js", "GSAP", "CSS3", "Responsive Design"],
      features: [
        "Scroll-triggered animations using GSAP",
        "Fully responsive layout",
        "Interactive elements with hover effects",
        "Creative design built without Figma",
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://live-streaming-website.vercel.app/",
        },
        {
          name: "View Details",
          url: "/project/livestreamingpractice" // ✅ FIXED
        },
      ],
    },
    {
      image: require("./assets/images/technologia.webp"), // replace with actual image path
      projectName: "Technologia Replica",
      projectDesc:
        "A React-based replica of the Envato premium WordPress theme Technologia and digital otters, built collaboratively using Git and GitHub.",
      detailedDesc:
        "This project is a front-end replica of the premium Envato WordPress theme 'Technologia', recreated using React. The goal was to closely match the original design while translating a WordPress theme into a modern component-based React architecture. The project was developed collaboratively using GitHub, focusing on clean UI structure, reusable components, and smooth scroll-based animations powered by AOS.",
      screenshots: [
        require("./assets/images/projects/technologia/screenshot1.webp"),
        require("./assets/images/projects/technologia/screenshot2.webp"),
        require("./assets/images/projects/technologia/screenshot3.webp"),
      ],
      techStack: ["React.js", "AOS Animations", "SCSS", "Git", "GitHub"],
      features: [
        "Pixel-inspired replica of Envato Technologia theme",
        "Component-based React architecture",
        "Scroll animations using AOS",
        "Collaborative development with GitHub",
        "Responsive layout across devices",
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://software-company-eight.vercel.app/",
        },
        {
          name: "View Details",
          url: "/project/technologiareplica", // ✅ matches routing logic
        },
      ],
    },
    {
      image: require("./assets/images/dashboard-practice.webp"), // replace with actual image
      projectName: "React Dashboard Practice",
      projectDesc:
        "A React-based dashboard built for practice, focusing on layout structure, data visualization, and component composition.",
      detailedDesc:
        "This dashboard project was created as a hands-on React practice to understand dashboard layouts, reusable components, and data presentation patterns commonly used in admin panels. The focus was on building a clean and functional interface rather than responsiveness. It includes structured sections, cards, charts, and UI elements typically found in real-world dashboards.",
      screenshots: [
        require("./assets/images/projects/dashboardpractice/screenshot1.webp"),
        require("./assets/images/projects/dashboardpractice/screenshot2.webp"),
        require("./assets/images/projects/dashboardpractice/screenshot3.webp"),
      ],
      techStack: ["React.js", "JavaScript", "CSS", "Component Architecture"],
      features: [
        "Dashboard-style layout with cards and sections",
        "Reusable React components",
        "Basic data visualization structure",
        "Focus on desktop layout (non-responsive by design)",
        "Practice-oriented implementation",
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dashboard-teal-nine-76.vercel.app/",
        },
        {
          name: "View Details",
          url: "/project/reactdashboardpractice", // ✅ matches slug logic
        },
      ],
    }

  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/contactMailDark.svg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3034291974",
  email_address: "waqasanwar1308@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
