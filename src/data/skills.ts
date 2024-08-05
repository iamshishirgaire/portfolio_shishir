export type Skill = {
  name: string;
  description: string;
  logo: string;
  link: string;
};

export const skills: Skill[] = [
  {
    name: "Typescript",
    description:
      "A superset of JavaScript for building modern, type-safe applications.",
    logo: "/icons/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    description: "A dynamic language for building web applications.",
    logo: "/icons/js.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Next Js",
    description:
      "A React framework for server-side rendering and static site generation.",
    logo: "/icons/nextjs.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "React Js",
    description:
      "A JavaScript library for building interactive user interfaces.",
    logo: "/icons/react.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Expo",
    description:
      "A framework for building cross-platform native mobile applications.",
    logo: "/icons/expo.svg",
    link: "https://expo.dev/",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    logo: "/icons/tailwind.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    description:
      "A runtime environment for running JavaScript code on the server-side.",
    logo: "/icons/nodejs.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "Nest Js",
    description:
      "A modern Node.js framework for building scalable server-side apps.",
    logo: "/icons/nestjs.svg",
    link: "https://nestjs.com/",
  },
  {
    name: "Postgres",
    description: "A robust relational database management system.",
    logo: "/icons/postgres.svg",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Mongodb",
    description: "A popular NoSQL database management system.",
    logo: "/icons/mongodb.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Figma",
    description: "A collaborative design tool for prototyping user interfaces.",
    logo: "/icons/figma.svg",
    link: "https://www.figma.com/",
  },
  {
    name: "Git",
    description:
      "A distributed version control system for tracking changes in source code.",
    logo: "/icons/git.svg",
    link: "https://git-scm.com/",
  },
];
