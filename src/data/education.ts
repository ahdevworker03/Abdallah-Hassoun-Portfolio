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
    title: "Onsite Frontend Web Development Training",
    location: "Nahr al-Bared, North Lebanon",
    description:
      "Completed hands-on training in HTML, CSS, Git, GitHub, and Responsive Web Development.",
    duration: "30 Hours",
    status: "Completed",
    certificateUrl: "https://ibb.co/LdKb7Dhb",
  },
  {
    title: "Understanding TypeScript",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    status: "Completed",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-eef49c33-0204-4277-8a8c-c765cc65cbd4/",
  },
  {
    title: "React – The Complete Guide",
    provider: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    status: "Ongoing",
  },
]
