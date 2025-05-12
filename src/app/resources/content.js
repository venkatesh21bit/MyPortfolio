import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Venkatesh",
  lastName: "K",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/venkatesh21bit",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/venkatesh-k-187448287",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/VenkateshK66781",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:venkatesh.k21062005@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Venkatesh, a Full Stack Developer , I have a strong interest in exploring new techs
      <br /> and building innovative solutions. I am passionate about creating user-friendly and efficient applications.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/venkatesh-k",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I-am-venkatesh <br />
        ------------------------- <br />
        💻 I am a self-taught Full Stack Developer <br />
        📚 Continuously learning and improving my skills <br />
        📝 I have a strong interest in exploring new techs <br />
        🔭 Working on my own project <br />
        🌱 Learning more about AI, ML and BlockChain Technology <br />
        🌟 Main languages: TypeScript, Python, JavaScript <br />
        🚩 Interested in Full Stack Machine Learning Application development <br />
        💖 In a complicated relationship with Neural Networks <br />
        🎵 Love metal, lofi, jazz and soft music <br />
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Notable Works",
    experiences: [
      {
        company: "Quick Start Express ",
        timeframe: "2024 ",
        role: "- an npm package",
        achievements: [
          <>
             A simple CLI tool to generate Express servers from multiple available templates.
          </>,
          <>
            Contributed to the development of a CLI tool that simplifies the process of creating Express servers. Optimized and wrote test cases for the package, ensuring its reliability and performance.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/cover-01.jpg",
            alt: "Quick Start Express",
            width: 16,
            height: 9,
          },
        ],

      },
      {
        company: "Smartchain ERP",
        timeframe: "2025",
        role: "- a web application",
        achievements: [
          <>
            SmartChain ERP is a next-generation, AI-powered Enterprise Resource Planning (ERP) platform
          </>,
          <>
            Designed and developed a full-stack web application from scratch, handling everything from system architecture and UI/UX design to backend development and database integration, ensuring responsive design and optimal performance across platforms.
          </>,
        ],
        images: [
          {
            src: "/images/projects/cover-02.jpg",
            alt: "Smartchain ERP",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "Edge AI model for Sony Aitrios Hackathon Finals",
        timeframe: "2025",
        role: "- an AI model",
        achievements: [
          <>
            Developed an edge AI model for the Sony Aitrios Hackathon Finals, focusing on detecting QR codes and decoding and damage detection of packages.
          </>,
          <>
            Implemented a custom AI model using Brain Builder for QR code detection and decoding, achieving an accuracy of 90% on the test dataset.
            </>,
        ],
        images: [
          {
            src: "/images/projects/cover-03.jpg",
            alt: "Edge AI model for Sony Aitrios Hackathon Finals",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "DEV-X",
        timeframe: "2025",
        role: "- a web application",
        achievements: [
          <>
             A Web Time Machine allows users to explore different eras of web design and functionality, from the early days of the internet to the modern web.
          </>,
          <>
            Developed a web application at DEV-X coding challenge that allows users to explore different eras of web design and functionality, from the early days of the internet to the modern web. The application features a user-friendly interface and interactive elements that showcase the evolution of web design.
          </>,
        ],
        images: [],
      }
    ],
    

  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Amrita Vishwa Vidyapeetham, Coimbatore",
        description: <>Pursuing an undergraduate degree in Computer Science and Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: <>Building next-gen apps with Next.js and modern frameworks.</>,
        images: [],
      },
      {
        title: "React.js",
        description: <>Creating interactive UIs with React.js.</>,
        images: [],
      },
     
      {
        title: "Express.js",
        description: <>Developing RESTful APIs and web applications with Express.js.</>,
        images: [],
      },
      {
        title: "Node.js",
        description: <>Building scalable server-side applications with Node.js.</>,
        images: [],
      },
      {
        title: "Express.js",
        description: <>Developing RESTful APIs and web applications with Express.js.</>,
        images: [],
      },
      {
        title: "Tailwind CSS",
        description: <>Crafting responsive designs with Tailwind CSS.</>,
        images: [],
      },
      {
        title: "TypeScript",
        description: <>Enhancing JavaScript with TypeScript for better development.</>,
        images: [],
      },
      {
        title: "JavaScript",
        description: <>Building dynamic web applications with JavaScript.</>,
        images: [],
      },
      {
        title: "HTML5",
        description: <>Creating semantic and accessible web content with HTML5.</>,
        images: [],
      },
      {
        title: "CSS3",
        description: <>Styling web pages with modern CSS techniques.</>,
        images: [],
      },
      {
        title: "Python",
        description: <>Building applications and scripts using Python.</>,
        images: [],
      },
      
      {
        title: "Django",
        description: <>Developing robust backend systems with Django.</>,
        images: [],
      },
      {
        title: "PostgreSQL",
        description: <>Designing and managing relational databases with PostgreSQL.</>,
        images: [],
      },
      {
        title: "MongoDB",
        description: <>Working with NoSQL databases like MongoDB for scalable solutions.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work};
