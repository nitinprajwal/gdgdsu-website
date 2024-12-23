import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Image as ImageIcon, X } from 'lucide-react';
import Modal from 'react-modal';
import content from '../data/content.json';

Modal.setAppElement('#root');

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
            Events
          </h1>
          <p className="text-xl text-gray-600">
            Discover our exciting events and activities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {event.gallery?.length > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedEvent(event)}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ImageIcon className="w-5 h-5 text-google-blue" />
                  </motion.button>
                )}
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-sm bg-google-blue text-white rounded-full">
                  {event.status}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Photo Gallery Modal */}
        <Modal
          isOpen={!!selectedEvent}
          onRequestClose={() => {
            setSelectedEvent(null);
            setSelectedImage(null);
          }}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-6 max-w-4xl mx-auto my-8 relative"
              >
                <button
                  onClick={() => {
                    setSelectedEvent(null);
                    setSelectedImage(null);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl font-bold mb-6">{selectedEvent.title} Gallery</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedEvent.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative aspect-video cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${selectedEvent.title} ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Modal>

        {/* Full Image Modal */}
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        </Modal>
      </div>
    </motion.div>
  );
};

export default Events;