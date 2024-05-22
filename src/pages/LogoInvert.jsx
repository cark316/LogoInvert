import React from "react";

const LogoInvert = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex p-6 w-full font-poppins font-semibold text-6xl fixed top-0 invert mix-blend-difference">
        SAAD
      </div>
      <div className="flex items-center justify-center gap-2 py-28 px-6 h-screen w-full bg-orange-700">
        <div className="flex flex-col p-2 gap-2 items-center justify-center h-full w-[23%] bg-black rounded-3xl">
          <div className="flex justify-center items-center h-full w-full bg-green-800 rounded-2xl"></div>
          <div className="flex justify-center items-center h-[25%] w-full bg-slate-400 rounded-2xl"></div>
          <div className="flex justify-center items-center h-[125%] w-full bg-slate-400 rounded-2xl"></div>
        </div>
        <div className="flex h-full w-full bg-slate-700 rounded-3xl"></div>
      </div>
      <div className="flex items-center justify-center h-screen w-full bg-blue-700"></div>
    </div>
  );
};

export default LogoInvert;
