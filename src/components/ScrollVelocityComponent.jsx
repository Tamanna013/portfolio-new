import React from 'react'
import ScrollVelocity from "../constants/ScrollVelocity";
const ScrollVelocityComponent = () => {
  return (
    <div className="absolute bottom-8 w-full flex justify-center z-10">
        <ScrollVelocity
          texts={['Tamanna Shaw', 'Tamanna Shaw']}
          velocity={20}
          className="custom-scroll-text text-lg text-pink-300"
        />
    </div>
  )
}

export default ScrollVelocityComponent
