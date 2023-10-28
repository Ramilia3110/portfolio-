import React from "react";
import laptop from "./../assets/laptop.png";

const Cover = () => {
  return (
    <div className="h-screen w-full  flex flex-col justify-center items-center md:flex-row md:justify-between gap-[2rem]">
      <div className="w-full md:w-[40rem]">
        <img
          className="w-full md:w-[100%]"
          src={laptop}
          alt="laptop in matrix style"
        />
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0">
        <h2 className="welcome">Welcome</h2>
        <p className="text-md text-[1.8rem] md:text-[3rem] text-center text-white">
          I am a Front End Developer
        </p>
      </div>
    </div>
  );
};

export default Cover;
