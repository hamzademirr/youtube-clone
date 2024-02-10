import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext/index.jsx";

import './style.scss'
import { NavLink } from 'react-router-dom';

function VideoDetailCard({ videoTitle }) {
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoResponse = await fetchVideoData();
        const videoData = await videoResponse.json();
        console.log(videoData);

        setVideoData(videoData.items || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const fetchVideoData = async () => {
    let api = '';
    const http = 'https://www.googleapis.com/youtube/v3/search?';

    const response = await fetch(http + new URLSearchParams({
      key: api,
      q: (videoTitle.split(' ').slice(0, 5).join(' ')).replace(/[^\w\s.ğüşıöçĞÜŞİÖÇ]/g, ''),
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      regionCode: 'TR',
      videoDuration: 'long'
    }));

    if (!response.ok) {
      throw new Error("An error occurred in the API call.");
    }

    return response;
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && videoData.map((video, index) => (
        <Card className={theme ? 'video-detail-card-template dark' : 'video-detail-card-template light'}>
          <NavLink className='navlink-template' to={`/detail?q=${video.id.videoId}`}>
            <div className='video-image'>
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            </div>
            <div className='video-info'>
              <div className='video-title'>
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.channelTitle}</p>
                <p>{`${Math.random()}`.slice(0, 3) * 1000 + 1}K Views - {`${Math.floor(Math.random() * 7) + 1}`} days ago</p>
              </div>
            </div>
          </NavLink>
        </Card>
      ))}
    </>
  )
}

export default VideoDetailCard
