import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Playlist:React.FC = () => {

const navigate = useNavigate();

  return (
    <div className=' Container h-[78vh]   bg-gray-800  w-[78vw] '>

      <div className="playlistNav  flex rounded-b-xl  ">
<div className='font-bold text-3xl hover:underline cursor-pointer mx-5 h-[2vh] '>Muzic's Playlists</div>
<div className='absolute right-5 mt-2 hover:underline cursor-pointer  '>Show all</div>
      </div>


<div className="flex gap-12 mx-10 ">
  {Array(6).fill(0).map((_ ,index)=>(
   <span onClick={()=>{navigate('/playSong?name=dil diyan gallan')}} key={index}> <Card /></span> 
  ))}
      
</div>
     
     

     <div className="contributersSection flex gap-28 mt-20 mx-12">
      <div  className="flex flex-col gap-3">
        <h1 className='text-2xl font-bold'>Company</h1>
        <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>About</p>
        <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>Jobs</p>
        <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>For the Record</p>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-bold '>Communities</h1>
  <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>For Artists</p>
  <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>Developers</p>
  <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>Advertising</p>
  <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>Investors</p>
  <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>Vendors</p>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-bold'>Useful Links</h1>
        <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>Support</p>
        <p className='text-gray-400  hover:text-white hover:underline cursor-pointer'>Free Mobile App</p>
      </div>
     

<div className="socialmedia flex relative left-[25%] gap-4 text-2xl mt-5">
<img className='invert bg-slate-200 hover:bg-gray-300 p-3 rounded-full cursor-pointer  h-12 w-12' src="https://tse1.mm.bing.net/th?id=OIP.rxFZ6j3SL0s9hKh9hpEnuQHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="instagram icon" />
<img  className='invert bg-slate-200 hover:bg-gray-300 p-3 rounded-full cursor-pointer  h-12 w-12' src="https://tse4.mm.bing.net/th?id=OIP.maD3GoTpodAtk505594YOgHaHu&pid=Api&P=0&h=180" alt="twitter icon" />
<img className='invert bg-slate-200 hover:bg-gray-300 p-3 rounded-full cursor-pointer  h-12 w-12' src="https://tse4.mm.bing.net/th?id=OIP.Ov3ayDymo6745Qfb7kctEQHaHa&pid=Api&P=0&h=180" alt="facebook icon" />
</div>
     </div>
    </div>
  )
}

export default Playlist;