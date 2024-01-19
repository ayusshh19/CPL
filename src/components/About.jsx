import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const img = "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=747/https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG"
  return (
    <div className='grid grid-cols-12 md:grid-rows-2 items-center md:gap-8'>
    <div className='md:col-span-7 col-span-12 md:row-span-2'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>What Is CPL.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The Coding Premier League Event is designed as a league of competitive coding contests with the fundamental goal of enhancing participants' skills. This platform allows participants to delve deeper into the realm of competitive programming, providing invaluable exposure to this field.
      </motion.p>
    </div>
  
    <div className='md:col-span-5 col-span-12 md:row-span-2  grid grid-cols-6 gap-2'>
      <div className='col-span-3 gap-2 grid max-w-full md:max-w-none  max-md:mt-4'>
        <img className='rounded-lg w-full md:w-auto' src={img} alt="" />
        <img className='rounded-md w-full md:w-auto' src={img} alt="" />
      </div>
      <div className=' col-span-3 grid items-center'>
        <img className='rounded-md w-full md:w-[12rem]' src={img} alt="" />
      </div>
    </div>
  </div>
  


  );
};

export default SectionWrapper(About, 'about');
