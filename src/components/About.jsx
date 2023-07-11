import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
              // eslint-disable-next-line react/no-unknown-property
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                {title}
              </h3>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="md:mt-32">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", " ", 0.1, 1)}
        className="mt-4 p-8 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate Full Stack Developer with a flair for creating
        exceptional web applications. I specialize in crafting seamless user
        experiences and turning innovative ideas into reality.
        <br /> <br />
        With a strong foundation in front-end and back-end development, I have
        honed my skills in HTML, CSS, JavaScript, React, Node.js, and more.
        Through my journey as a developer, I made numerous projects.
        <br /> <br />I constantly explore new technologies and stay up to date
        with industry trends ensuring that my work remains fresh, innovative,
        and tailored to meet the needs of modern users.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default About;
