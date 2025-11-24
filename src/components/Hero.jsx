import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-14 text-white font-bold">
      <div className="flex items-center justify-around text-center">
        <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] w-[450px] h-[230px] p-5 rounded-md">
          <h1 className="text-xl mt-11 ">In-Progress</h1>
          <p className="text-5xl mt-3">0</p>
        </div>
        <div className="bg-gradient-to-r from-[#54cf68] to-[#00827a] w-[450px] h-[230px] p-5  rounded-md">
          <h1 className="text-xl mt-11">Resolved</h1>
          <p className="text-5xl mt-3">0</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
