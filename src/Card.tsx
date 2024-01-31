import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";

const Card: React.FC = () => {
  const [btnOpacity, setBtnOpacity] = useState(0);

  return (
    <div
      onMouseLeave={() => setBtnOpacity(0)}
      onMouseOver={() => setBtnOpacity(1)}
      className='card cursor-pointer  bg-stone-400 hover:bg-stone-500 rounded-xl h-[32vh] w-[10vw] mt-12'
    >
      <img
        className='h-[20vh] rounded-lg w-[9vw]  flex mx-auto relative top-3'
        src="../dildiyanimg.jpg"
        alt="music image"
      />
      <button
      style={{opacity: btnOpacity , transition: 'opacity 500ms'}}
        className={`text-2xl absolute mt-[-4%] mx-24 bg-green-500 rounded-full p-5`}
      >
        <FaPlay />
      </button>
      <h1 className='mt-5 w-[9vw] flex mx-auto'>Dil Diyaan Gallan </h1>
      <h1 className='text-gray-900 w-[9vw] opacity-65 flex mx-auto'>romantic songs | Atif Aslam</h1>
    </div>
  );
};

export default Card;
