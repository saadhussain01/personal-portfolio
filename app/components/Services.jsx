import {assets, serviceData} from "@/assets/assets";
import {Asset} from "next/font/google";
import Image from "next/image";
import React, {useState} from "react";
import {motion} from "motion/react";

const Services = ({isDarkMode}) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am an AI Engineer, with 2 year of experience in Machine learning,Deep Learning,Data Science,Agentic AI,Generative AI and AI Automation.
      </motion.p>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({icon, title, description, details}, index) => (
          <motion.div
            whileHover={{scale: 1.05}}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image
              src={icon}
              alt=""
              className="w-10"
            />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>

            <button
              onClick={() => setSelectedService({title, details})}
              className="flex items-center gap-2 text-sm mt-5 text-gray-600 dark:text-white/80"
            >
              Read more
              <Image
                alt=""
                src={
                  isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow
                }
                className="w-4 "
              />
            </button>
          </motion.div>
        ))}

        {selectedService && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{scale: 0.8}}
              animate={{scale: 1}}
              onClick={e => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black dark:hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                {selectedService.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                {selectedService.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
