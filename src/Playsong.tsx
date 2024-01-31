import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";
import Navbar from "./Navbar";
import  Songbar  from "./Songbar";
import { Link } from "react-router-dom";


function Playsong() {

  document.body.style.backgroundColor = 'black'

  return (
    <>
    <div className="FullContainer w-screen">

    <div className="flex flex-col w-[20vw] m-3 bg-black  border-2 border-gray-600 rounded-lg ">
      <div className=" p-5 flex flex-col gap-4">
        <Link to={{pathname:'/'}}>
    <div className="flex mx-[-4%]">
      <span><img className="w-14 invert h-14 " src="../assets/musicicon.jpg" alt="" /></span>
      <div className="mt-4 text-xl">Muzic</div>

    </div>
         </Link>
    <div className="home flex gap-5">
      <div className="text-4xl cursor-pointer"><GoHomeFill /></div>
      <div className="text-xl mt-1 text-gray-500 hover:text-white hover:underline">Home</div>
    </div>
       
       <div className="flex gap-5">
<div className="text-4xl cursor-pointer"><IoIosSearch /></div>
      <div className="text-xl mt-1  text-gray-500 cursor-pointer hover:text-white hover:underline">Search</div>
       </div>
      
      </div>

      
    </div>

   <div className="container p-3 w-[20vw] m-3 rounded-lg bg-stone-700">

   <div className="flex gap-3 mx-2 text-2xl ">
  <div className="mt-1    cursor-pointer "><IoLibrary /></div>
  <div className=" text-gray-500 hover:text-white  cursor-pointer">Your Library</div>
    </div> 
  <div className="mt-[-11%] mx-72 font-thin text-4xl  text-gray-500 hover:text-white  cursor-pointer ">+</div>

<div className="scroll h-60 overflow-auto">

<div className="bg-stone-500 rounded-lg p-5 mt-7">
  <div className="text-xl">Create your first playlist</div>
  <div>It's easy we'll help you</div>
  <button className="bg-white text-black rounded-3xl mt-6 hover:scale-105 mx-2 p-2 px-5">Create Playlist</button>
</div>

<div className="bg-stone-500  rounded-lg p-5 mt-7">
  <div className="text-xl">Let's find some podcasts to follow</div>
  <div>We'll keep you updated on new episodes</div>
  <button className="bg-white text-black rounded-3xl mt-6 hover:scale-105 mx-2 p-2 px-5">Browse podcasts</button>
</div>

</div>


   <div className=" font-extralight thin text-xs mt-14 mx-2 grid grid-cols-3 gap-4 w-[20vw]">
  <div className="font-extralight">Legal</div>
  <div  className="font-extralight">Privacy Center</div>
  <div className="font-extralight">Privacy Policy</div>
  <div className="font-extralight">Cookies</div>
  <div className="font-extralight">About Ads</div>
  <div className="font-extralight">Accessibility</div>
  <div className="font-extralight">Cookies</div>
   </div>

<button className="rounded-3xl hover:scale-105 hover:border-white  p-1 px-4 border m-2 mt-8 border-gray-300">
  <div className="flex gap-1">
<div className="mt-1"><RiGlobalLine /></div>
<div>English</div>

  </div>
</button>

   </div>


{/* Another Section Starts Here! */}

<Navbar />
<div className="absolute left-[21.5vw]  top-20">
<Songbar />
</div>
 
<div className="w-[100vw] mx-1 flex    bg-pink-600  h-[6vh]">
  <div>
<div className="mx-5">Preview of Muzic</div>
<div className="mx-5">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
    
  </div>
<button className="rounded-3xl absolute right-5 mt-1 p-2 hover:scale-105 hover:font-bold px-5 text-black bg-white">Sign up free</button>
</div>

</div>
</>
  )
} 

export default Playsong;
