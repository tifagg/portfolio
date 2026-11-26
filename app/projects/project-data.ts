
export const projects = [
  {
    slug: "security-learning-lab",
    title: "security-learning-lab",
    repo: "https://github.com/tifagg/security-learning-lab",
    status: "Private / in progress",
    stack: ["Cybersecurity", "Python", "Notes", "Labs"],
    summary:
      "A personal space where I'm learning about cybersecurity, exploring different concepts, taking notes, and trying out small experiments. I'm still figuring things out as I go, so this project is very much a work in progress.",
    features: [
      "Cybersecurity notes and research",
      "Small learning experiments",
      "Security concepts and breakdowns",
      "Personal learning logs",
    ],
    learned: [
      "Understanding cybersecurity concepts through practice",
      "Organizing technical notes and research",
      "Learning how different security tools and concepts work",
      "Documenting what I learn along the way",
    ],
  },
];

export type Project = (typeof projects)[number];
