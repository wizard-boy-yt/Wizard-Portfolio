"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Link from "next/link"

const projects = [
  {
    name: "My Portfolio",
    description:
      "The portfolio website is designed with a user-friendly interface, making it easy for visitors to navigate and explore my projects and achievements. I incorporated responsive design principles to ensure that the website is accessible and optimized for viewing on various devices, enhancing the user experience. By utilizing JavaScript, I added dynamic elements such as animations and interactive features to make the portfolio website visually appealing and engaging.",
    date: "Aug 2023 - Present",
    link: "https://sdnayak.tech",
    github: "https://github.com/wizard-boy-yt/portfolio",
  },
  {
    name: "Team Finder",
    description:
      "A platform to find teammates for any competition. Participants can easily search for teammates based on their skills, interests, and availability, ensuring a compatible team dynamic. The platform provides a user-friendly interface for creating profiles, browsing potential teammates, and initiating communication to build effective teams. By fostering connections and teamwork, 'Team Finder' empowers individuals to excel in competitions and achieve their goals with the support of a dedicated team.",
    date: "Aug 2023 - Aug 2024",
    link: "https://teamfinder.example.com",
    github: "https://github.com/wizard-boy-yt/team-finder",
  },
  {
    name: "Quiz App",
    description:
      "Created a quiz app in Python to offer engaging quizzes with various topics and difficulty levels. Implemented features such as multiple-choice questions, scoring system, and real-time result display. Designed a user-friendly interface for smooth navigation and interactive quiz experience.",
    date: "Oct 2022 - Oct 2022",
    link: "https://quizapp.example.com",
    github: "https://github.com/wizard-boy-yt/quiz-app",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Projects
      </h1>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-transparent-box p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4">{project.date}</p>
            <p className="text-sm sm:text-base mb-4 text-gray-200">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition duration-300"
              >
                <FaGithub className="mr-2" />
                GitHub
              </Link>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition duration-300"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

