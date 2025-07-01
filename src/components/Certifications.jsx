const Certifications = () => {
  const certificationData = [
    {
      title: "The Complete 2024 Web Development Bootcamp",
      description:
        "Gained hands-on experience with HTML, CSS, JavaScript, Node.js, React, MongoDB, and backend APIs. Built multiple full-stack web applications.",
      image: "/certificates/webdev.png",
    },
    {
      title: "Mastering Data Structures and Algorithms Using C/C++",
      description:
        "Deep understanding of time-space complexity, recursion, sorting, trees, graphs, dynamic programming. Focused on implementation and optimization.",
      image: "/certificates/dsa.png",
    },
    {
      title: "Machine Learning & AI Bootcamp",
      description:
        "Covered supervised/unsupervised ML, deep learning, and AI intuition using Python, TensorFlow, and scikit-learn.",
      image: "/certificates/ml.png",
    },
    {
      title: "Tata Group Data Analytics Job Simulation on Forage",
      description:
        "Completed a job simulation involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ.",
      image: "/certificates/tata.png",
    },
  ];

  return (
    <section id="certifications" className="w-full py-20 px-6 md:px-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {certificationData.map((cert, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-md mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              {cert.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
