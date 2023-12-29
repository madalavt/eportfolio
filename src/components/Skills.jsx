/* eslint-disable react/jsx-no-comment-textnodes */
import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JS from '../assets/images/javascript.png';
import Spring from '../assets/images/spring.png'
import React from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Java from '../assets/images/java.svg';
import Bootstrap from '../assets/images/bootstrap.png';
import Tailwind from '../assets/images/tailwind.png';
import Git from '../assets/images/git.jpg';
import Python from '../assets/images/python.png';
import Springboot from '../assets/images/springboot.png';
import Selenium from '../assets/images/selenium.webp';


// import Github from '../assets/images/github.png';

const Skills = () => {
  return (
    <div name='skills' className="h-auto md:h-screen w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] h-full flex flex-col mx-auto p-4">
        <div className="p-4">
          <h1 className="text-4xl font-bold border-b-4 rounded-sm border-blue-500 inline pt-3">Skills</h1>
          <p className="text-lg mt-4">These are the technologies I&apos;ve worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-rows-2 md:grid-cols-4 p-4 mx-auto h-full place-items-center">

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>HTMl</p>
          </div>

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={CSS} alt="CSS" />
            <p className='text-lg uppercase text-center my-2 font-bold'>CSS</p>
          </div>

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={JS} alt="Javascript" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Javascript</p>
          </div>

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={React} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>React</p>
          </div>


          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Bootstrap} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Bootstrap</p>
          </div>
<div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Tailwind} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Tailwind</p>
          </div> 
          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Java} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Java</p>
          </div>

        <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Git} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Git</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Python} alt="Python" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Python</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Springboot} alt="Python" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Springboot</p>
          </div>
          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Spring} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Spring</p>
          </div>
          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Selenium} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Selenium</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills