import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div
      className="relative mx-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        onClick={onClick}
        className={`block px-6 py-2 rounded-full transition-all duration-300 relative overflow-hidden ${
          isActive 
            ? 'text-white bg-google-blue dark:bg-google-blue/80' 
            : 'text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white'
        }`}
      >
        <span className="relative z-10">
          {children}
        </span>
        
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-google-blue/10 dark:bg-google-blue/20 rounded-full opacity-0 group-hover:opacity-100"
          initial={false}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
};

export default NavLink;