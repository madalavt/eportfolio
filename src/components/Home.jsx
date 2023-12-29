import { HiArrowRight } from 'react-icons/hi'
import { Link } from "react-scroll"
import { useState,useEffect } from 'react';

const Hero = () => {
  const roles = ['Full-Stack developer', 'Front-End developer', 'Back-End developer', 'SDET'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Move to the next role after 1 second
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000);

    // Clear the timeout when the component unmounts or when the role changes
    return () => clearTimeout(timeoutId);
  }, [currentRoleIndex, roles]);
  
  return (
    <div name='home' className="Hero w-full h-screen bg-[#0a192f]">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-200">Hello there! </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>I am Vishnu Madala.</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a {roles[currentRoleIndex]}</h2>
        
        <p className="text-[#8892b0] py-4 max-w-[700px]">My aim is to work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately</p>
        <div>
          <button className="text-white group w-[120px] text-center justify-evenly py-1 border-2 border-blue-500 hover:bg-blue-400 flex items-center  ease-in duration-300 origin-bottom">
            <Link to={'work'} duration={500} smooth={true}>View Work</Link>
            <span className='group-hover:rotate-90 group-hover:text-black duration-300'>
              <HiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero