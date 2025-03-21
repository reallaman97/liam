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

const technologies = [
  {
    name: "Javascript",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    name: "Python",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
  },
  {
    name: "PHP",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
  },
  {
    name: "C/C++/C#",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500",
  },
  {
    name: "AWS",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  {
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500",
    name: "Next.JS",
  },
  {
    name: "Django",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500",
  },
  {
    name: "PostgreSQL",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-lime-500",
  },
  {
    name: "Angular",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500",
  },
  {
    name: "Docker",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
  },
  {
    name: "GraphQL",
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500",
  },
  {
    color:
      "text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500",
    name: "Java",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Chromedia Inc",
    icon: "/company/chromedia.png",
    iconBg: "#383E56",
    date: "06/2017 -  04/2023",
    points: [
      "As a young professional, I joined this Company as an eager apprentice. Here, I honed my skills under the guidance of seasoned mentors, immersing myself in the intricacies of Frontend Developer. In a very short time, I learned the best workings of the most complex products in existence.",
      "Developed a user-friendly online learning platform with interactive course modules and assessments using React and Typescript.",
      "Implemented a responsive design using Styled Components and MUI for consistent UI across devices using Storybook and Theme UI.",
      "Collaborated with the backend team to integrate APIs and enhance data fetching and management using Node.js/AWS",
      "Worked closely with UI/UX team to implement pixel-perfect and reusable components as well as implement animations and transitions using Framer Motion.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "White Cloak Technologies, Inc",
    icon: "/company/wc.png",
    iconBg: "#E6DEDD",
    date: "09/2019 - 02/2022",
    points: [
      "Integrated payment systems such as Stripe, PayPal and Credit card processing, allowing users to securely process payments online. Implemented features such as subscription management, invoice generation and automated payment reminders",
      "Created a serverless invoice management system using Node.js, AWS Lambda, SQS/SNS, S3, and DynamoDB. Integrated OCR to extract relevant data from invoices, enabling automated invoice processing and document management",
      "Integrated the CRM system of the company with HubSpot, enabling seamless synchronization of customer data, lead generation, and marketing automation",
      "Designed and developed mobile applications using React Native, providing a seamless experience for mobile users",
      "Optimized frontend and backend performance through code splitting, caching,lazy loading and server-side rendering techniques",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "TeraVault Software",
    icon: "/company/teravault.png",
    iconBg: "#E6DEDD",
    date: "03/2022 - 09/2024",
    points: [
      "Led a talented team in creating state-of-the-art web applications using Next.JS/TypeScript",
      "Spearheaded the migration of legacy systems to the cloud with AWS and Terraform, resulting in a 30% reduction in infrastructure costs and improved system reliability.",
      "Automated repetitive tasks with Python scripts, allowing engineers to focus on more strategic initiatives.",
      "Developed and deployed conversational AI chatbots powered by OpenAI's GPT models, enabling seamless interaction with users and providing personalized assistance in realtime",
      "Streamlined DevOps processes with AWS Amplify, reducing deployment times by 40% and enhancing team productivity",
      "Utilized the Elastic search engine and query to handle large DataSet for efficient search",
      "Utilized Jira for project management, task tracking, and collaboration within agile teams including UX/UI designers and backend engineers. Ensured efficient workflow management and timely milestone delivery",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Mark Laman",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/mark-francis-laman-686503350",
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

export { services, technologies, experiences, testimonials, projects };
