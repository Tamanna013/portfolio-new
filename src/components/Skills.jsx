import React from 'react';
import AnimatedList from '../constants/AnimatedList';

const Skills = () => {
  const fullstackSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'GitHub'
  ];

  const dataScienceSkills = [
    'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'TensorFlow', 'Keras', 'OpenCV', 'EDA', 'ML Algorithms'
  ];

  const softSkills = [
    'Problem Solving', 'Communication', 'Teamwork', 'Leadership', 'Time Management', 'Creativity', 'Critical Thinking', 'Adaptability'
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 px-6 md:px-12 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-pink-400">My Skill Set</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
        {/* Fullstack Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-pink-400">Full-Stack</h3>
          <AnimatedList
            items={fullstackSkills}
            itemClassName="text-sm font-medium text-center"
            showGradients={true}
            enableArrowNavigation={false}
            displayScrollbar={true}
            className="mx-auto max-w-xs"
          />
        </div>

        {/* Data Science Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-pink-400">Data Science</h3>
          <AnimatedList
            items={dataScienceSkills}
            itemClassName="text-sm font-medium text-center"
            showGradients={true}
            enableArrowNavigation={false}
            displayScrollbar={true}
            className="mx-auto max-w-xs"
          />
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-pink-400">Soft Skills</h3>
          <AnimatedList
            items={softSkills}
            itemClassName="text-sm font-medium text-center"
            showGradients={true}
            enableArrowNavigation={false}
            displayScrollbar={true}
            className="mx-auto max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
