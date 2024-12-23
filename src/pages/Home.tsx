import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <UpcomingEvents />
    </main>
  );
};

export default Home;