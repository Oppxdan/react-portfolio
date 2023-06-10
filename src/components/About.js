import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
            style={{ textAlign: 'center' }}
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Front-end Developer with Experience with Professional Work and Projects.
            </h3>
            <p className='mb-6'>
              I'm an experienced Front-end Developer with a track record of successfully delivering
               professional projects. Collaborating with talented teams, 
               I transform ideas into visually appealing and 
               responsive websites using HTML, CSS, and JavaScript. 
               I utilize modern frameworks to optimize 
               performance and enhance user experience. My passion for elegant
              solutions ensures that I consistently exceed client expectations.
            </p>
            <div className='flex gap-x-8 items-center' style={{ justifyContent: 'center' }}>
              <ScrollLink to='contact' smooth={true} duration={500}>
                <button className='btn btn-lg'>Contact me</button>
              </ScrollLink>
              <ScrollLink to='services' smooth={true} duration={500} className='text-gradient btn-link hover:cursor-pointer'>
                My Work
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
