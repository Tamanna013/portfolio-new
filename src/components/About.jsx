import { useRef } from "react"
import CopyEmailButton from "../constants/CopyEmailButton";
import Globe from "../constants/Globe";
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="sm:px-10 px-5 lg:px-16 min-h-screen mt-20 md:mt-30 text-white" id="about">
      <h2 className="font-bold text-3xl md:text-4xl text-pink-400">
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div className="flex items-end p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <img className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-1/2 md: inset-y-10 lg:scale-[2.5]" />
          <div className="z-10">
            <p className="mt-2 mb-2 text-xl text-pink-400">
              Hey, I'm Tamanna Shaw.
            </p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty">
              I am Tamanna Shaw, a full-stack developer with a solid background in data science, AI/ML, and fullstack development. I am dedicated to building maintainable web applications with user-centered design. I excel in dynamic, team-oriented environments and enjoy delivering creative solutions to real-world problems.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-black" />
        </div>
        
        {/* Grid 2 */}
        <div className="p-6 bg-gradient-to-b from-black rounded-2xl row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-pink-400">Full-stack development | Data science</p>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-tl from-black  rounded-2xl">
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-pink-400 text-xl">
              Time Zone
            </p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty">
              I am currently based in India, operating in the Indian Standard Time (IST) zone.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About
