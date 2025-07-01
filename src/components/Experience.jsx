import React from 'react';
import Carousel from '../constants/Carousel';

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 px-6 md:px-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="flex justify-center">
        <div className="w-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-zinc-900 to-zinc-800">
          <Carousel
            baseWidth={1185}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
