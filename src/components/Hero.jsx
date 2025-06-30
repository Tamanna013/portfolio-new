import ScrambledText from '../constants/ScrambledText';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-20">
        <div className="w-full max-w-6xl">
          <ScrambledText
            className="scrambled-text-demo text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-relaxed"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={"🌸 ❤️"}
          >
            Hey, I'm Tamanna Shaw.
            Full-stack developer | Data Science | AI-ML | UI-obsessed | Hackathon girlie
          </ScrambledText>
        </div>
      </div>
    </div>
  );
};

export default Hero;
