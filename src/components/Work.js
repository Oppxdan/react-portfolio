import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 items-center'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                A mini-showcase of my diverse portfolio, highlighting my 
                proficiency in front-end development and my ability 
                to deliver visually appealing and user-friendly websites.
              </p>
              <a href="https://github.com/Oppxdan" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm">View All Projects</button>
              </a>
            </div>
            {/* image */}
            <div className='project-container group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500 w-full'
                src={Img1}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>AnnaGriffin E-Commerce</span>
              </div>
              
              <a href="https://annagriffin.com" className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <div>
                  <span className='text-3xl text-white'>View Project</span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 items-center'
          >
            {/* image */}
            <div className='project-container group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>To Do List</span>
              </div>
              
              <a href="https://oppxdan.github.io/todo-app/" className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <div>
                  <span className='text-3xl text-white'>View Project</span>
                </div>
              </a>
            </div>
            {/* image */}
            <div className='project-container group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>SpringWorks Therapeutics</span>
              </div>
              
              <a href="https://springworkstx.com/" className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <div>
                  <span className='text-3xl text-white'>View Project</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
