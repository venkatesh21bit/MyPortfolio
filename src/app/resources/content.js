import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Venkatesh",
  lastName: "K",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Student",
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
  headline: <>Student</>,
  subline: (
    <>
      I'm Venkatesh, a Student , I have a strong interest in exploring new techs
      <br /> and building innovative solutions. I am passionate about creating user-friendly and efficient applications.
      <br /><br />
      🏆 <b>Awards & Achievements:</b> 1st Place Winner at SEED Business Challenge 2026, National Finalist at Sony Aitrios Hackathon (2025).
      <br />
      📜 <b>Research:</b> Co-authored "A Hybrid Blockchain-IPFS Framework for Product Authentication and Supply Chain Management in E-Commerce" (Accepted for publication at ICGPC-2026 - Best Paper Track).
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
        💻 I am a Student <br />
        📚 Continuously learning and improving my skills <br />
        📝 I have a strong interest in exploring new techs <br />
        🔭 Working on my own project <br />
        🌱 Learning more about AI, ML and BlockChain Technology <br />
        🌟 Main languages: TypeScript, Python, JavaScript <br />
        🚩 Interested in Full Stack Machine Learning Application development <br />
        💖 In a complicated relationship with Neural Networks <br />
        🎵 Love metal, lofi, jazz and soft music <br />
        ------------------------- <br />
        🏆 <b>Awards & Achievements:</b> 1st Place Winner at SEED Business Challenge 2026, National Finalist at Sony Aitrios Hackathon (2025). <br />
        📜 <b>Research:</b> Co-authored "A Hybrid Blockchain-IPFS Framework for Product Authentication and Supply Chain Management in E-Commerce" (Accepted for publication at ICGPC-2026 - Best Paper Track). <br />
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
        company: "ClarityLegal - AI-Powered Legal Document Analysis Platform",
        timeframe: "Sep 2025 - Nov 2025",
        role: "- a web application",
        achievements: [
          <>
            An intelligent legal document analysis platform that leverages Google's Vertex AI to make sophisticated contract review accessible to everyone with RAG-powered smart search and AI-driven risk detection.
          </>,
          <>
            Built a full-stack application with Next.js frontend and FastAPI backend, integrating Google Cloud Platform services including Vertex AI, Cloud Storage, Firestore, and Cloud Run for serverless deployment.
          </>,
        ],
        images: [
          {
            src: "/images/projects/cover-06.png",
            alt: "ClarityLegal Platform",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "Vendor -- ERP Supply Chain Management System",
        timeframe: "2025",
        role: "- a web application",
        achievements: [
          <>
            An intelligent supply chain management platform that streamlines stock tracking, order management, and delivery operations with role-based interfaces for Manufacturers, Employees, and Retailers.
          </>,
          <>
            Designed and developed a comprehensive ERP system with AI-powered features including automatic order allocation, dynamic stock management, and IoT integration with edge AI for package detection and quality assurance.
          </>,
        ],
        images: [
          {
            src: "/images/projects/cover-02.jpg",
            alt: "Vendor ERP System",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "ReWear - Community Clothing Exchange",
        timeframe: "2025",
        role: "- a web application",
        achievements: [
          <>
            A sustainable fashion platform enabling users to exchange unused clothing through direct swaps or a point-based redemption system to reduce textile waste.
          </>,
          <>
            Built a full-stack web application with Django REST API backend and Next.js frontend, featuring user authentication, item management, transaction system, and comprehensive admin panel with 27 API endpoints.
          </>,
        ],
        images: [
          {
            src: "/images/projects/cover-04.png",
            alt: "ReWear Platform",
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
            src: "/images/projects/cover-03.png",
            alt: "Edge AI model for Sony Aitrios Hackathon Finals",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "DEV-X Web Time Machine",
        timeframe: "2025",
        role: "- a web application",
        achievements: [
          <>
             A Web Time Machine that allows users to explore different eras of web design and functionality, from the early days of the internet to the modern web.
          </>,
          <>
            Developed a web application at DEV-X coding challenge that showcases the evolution of web design with interactive elements and user-friendly interface demonstrating historical web technologies.
          </>,
        ],
        images: [
          {
          src: "/images/projects/cover-05.png",
            alt: "Edge AI model for Sony Aitrios Hackathon Finals",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "Predictive B2B Growth Engine Optimization",
        timeframe: "2026",
        role: "- SEED Business Challenge",
        achievements: [
          <>
            Analyzed an enterprise dataset of 122,178 comprehensive business records across sales pipelines, multi-touch marketing attribution, and historical prospect engagement patterns.
          </>,
          <>
            Formulated a data-driven diagnostic engine using predictive classification models to calculate Ideal Customer Profile (ICP) and alignment scores, isolating systemic funnel drop-offs.
          </>,
          <>
            Structured an operational playbook and financial scaling simulation designed to reduce Customer Acquisition Cost (CAC) by 25-40%, boost lead conversion 2x-3x, and shrink the sales velocity cycle down to &lt; 60 days.
          </>,
        ],
        images: [],
      },
      {
        company: "etcd Leader Election Workflow Visualiser",
        timeframe: "2024",
        role: "- Distributed Systems Project",
        achievements: [
          <>
            Developed an interactive visualization system demonstrating real-time fault tolerance, node crash recovery, and state synchronization across a distributed 3-node etcd cluster using the Raft consensus protocol.
          </>,
          <>
            Configured concurrent Python client engines competing for state-driven transactional locking via Compare-And-Swap (CAS) operations, implementing lease-based Time-To-Live (TTL) mechanics for failovers.
          </>,
          <>
            Engineered a Flask API gateway utilizing Server-Sent Events (SSE) and persistent polling hooks to translate live PostgreSQL shared database mutations and cluster membership flags directly to a web interface.
          </>,
        ],
        images: [],
      },
      {
        company: "Evaluation of Memory Caching Architectures",
        timeframe: "2024",
        role: "- Independent Research Project",
        achievements: [
          <>
            Formulated and analyzed implementations of Google Research's recent "Memory Caching: RNNs with Growing Memory" architecture to evaluate long-context understanding and retrieval properties.
          </>,
          <>
            Profiled sub-quadratic sequence configurations by embedding Gated Residual Memory (GRM) components and Sparse Selective Caching (SSC) topologies onto Deep Linear Attention (DLA) systems.
          </>,
          <>
            Tested Mixture-of-Experts (MoE) style token routers to contextually gate access to historical sequence checkpoints, successfully interpolating operational trade-offs between hidden state RNN and global attention bounds.
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
