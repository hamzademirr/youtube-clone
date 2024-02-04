import { Card } from 'antd'
import React, { useEffect, useState } from 'react'

import Videos from "../../components/Videos-data";
import './style.scss'

import NextVideoPhoto from "../../assets/Home/next-video-photo.jpg";

function VideoDetailCard() {
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
        <Card className='video-detail-card-template'>
          <div className='video-image'>
            <img src={video.videImage} alt={video.title} />
          </div>
          <div className='video-info'>
            <div className='video-title'>
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
              <p>{video.views} {video.date}</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

export default VideoDetailCard
