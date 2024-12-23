import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import content from '../data/content.json';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { label: 'Members', value: content.stats.members },
    { label: 'Events', value: content.stats.events },
    { label: 'Projects', value: content.stats.projects }
  ];

  return (
    <motion.div
      ref={ref}
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <div className="text-4xl font-bold text-google-blue mb-2">
                {inView && (
                  <CountUp end={value} duration={2.5} />
                )}
                +
              </div>
              <div className="text-gray-600 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;