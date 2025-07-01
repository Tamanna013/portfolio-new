import CircularGallery from '../constants/CircularGallery'
const Projects = () => {
  const projectData = [
    {
      title: "Chat Application",
      description: "A chat application full stack website.",
      image: "/s2.png",
      github: "https://github.com/Tamanna013/Syntax",
    },
    {
      title: "AnswerPol - AI-Powered Q&A Platform",
      description:
        "An AI-driven Q&A platform that provides precise answers and references for research queries.",
      image: "/Screenshot.png",
      github: "https://github.com/Tamanna013/AnswerPol",
    },
    {
      title: "3D Globe Visualization",
      description: "An interactive 3D globe built with Three.js.",
      image: "/globe.png",
      github: "https://github.com/Tamanna013/3D-Earth",
    },
    {
      title: "Fest Website",
      description:
        "A visually stunning website for our college fest. Made with Typescript and Three.js for animative elements.",
      image: "/img1.png",
      github: "https://github.com/Tamanna013/fest",
    },
    {
      title: "Secure Password Generator",
      description:
        "A web tool that generates strong and customizable passwords with different security options.",
      image: "/password-generator.png",
      github: "https://github.com/Tamanna013/Password-Generator",
    },
    {
      title: "3D Wormhole",
      description: "Wormhole experience created using Three.JS",
      image: "/wormhole.png",
      github: "https://github.com/Tamanna013/wormhole",
    },
    {
      title: "Atoms",
      description: "A visually appealing Three.JS website.",
      image: "/atoms.png",
      github: "https://github.com/Tamanna013/atoms",
    },
  ];
  return (
    <div id="projects">
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <section id="projects" className="w-full py-20 px-6 md:px-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-pink-300 hover:text-pink-400"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Projects
