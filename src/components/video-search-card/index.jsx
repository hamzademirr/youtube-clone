import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import "./style.scss";

import Videos from "../../components/Videos-data";

function VideoSearchCard() {
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
        <Card key={video.id} className='video-search-card-template'>
          <div className='video-image'>
            <img src={video.videImage} alt={video.title} />
          </div>
          <div className='video-info'>
            <div className='video-title'>
              <h3>{video.title}</h3>
              <p>{video.views} {video.date}</p>
            </div>
            <div className='channel-info'>
              <img src={video.profileImage} alt={video.channel} />
              <span>{video.channel}</span>
            </div>
            <p>{video.description}</p>
          </div>
        </Card>
      ))}
    </>
  );
}

export default VideoSearchCard;
