import React from "react";
import Image from "next/image";
import {assets} from "@/assets/assets";
const SocialsLinks = ({isDarkMode}) => {
  return (
    <div className="absolute left-[-20%] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
      <a
        href="https://linkedin.com/in/saad-hussain-899561399/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center  rounded-full border border-e-gray-400 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black  dark:bg-white dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
        <Image
          src={assets.linkedin}
          alt="Linkedin"
          className="w-5"
        />
      </a>

      <a
        href="https://github.com/saadhussain01"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center  rounded-full border border-e-gray-400 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black  dark:bg-white dark:border-white dark:hover:shadow-white dark:border-8 border-black transition"
      >
        <Image
          src={assets.github_side_icon}
          alt="github"
          className="w-5"
        />
      </a>
    </div>
  );
};

export default SocialsLinks;
