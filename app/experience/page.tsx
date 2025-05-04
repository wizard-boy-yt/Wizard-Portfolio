"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Aspire Info Labs",
    position: "Full-Stack Developer",
    duration: "Sep 2023 - Oct 2023",
    location: "Hyderabad, Telangana",
    responsibilities: [
      "Developed and maintained web applications across the full stack, using React.js for the front-end and Node.js for the back-end.",
      "Implemented security best practices in both front-end and back-end code.",
      "Worked with databases like MySQL and MongoDB, optimizing data storage and retrieval.",
      "Contributed to the design and architecture of new features.",
    ],
  },
  {
    company: "Glucian India Private Limited",
    position: "Web Development",
    duration: "Jan 2023 - Apr 2023",
    location: "Bhubaneswar, Odisha",
    responsibilities: [
      "Developed custom web applications using HTML, CSS, JavaScript, and back-end technologies.",
      "Collaborated on the full web development lifecycle.",
      "Improved website security by implementing best practices and regular updates.",
      "Assisted in the migration of legacy systems to modern frameworks.",
    ],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Professional Experience
      </h1>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-8 bg-transparent-box p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {exp.company}
          </h2>
          <h3 className="text-lg sm:text-xl mb-2 text-white">{exp.position}</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            {exp.duration} | {exp.location}
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-200">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="mb-2">
                {resp}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

