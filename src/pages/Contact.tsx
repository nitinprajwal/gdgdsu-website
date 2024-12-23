import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-google-sans font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions about DSC DSU? We'd love to hear from you. Send us a message!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-google-blue" />
                <span>dsc.dsu@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-google-red" />
                <span>DSU Campus, University Road</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-google-green" />
                <span>+1 234 567 890</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-google-blue focus:border-google-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-google-blue focus:border-google-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-google-blue focus:border-google-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-google-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;