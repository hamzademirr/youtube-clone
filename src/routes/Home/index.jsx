import React from 'react'
import { useTheme } from "../../context/ThemeContext";

import VideoCard from "../../components/video-card";

import './style.scss'

function Home() {
  const { theme } = useTheme();
  return (
    <div className={theme ? 'dark item' : 'light item'}>
      <div className='video-container'>
        <VideoCard />
      </div>
    </div>
  )
}

export default Home
