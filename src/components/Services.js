import React from 'react';
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const pdfPath = process.env.PUBLIC_URL + '/Aaron_Regalado-Resume-1.pdf';

// services data
const services = [
  {
    name: 'HTML/CSS',
    description:
      'Able to utilize semantic HTML markup and CSS styling techniques to ensure clean and organized code, and delivering engaging user interfaces that seamlessly adapt across different devices and screen sizes.',
    
  },
  {
    name: 'Vanilla JavaScript',
    description:
      'Understanding of core JavaScript concepts and the ability to create dynamic and interactive web applications, leveraging my knowledge of DOM manipulation, event handling, and OOP deliver engaging user experiences.',
    
  },
  {
    name: 'ReactJS',
    description:
      'A solid foundation in building interactive and responsive user interfaces using React components, leveraging my knowledge of JavaScript, JSX, and the React ecosystem to contribute to the development of web applications.',
    
  },
  {
    name: 'Soft Skills',
    description:
      'Communication, Teamwork, Adaptability, Problem-solving, Time management, Attention to detail, Proactiveness, Self-motivation, Listening, Professionalism'
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Front-end Developer with Experience
               Through Professional Work and Projects.
            </h3>
            <div className="flex flex-col h-105 justify-between">
              <a href="https://github.com/Oppxdan" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm">See my work</button>
              </a>
              <a href={pdfPath} target="_blank" rel="text-gradient btn-link hover:cursor-pointer">
                <button className="btn-nobg text-gradient">My Resume</button>
              </a>
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
