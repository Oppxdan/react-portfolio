import React from 'react';
import Image from '../assets/avatar.svg';
import {FaGithub, FaYoutube, FaDribbble, FaLinkedin} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (<div id="home" className="section">
    <div className="container mx-auto">
      <div>
        <div>
          <h1>Aaron <span>Regalado</span></h1>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am</span>
            <TypeAnimation sequence={[
              'A Web Developer',
              2000,
              'An Aspirant',
              2000,
              'An Enthusiast',
              2000,
              'An Innovator',
              2000,
              'A Passionate Learner',
              2000,
            ]}
            speed={50}
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div>
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </div>
            <div className="flex">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={Image} alt="personal image" />
        </div>
      </div>
    </div>
  </div>);
};

export default Banner;
