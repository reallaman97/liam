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
    "Python (Django, Flask, FastAPI)",
    "Java (Spring Boot)",
    "Go (Golang)",
    "C# (ASP.NET)",
    "Node.js (TypeScript, JavaScript, Express.js)",
    "PHP (Laravel, CodeIgniter)",
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
    company_name: "Apple",
    icon: "/company/apple.ico",
    iconBg: "#383E56",
    date: "10/2024 - Present",
    points: [
      "Contributed to the backend of Apple’s internal ML Hub, a shared platform that allows \
teams to store datasets, track experiments, version models, and deploy them at scale.",
      "Built and maintained core Go microservices (Workflow, Model Repository, Experiment \
Tracking, etc.) to standardize ML workflows across teams.",
      "Designed GraphQL APIs for ease of use, with gRPC for service-to-service \
communication, enabling seamless access to models and datasets.",
      "Orchestrated large-scale ML workflows with Temporal.io for retries and Argo \
Workflows on Kubernetes to manage training/evaluation pipelines.",
      "Managed versioned models and datasets in PostgreSQL, stored artifacts in S3, and \
used Kafka for real-time event streaming across tools.",
      "Integrated Apple Directory for RBAC and approval workflows to ensure secure, \
compliant access to models and data.",
      "Tracked model deployments with Deploy Track (using Temporal and Kafka) for \
version control and health reporting.",
"Deployed infrastructure using Pulumi (Python) and Docker, automating multi-env \
rollouts and CI/CD pipelines in Amazon EKS.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Capital One.",
    icon: "/company/capitalone.ico",
    iconBg: "#E6DEDD",
    date: "11/2017 - 09/2024",
    points: [
      "Project: Fintech Application",
      "Built and maintained Java (Spring Boot) services on AWS that process card \
authorizations in real time; tuned connection pools, caching, and SQL to keep p99 \
latency low",
      "Stored hot state in Redis and Amazon RDS (PostgreSQL); streamed transaction events \
with Kafka (and SQS for simpler queues) to feed fraud checks and reporting.",
      "Reduced PCI scope by adding tokenization and OAuth2/JWT; protected keys with AWS \
KMS; monitored security and performance with CloudWatch and Datadog.",
      "Added a Python (FastAPI) service that computes fraud features like velocity and device \
signals; cached results in Redis to avoid repeated work during spikes",
      "Protected the system with rate limits, basic circuit breakers, and timeouts; ran k6 and \
Gatling performance tests and small chaos drills to verify failover",
      "Published partner REST APIs behind API Gateway with idempotency keys, clear error \
codes, and plan-based throttling so integrators can retry safely.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Ansys",
    icon: "/company/ansys.ico",
    iconBg: "#E6DEDD",
    date: "06/2012 - 10/2017",
    points: [
      "Developed a B2B E-commerce platform that enables customers to quickly purchase Ansys \
software, add cloud credits, and activate licenses, streamlining the buying process.",
      "Built a multi-tenant store and subscription system for Ansys software licenses and cloud \
credits using Node.js, Ruby and other frameworks with REST and GraphQL APIs.",
      "Modeled orders, subscriptions, usage, and entitlements in PostgreSQL; used Redis for \
carts, sessions, and rate limits; added fast catalog search with OpenSearch/Elasticsearch",
      "Connected Stripe/Adyen and Avalara; handled webhooks with retries and \
idempotency so purchases and renewals always finished cleanly.",
      "Wrote a provisioning service that, after payment, activates licenses and credit packs via internal licensing APIs; added SSO (OIDC/SAML) and RBAC so company admins \
can assign seats safely.",
      "Used Kafka (and RabbitMQ where simpler) for background jobs like invoices, credit \
top-ups, and email notifications; exposed a simple status API for support and ops",
      "Shipped with Docker on Azure AKS; infra managed with Terraform; CI/CD in GitHub \
Actions; secrets in Azure Key Vault",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Kareem Maize",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/kareemmaize/",
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
    name: "HealthTap",
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
