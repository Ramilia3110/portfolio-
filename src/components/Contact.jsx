import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";

const Contact = () => {
  const skills = [
    { icon: <BsGithub size={30} /> },
    { icon: <BsLinkedin size={30} /> },
    { icon: <HiMailOpen size={30} /> },
  ];

  return (
    <div id="contact" className="bg-gray-100 py-16 w-[90%] mx-auto">
      <div className="container w-[80%] mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Contact Me
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[5rem] h-[3rem] bg-gray-300 text-[#3b7945] rounded-full flex items-center justify-center p-4 text-sm hover:bg-[#2e8d3e] transform transition duration-300 hover:scale-110"
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
