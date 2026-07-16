export interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: "Abdallah Hassoun — Portfolio",
    description:
      "A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS to showcase my projects, skills, and journey as a software engineering student.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ahdevworker03/Abdallah-Hassoun-Portfolio",
  },
  {
    title: "Movie Shelf",
    description:
      "A movie discovery app built with React that lets users search for films, save them to a watchlist, track watched movies, and keep their data across sessions.",
    tech: ["React", "JavaScript"],
    githubUrl: "https://github.com/ahdevworker03/movie-shelf",
  },
  {
    title: "Rick & Morty Characters",
    description:
      "AA React project demonstrating API consumption, component composition, and state management by displaying Rick and Morty characters with images, status indicators, and detailed information in a responsive grid layout.",
    tech: ["React", "JavaScript"],
    githubUrl: "https://github.com/ahdevworker03/Rick-Morty-App",
  },
]
