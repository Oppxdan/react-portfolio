import React from 'react';
import { Link } from 'react-scroll';
// images
import Image from '../assets/banner-icon.gif';
// icons
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'
            >
              Aaron <span>Regalado</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] banner-text font-secondary font-semibold uppercase leading-[1] am-margin'
            >
              <span className='text-white mr-4'>I am</span>
              <TypeAnimation
                sequence={[
                  'A Developer',
                  2000,
                  'An Aspirant',
                  2000,
                  'An Enthusiast',
                  2000,
                  'An Innovator',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              I am a skilled front-end web developer that can build a website, whether it needs HTML, CSS, JavaScript, and/or ReactJS, I can create a website that is responsive and cleanly built.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link to='contact' smooth={true} duration={500}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <Link
                to='services'
                smooth={true}
                duration={500}
                className='text-gradient btn-link hover:cursor-pointer'
              >
                My Work
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/Oppxdan'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/aaron-regalado-5780a3224/'>
                <FaLinkedin />
              </a>
              <a href='mailto:aaron.a.regalado@gmail.com'>
                <FaMailBulk />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img className="banner-icon" src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
