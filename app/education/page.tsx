"use client"

import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"

const education = [
  {
    school: "Gandhi Institute For Technology",
    degree: "B.Tech in Computer Science",
    duration: "Jun 2021 - Jun 2025",
    location: "Bhubaneswar, Odisha",
    gpa: "8.5",
  },
  {
    school: "DELHI PUBLIC SCHOOL",
    degree: "Intermediate",
    duration: "Aug 2019 - Mar 2021",
    location: "Dhenkanal",
    gpa: "7",
  },
  {
    school: "St. Xaviers High School",
    degree: "High School",
    duration: "Jan 2009 - Feb 2019",
    location: "Dhenkanal",
    gpa: "8",
  },
]

export default function Education() {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Education
      </h1>
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-8 bg-transparent-box p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <div className="flex items-center mb-4">
            <FaGraduationCap size={24} className="mr-4 text-gray-300" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {edu.school}
            </h2>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl mb-2 text-white">{edu.degree}</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-2">{edu.duration}</p>
          <p className="text-sm sm:text-base text-gray-300 mb-2">{edu.location}</p>
          <p className="text-sm sm:text-base font-semibold text-gray-200">GPA: {edu.gpa}</p>
        </motion.div>
      ))}
    </div>
  )
}

