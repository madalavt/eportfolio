import React from 'react';
import '../styles/Style.css';
import Uc from '../assets/Education/UC.png';
import Anu from '../assets/Education/ANU.png';


function Education() {
  return (
    <div name='education' style={{color: '#ededed', background: '#081b29'}}>
      <div className="education" id="education">
        <div className="container">
        <div className='p-4'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-500 inline rounded'>Education</h1>
          <p className='mt-4 text-lg'>This is my education background</p>
        </div>
          <div className="services-list">
            <div>
              <img src={Uc} alt="uc Logo" />
              <h2 style={{ marginBottom: '10px' }}>
                <b>Master's of Science in Information Technology at University of Cincinnati</b>
              </h2>

              <a href="coursework.html" className="read" target="_blank">
                Coursework
              </a>
            </div>
            <div>
              <img src={Anu} alt="ANU LogO" />
              <h2 style={{ marginBottom: '10px' }}>
                <b>Bachelor of Technology in Computer Science and Engineering at Acharya Nagarjuna University</b>
              </h2>

              <a href="btech.html" className="read" target="_blank">
                Coursework
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
