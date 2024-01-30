const tasksData = [
  {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "python", "API"],
    priority: "high",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Build Responsive UI",
    description:
      "Create a user interface that adjusts seamlessly to different screen sizes and devices.",
    tags: ["frontend", "design", "responsive"],
    priority: "medium",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Implement User Authentication",
    description:
      "Set up a secure authentication system for user access control with proper validation.",
    tags: ["security", "authentication", "backend"],
    priority: "high",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Deploy Application to Cloud",
    description:
      "Utilize cloud services to deploy and scale the application for optimal performance.",
    tags: ["cloud", "deployment", "scaling"],
    priority: "medium",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Optimize Database Queries",
    description:
      "Improve the efficiency of database queries to enhance overall application performance.",
    tags: ["database", "performance", "optimization"],
    priority: "high",
    isFavorite: false,
  },
];

export default tasksData;
