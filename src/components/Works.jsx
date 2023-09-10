import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { link } from '../assets';
import { sectionWrapper } from '../higher-order-component';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deployed_link, }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 420,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {deployed_link && (
              <div
                onClick={() => window.open(deployed_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute bottom-3 right-3"
              >
                <img
                  src={link}
                  alt="link logo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Project work I have done</p>
        <h2 className={styles.sectionHeadText}>My Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
        variants={fadeIn("", "", 0.2, 1.2)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've worked on a diverse range of projects, from simple websites to intricate web applications. The projects showcased below were pivotal in completing my bootcamp at Masterschool. This portfolio itself is a testament to my current skill set, leveraging technologies like React, Tailwind CSS, three.js, framer-motion, and react-tilt. I find 3D libraries particularly fascinating and am committed to furthering my expertise in this area. The projects you'll see reflect not just my current capabilities but also my eagerness to adapt and learn new technologies.
        </motion.p>
      </div>

      <div className="mt-2 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}/>
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(Works, "");