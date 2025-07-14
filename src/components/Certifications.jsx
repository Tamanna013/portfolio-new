import { useState } from "react";

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const certificationData = [
    {
      title: "The Complete 2024 Web Development Bootcamp",
      description:
        "Gained hands-on experience with HTML, CSS, JavaScript, Node.js, React, MongoDB, and backend APIs. Built multiple full-stack web applications.",
      image: "/c1.png",
    },
    {
      title: "Mastering Data Structures and Algorithms Using C/C++",
      description:
        "Deep understanding of time-space complexity, recursion, sorting, trees, graphs, dynamic programming. Focused on implementation and optimization.",
      image: "/c2.png",
    },
    {
      title: "Machine Learning & AI Bootcamp",
      description:
        "Covered supervised/unsupervised ML, deep learning, and AI intuition using Python, TensorFlow, and scikit-learn.",
      image: "/c3.png",
    },
    {
      title: "Tata Group Data Analytics Job Simulation on Forage",
      description:
        "Completed a job simulation involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ.",
      image: "/c4.png",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="certifications" className="w-full py-20 px-6 md:px-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-pink-400">Certifications</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {certificationData.map((cert, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="cursor-pointer bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className={`rounded-md object-cover w-full transition-all duration-500 ${
                activeIndex === index ? "h-[20rem] scale-110" : "h-40"
              }`}
            />
            {activeIndex !== index && (
              <>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3 mt-4">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
