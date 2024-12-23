import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, Brain, Globe, Star } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Code2, title: 'Technical Workshops', description: 'Hands-on learning with cutting-edge technologies' },
    { icon: Users, title: 'Community', description: 'Connect with fellow developers and industry experts' },
    { icon: Rocket, title: 'Innovation', description: 'Transform ideas into impactful solutions' },
    { icon: Brain, title: 'Knowledge Sharing', description: 'Learn from experienced developers and mentors' },
    { icon: Globe, title: 'Global Network', description: 'Part of Google\'s worldwide developer community' },
    { icon: Star, title: 'Growth', description: 'Develop technical and leadership skills' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-google-sans font-bold mb-6 bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
            About GDG DSU
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Google Developer Groups at Dayananda Sagar University is a community of passionate developers, innovators, and tech enthusiasts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-google-${['blue', 'red', 'yellow', 'green'][index % 4]}/10`}>
                <Icon className={`w-6 h-6 text-google-${['blue', 'red', 'yellow', 'green'][index % 4]}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              We aim to create a vibrant ecosystem where students can learn, grow, and innovate together. Through workshops, hackathons, and study jams, we provide hands-on experience with Google technologies and foster a community of problem solvers.
            </p>
            <p className="text-gray-600">
              Join us in our journey to build a stronger developer community at DSU, where every student has the opportunity to transform their passion for technology into real-world impact.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;