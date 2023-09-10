import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from '../higher-order-component';

const ServiceCard = ({ index, title, icon}) => {
  return (
  <Tilt className="xs:w-[250px] w-full"> 
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 40,
          scale: 1.05,
          speed: 420,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly itmes-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain ml-11"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      I am a full-stack developer with a passion for building beautiful, functional, and scalable web applications. My current toolkit includes React, Node.js, SQLite, Python, Flask, and JavaScript. I am seeking a developer position where I can contribute meaningful solutions to real-world challenges and continually grow both technically and as a team member. I am a quick learner and a team player who is eager to learn new technologies and frameworks.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(About, "about")