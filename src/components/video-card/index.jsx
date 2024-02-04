import { Card } from 'antd';
import React, { useEffect, useState } from 'react'

import Videos from "../../components/Videos-data";
import "./style.scss"

import VideoImage from "../../assets/Home/video-board-image.jpg";
import ProfilPhoto from "../../assets/Home/profil-photo.jpg";

function videoCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await Videos();
      setVideoData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && videoData.map((video) => (
        <Card className='video-card-template'>
          <div className='video-image'>
            <img src={video.videImage} alt={video.title} />
          </div>
          <div className='video-info'>
          <img src={video.profileImage} alt={video.channel} />
            <div>
              <p>{video.title}</p>
              <span>{video.channel}</span>
              <br />
              <span>{video.views} {video.date}</span>
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

export default videoCard
