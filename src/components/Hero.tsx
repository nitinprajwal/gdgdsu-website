import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users } from 'lucide-react';
import content from '../data/content.json';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-google-blue/5 to-google-green/5">
      {/* Animated background particles */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-google-blue/20 rounded-full"
            initial={{ 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: 0
            }}
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-google-sans font-bold mb-4 bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Google Developer Groups
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-6 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Dayananda Sagar University
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Empowering students to grow as developers and innovators
        </motion.p>

        {content.hiring.isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <a
              href={content.hiring.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-google-blue text-white px-8 py-3 rounded-full font-medium hover:bg-google-blue/90 transition-colors"
            >
              {content.hiring.title} - Apply Now
            </a>
          </motion.div>
        )}

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: Code2, text: "Learn", color: "google-blue" },
            { icon: Users, text: "Connect", color: "google-red" },
            { icon: Rocket, text: "Grow", color: "google-green" }
          ].map(({ icon: Icon, text, color }, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              className={`flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg`}
            >
              <Icon className={`w-6 h-6 text-${color}`} />
              <span className="text-lg font-medium">{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;