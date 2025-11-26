import React from "react";
import image1 from "../assets/vector1.png";
import image2 from "../assets/vector2.png";
const Hero = ({customerticket, resolve}) => {
  return (
    <div className="max-w-[1200px] mx-auto mt-14 text-white font-bold">
      <div className="flex items-center justify-around text-center">
        <div
          className=" w-[550px] h-[230px] p-5 rounded-md"
          style={{
            backgroundImage: `
      url(${image1}),
      url(${image2}),
      linear-gradient(to right, #632ee3, #9f62f2)
    `,
            backgroundPosition: "right bottom, left top, center",
            backgroundSize: "120px, 100px, cover",
          }}
        >
          <h1 className="text-xl mt-11 ">In-Progress</h1>
          <p className="text-5xl mt-3">{customerticket.length}</p>
        </div>
        <div
          className="w-[550px] h-[230px] p-5  rounded-md"
          style={{
            backgroundImage: `
      url(${image1}),
      url(${image2}),
      linear-gradient(to right, #54cf68, #00827a)
    `,
            backgroundPosition: "right bottom, left top, center",
            backgroundSize: "120px, 100px, cover",
          }}
        >
          <h1 className="text-xl mt-11">Resolved</h1>
          <p className="text-5xl mt-3">{resolve.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
