const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-20 px-6 md:px-12 text-white overflow-hidden">

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-pink-400">Let's Connect</h2>
        <p className="text-gray-300 text-lg mb-10">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/tamanna-shaw-mg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Tamanna013"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/TashaMG/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            LeetCode
          </a>
          <a
            href="https://www.instagram.com/tashhxx._.xx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            Instagram
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
