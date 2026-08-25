export interface Education {
  institution: string
  location: string
  degree: string
  expectedGraduation: string
  status: string
  gpa: string
}

export interface TrainingItem {
  title: string
  location?: string
  description?: string
  duration?: string
  provider?: string
  instructor?: string
  status: string
  courseUrl?: string
  certificateUrl?: string
}

export const education: Education = {
  institution: "Lebanese International University (LIU)",
  location: "Tripoli, Lebanon",
  degree: "Bachelor of Science in Computer Science",
  expectedGraduation: "July 2028",
  status: "Second-Year Student",
  gpa: "3.08 / 4.00",
}

export const trainingItems: TrainingItem[] = [
  {
    title: "Understanding TypeScript",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    status: "Completed",
    courseUrl: "https://www.udemy.com/course/understanding-typescript/",
    certificateUrl: "https://www.udemy.com/certificate/UC-eef49c33-0204-4277-8a8c-c765cc65cbd4/",
  },
  {
    title: "React — The Complete Guide (incl. Next.js, Redux)",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    status: "Ongoing",
    courseUrl: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    title: "NodeJS — The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    status: "Ongoing",
    courseUrl: "https://www.udemy.com/course/nodejs-the-complete-guide/",
  },
  {
    title: "SQL — The Complete Developer's Guide (MySQL, PostgreSQL)",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller & Manuel Lorenz",
    status: "Ongoing",
    courseUrl: "https://www.udemy.com/course/sql-the-complete-developers-guide-mysql-postgresql/",
  },
]
