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
    title: "Software Architect",
    icon: "/backend.webp",
  },
  {
    title: "Technical Project Manager",
    icon: "/web.webp",
  },
  {
    title: "DevOps Engineer",
    icon: "/mobile.webp",
  },
  {
    title: "AI & Automation Specialist",
    icon: "/creator.webp",
  },
];

// const technologies = [
//   {
//     name: "Javascript",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500",
//   },
//   {
//     name: "Python",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "PHP",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
//   },
//   {
//     name: "C/C++/C#",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500",
//   },
//   {
//     name: "AWS",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500",
//     name: "Next.JS",
//   },
//   {
//     name: "Django",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500",
//   },
//   {
//     name: "PostgreSQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-lime-500",
//   },
//   {
//     name: "Vue",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500",
//   },
//   {
//     name: "Docker",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "GraphQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500",
//     name: "Java",
//   },
// ];

const skills = {
  backend: [
    "Node.js (TypeScript, JavaScript, Express.js)",
    "Java (Spring Boot)",
    "PHP (Laravel, CodeIgniter)",
    "C# (ASP.NET)",
    "Python (Django, Flask, FastAPI)",
    "Go (Golang)",
    "gRPC",
    "NestJS",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "Vue.js",
    "React Native",
    "Tailwind CSS",
    "MUI",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  cloud: [
    "AWS (EC2, Lambda, S3, CloudWatch, ECS, Fargate)",
    "Google Firebase",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
    "Helm",
  ],
  data: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "DynamoDB",
    "CassandraDB",
    "Elasticsearch",
    "Snowflake",
    "BigQuery",
  ],
  api: [
    "REST APIs",
    "GraphQL",
    "gRPC",
    "JWT/OAuth2 Authentication",
    "WebSockets",
    "OpenAPI",
    "Swagger",
  ],
};

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company_name: "HCLTech",
    icon: "/company/hcltech.ico",
    iconBg: "#383E56",
    date: "03/2022 -  03/2025",
    points: [
      "Project: AI-Driven Government Procurement & Bidding Platform",
      "Engineered a scalable microservices architecture using Python (Django, FastAPI, Flask) for \
government procurement workflows, achieving 99.99% uptime and processing 500+ daily \
requests.",
      "Built a GraphQL layer that allowed fine-grained queries over large sets of solicitation data and \
agency documents, reducing over-fetching and boosting performance by 30%",
      "Implemented WebSocket-based alerts for newly published opportunities, approaching deadlines, \
and updates on proposal evaluations, providing users with instant, actionable insights",
      "Centralized government contracting data by migrating 100,000+ records into MongoDB, and \
automated real-time updates from government sources via Apache Kafka, ensuring the system \
displayed the most current information.",
      "Established role-based access control (RBAC) utilizing OAuth2 and JWT authentication protocols; \
mitigated potential data breaches by 65% and ensured compliance with industry security \
standards",
      "Implemented rate limiting and API throttling using Redis, supporting 50+ client applications \
concurrently while preventing denial-of-service attacks, improving overall system reliability and \
availability.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Netflix, Inc.",
    icon: "/company/nficon2023.ico",
    iconBg: "#E6DEDD",
    date: "09/2018 - 02/2022",
    points: [
      "Project: Fintech Application",
      "Pioneered high-throughput backend services in Java (Spring Boot) incorporating gRPC and\
Apache Kafka, processing 5,000+ transactions per second while shrinking average latency to\
85ms.",
      "Optimized Java Spring Boot microservices, decreasing latency in critical transaction workflows\
to an average of 85ms while handling peak loads of 7,000 transactions per second.",
      "Integrated AWS Lambda serverless functions into application architecture, reducing\
infrastructure costs by 30% and decreasing average function execution time by 50ms.",
      "Integrated MongoDB and Oracle with read replicas for high-availability storage.",
      "Engineered real-time dashboards within Splunk that visualized system performance, pinpointing\
      bottlenecks, and improved incident response times by 40% while monitoring 50+ transaction\
      pipelines.",
      "Automated infrastructure provisioning with Terraform, reducing setup time by 60%.",
      "Fortified system security by enforcing role-based access control across 5 key applications and\
      enabled AES-256 encryption, exceeding regulatory requirements for financial data protection and\
      compliance.",
      "Spearheaded the creation of a fraud detection system using event sourcing that reduced false\
      positives for customers flagged for fraud, decreasing manual review workload by 40 hours a week.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "The Walt Disney",
    icon: "/company/disney.png",
    iconBg: "#E6DEDD",
    date: "06/2017 - 09/2018",
    points: [
      "Project: Microservices SaaS Dashboard",
      "Accelerated core API enhancements with Node.js (NestJS) following senior engineer guidance;\
elevated API test coverage scores by 40% and decreased server response times by 150ms, as\
measured by Datadog",
      "Fashioned responsive UIs with Tailwind CSS and React, resolving 80% of cross-browser\
compatibility issues and boosting average page load speed by 40% on mobile devices.",
      "Forged scalable data architecture using SQLite for local development environments and\
Snowflake for analytical workloads, enabling 10+ engineers to conduct efficient data analysis and\
reporting.",
      "•Orchestrated microservice communication using Apache Kafka, achieving 99.99% uptime, and\
enhanced application responsiveness by optimizing Redis cache invalidation policies during peak\
traffic.",
      "•Orchestrated infrastructure-as-code using Terraform, automating provisioning of 50+ virtual\
machines, and slashing deployment times by 60%, while ensuring adherence to security protocols\
and infrastructure compliance.",
      "Actively influenced in code reviews with senior developers and contributed to documentation and\
best practice sharing sessions.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Liam Richard Lewis",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/liam-lewis-a724ba328/",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
  {
    name: "HeathTap",
    description:
      "Developed a visually appealing and user-friendly website using React.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "orange-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/healthtap.png",
    platform: "Web",
    deploy_link: "https://www.healthtap.com/",
  },
  {
    name: "Sierra Structures",
    description:
      "Developed a visually appealing and user-friendly website using Angular.",
    tags: [
      {
        name: "ASP.NET",
        color: "orange-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/sierra.png",
    platform: "Web",
    deploy_link: "https://www.sierrastructures.com/",
  },
  {
    name: "Chirayu",
    description:
      "Developed a visually appealing and user-friendly website using Next.",

    tags: [
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/chirayu.png",
    platform: "Web",
    deploy_link: "https://www.chirayuhospitaljaipur.com/",
  },
  {
    name: "The Best Trading Platform",
    description:
      "Developed a visually appealing and user-friendly Trading platform using Laravel",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/etoro.png",
    platform: "Web",
    deploy_link: "https://www.etoro.com/",
  },
  {
    name: "Range Trainer",
    description:
      "Developed the most precise GTO solves in the industry using Next",

    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Next",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/rangetraner.png",
    platform: "Web",
    deploy_link: "https://rangetrainer.app/",
  },
];

export { services, skills, experiences, testimonials, projects };
