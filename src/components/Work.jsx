/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import nikeclone from '../assets/projects/nikeclone.jpg';
import empmang from '../assets/projects/empmanagement.jpg';
import ttt from '../assets/projects/Tictactoeapp.jpg';
import heartdisease from '../assets/projects/heartdisease.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300 pt-[2rem]'>
      <div className='max-w-[1000px] w-full h-full flex flex-col justify-center mx-auto p-4'>
        <div className='p-4'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-500 inline rounded'>Projects</h1>
          <p className='mt-4 text-lg'>These are the projects, I&apos;ve build: </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item 1*/}
          <div style={{ backgroundImage: `url(${nikeclone})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Nike clone Application using React JS
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/madalavt/nike-clone">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div style={{ backgroundImage: `url(${empmang})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Employee management Application using React, Springboot and JPA
              </span>
              <div className='pt-8 text-center justify-center items-center'>
                <a href="https://github.com/madalavt/employeemanagementfrontend">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div style={{ backgroundImage: `url(${ttt})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Tic-Tac-Toe Application using HTML, CSS and JS
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/madalavt/ttt">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div style={{ backgroundImage: `url(${heartdisease})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Heart Disease Prediction using Hybrid Machine Learning
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/madalavt/heartdiseaseprediction">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Work