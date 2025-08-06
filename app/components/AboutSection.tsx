import React from "react";

export default function AboutBanner(){
  return (
    <div className="relative w-full h-[300px] my-50">
      <img
        src="/redteam.png"
        alt="team"
        className="absolute inset-0 w-full h-full object-cover"
      />
        <div className="relative z-10 flex justify-around items-center h-full text-white text-center px-4">
        <div>
          <p className="text-8xl font-bold" style={{ fontFamily: "Poppins" }}>8+</p>
          <p className="text-lg">Years of experience</p>
        </div>
        <div>
          <p className="text-8xl font-bold">150+</p>
          <p className="text-lg">Successful projects</p>
        </div>
        <div>
          <p className="text-8xl font-bold">100%</p>
          <p className="text-lg">Client satisfaction</p>
        </div>
      </div>
    </div>
  );
};

