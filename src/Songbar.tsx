import React, { useRef, useState, useEffect } from 'react';
import { GrChapterPrevious } from 'react-icons/gr';
import { GrChapterNext } from 'react-icons/gr';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

interface SongbarProps {}

const Songbar: React.FC<SongbarProps> = () => {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioref = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isMuted , setisMuted] =useState<boolean>(false);
 
  

  useEffect(() => {
    const audio = audioref.current;
    
    if(isMuted){
      if(audio){
        audio.volume = 0;
      }
    }
    else{
      if(audio){
        audio.volume = 1;
      }
    }

    const handleTimeUpdate = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    audio?.addEventListener('timeupdate', handleTimeUpdate);
    audio?.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio?.removeEventListener('timeupdate', handleTimeUpdate);
      audio?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };

  }, [audioref.current , isMuted]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    const audio = audioref.current;
    if (audio) {
      if (isPaused) {
        audio.play();
      } else {
        audio.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const audio = audioref.current;

    if (progressBar && audio) {
      const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
      const percent = clickPosition / progressBar.clientWidth;
      const newTime = percent * audio.duration;
      audio.currentTime = newTime;
    }
  };

  return (
    <div className='playbar h-[80vh] rounded-2xl w-[100vw] bg-gray-500'>
      <div>
        <img
          className='border-2 border-black flex mx-[25%] w-[30vw] rounded-xl'
          src="../dildiyanimg.jpg"
          alt=""
        />
      </div>

      <div className="playbtns text-4xl flex mx-[35%] invert mt-8 gap-5">
        <button title='previous' className=''><GrChapterPrevious /></button>
        <button title='play/pause' onClick={handlePlayPause}>{isPaused ? <FaPlay /> : <FaPause />}</button>
        <button title='next'><GrChapterNext /></button>
      </div>

      <div title='duration' className="duration text-xl mx-[58%] mt-5 opacity-60 hover:opacity-100 flex">
        <div className='text-yellow-400'>{formatTime(currentTime)}</div>
        <span className='text-stone-900'>/</span>
        <div className='text-black'>{formatTime(duration)}</div>
      </div>

       <div className="volndDownload flex gap-5 -mt-8 mx-[15%] ">
        <a href='../dildiyan.mp3' className='text-2xl '><FiDownload /></a>
      <div onClick={()=>{setisMuted(!isMuted)}} className="volume cursor-pointer text-2xl ">
      {isMuted ? <FaVolumeXmark />  : <FaVolumeUp />}
      </div>
       </div>

      <div
        className="progressBar relative shadow-xl shadow-green-900 cursor-pointer h-2 w-1/2 mx-64 rounded-xl bg-white mt-4"
        ref={progressBarRef}
        onClick={handleProgressBarClick}
      >
        <div className="progressed text-6xl rounded-l-xl border border-black bg-orange-300 h-2" style={{ width: `${(currentTime / duration) * 100}%`, transition: 'width 0.3s ease-in-out' }}></div>
        <div className="playhead absolute h-4 w-4 bg-blue-500 rounded-full -mt-3" style={{ left: `${((currentTime / duration) * 100) - 1}%`, transition: 'left 0.3s ease-in-out' }}></div>
      </div>

      <audio ref={audioref} src="../dildiyan.mp3"></audio>
    </div>
  );
};

export default Songbar;
