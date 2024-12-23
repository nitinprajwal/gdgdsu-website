import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import content from '../data/content.json';

const Team = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const years = Object.keys(content.team).sort((a, b) => b.localeCompare(a));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-google-sans font-bold mb-6 bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl text-gray-600">
            Meet the passionate individuals driving innovation at GDG DSU
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {years.map((year) => (
            <motion.button
              key={year}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
                selectedYear === year
                  ? 'bg-google-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-google-blue/10'
              }`}
            >
              {year}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {content.team[selectedYear]?.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-google-blue mb-4">{member.role}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-google-blue transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-google-blue transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Team;