import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTheme } from "../../context/ThemeContext/index.jsx";

import "./style.scss";
import { NavLink } from 'react-router-dom';

function VideoCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const { theme } = useTheme();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoResponse = await fetchVideoData();
        const videoData = await videoResponse.json();
        console.log(videoData);
        const channelDataPromises = videoData.items.map(video => fetchChannelData(video.snippet.channelId));
        const channelData = await Promise.all(channelDataPromises);

        setVideoData(videoData.items || []);
        setChannelData(channelData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const fetchVideoData = async () => {
    let api = '';
    const http = 'https://www.googleapis.com/youtube/v3/videos?';

    const response = await fetch(http + new URLSearchParams({
      key: api,
      part: 'snippet,statistics',
      chart: 'mostPopular',
      videoEmbeddable: true,
      type: 'video',
      maxResults: 5,
      regionCode: 'TR',
      videoDuration: 'long'
    }));

    if (!response.ok) {
      throw new Error("An error occurred in the API call.");
    }

    return response;
  }

  const fetchChannelData = async (channelId) => {
    let api = '';
    const http = 'https://www.googleapis.com/youtube/v3/channels?';

    const response = await fetch(http + new URLSearchParams({
      key: api,
      part: 'snippet',
      id: channelId
    }));

    if (!response.ok) {
      throw new Error("An error occurred in the API call.");
    }

    const data = await response.json();
    return data.items[0];
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && videoData.map((video, index) => (
        <Card key={video.id} className={theme ? 'video-card-template dark' : 'video-card-template light'}>
          <NavLink className='navlink-template' to={`/detail?q=${video.id}`}>
            <div className='video-image'>
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            </div>
            <div className='video-info'>
              {channelData[index] && (
                <img src={channelData[index].snippet.thumbnails.default.url} alt={channelData[index].snippet.title} />
              )}
              <div>
                <p>{video.snippet.title}</p>
                <span>{video.snippet.channelTitle}</span>
                <br />
                <span>{video.statistics.viewCount} views - {new Date().getDate() - new Date(video.snippet.publishedAt).getDate()} days ago</span>
              </div>
            </div>
          </NavLink>
        </Card>
      ))}
    </>
  )
}

export default VideoCard;
