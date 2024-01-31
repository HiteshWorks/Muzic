import React from 'react';

const Navbar: React.FC = () => {
  return (
   
      <div className="Navbar flex  absolute left-[24vw] top-0 mt-8">
        {/* Left section with icons */}
        <div className="flex gap-8">
          
            <img
              className="invert h-4 w-4 rounded-full bg-gray-500"
              src="https://www.freeiconspng.com/thumbs/less-than-sign-icon/less-than-sign-icon-1.jpg"
              alt=""
            />
         
         
            <img
              className="invert rotate-180 h-4 w-4 bg-gray-500 rounded-full"
              src="https://www.freeiconspng.com/thumbs/less-than-sign-icon/less-than-sign-icon-1.jpg"
              alt=""
            />
         
        </div>

        {/* Right section with menu items */}
       
       <div className='flex mx-[25rem]  '>


        <div className="flex gap-5 text-xl items mx-44">
          <div className="text-gray-500 hover:text-white hover:scale-105 cursor-pointer">Premium</div>
          <div className="text-gray-500 hover:text-white hover:scale-105 cursor-pointer">Support</div>
          <div className="text-gray-500 hover:text-white hover:scale-105 cursor-pointer">Download</div>
        </div>

        <div className="flex gap-12 text-xl mx-[-15%]">
<div>|</div>
<div className='text-gray-500 hover:text-white hover:scale-105 cursor-pointer'>Sign up</div>
<button className='px-9 p-3 hover:scale-105 hover:font-bold  text-black bg-white rounded-3xl font-semibold mt-[-4%]'>Log in</button>

        </div>
      </div>
    </div>
      
       
  );
};

export default Navbar;
