import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSearchParams, NavLink } from "react-router-dom";
import "./style.scss";

import Videos from "../../components/Videos-data";

function VideoSearchCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()

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
  }, [searchParams]);

  const fetchVideoData = async () => {
    // AIzaSyD8zNVSbzl7yEn0l3car8Fo075L6mI2hmg
    // AIzaSyApxmwkAcDPaMgGjP4WDqAjAy-W9Niq-SM
    let api = 'AIzaSyApxmwkAcDPaMgGjP4WDqAjAy-W9Niq-SM';
    const http = 'https://www.googleapis.com/youtube/v3/search?';

    const response = await fetch(http + new URLSearchParams({
      key: api,
      q: searchParams.get('q'),
      part: 'snippet',
      // videoEmbeddable: true,
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
    // AIzaSyD8zNVSbzl7yEn0l3car8Fo075L6mI2hmg
    // AIzaSyApxmwkAcDPaMgGjP4WDqAjAy-W9Niq-SM
    let api = 'AIzaSyApxmwkAcDPaMgGjP4WDqAjAy-W9Niq-SM';
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
        <NavLink to={`/detail?q=${video.id.videoId}&w=${video.snippet.title}`}>
          <Card key={video.id} className='video-search-card-template'>
            <div className='video-image'>
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            </div>
            <div className='video-info'>
              <div className='video-title'>
                <h3>{video.snippet.title}</h3>
                {/* <p>{video.statistics.viewCount} views - {new Date().getDate() - new Date(video.snippet.publishedAt).getDate()} days ago</p> */}
              </div>
              <div className='channel-info'>
                {channelData[index] && (
                  <img src={channelData[index].snippet.thumbnails.default.url} alt={channelData[index].snippet.title} />
                )}
                <span>{video.snippet.channelTitle}</span>
              </div>
              <p>{video.snippet.description}</p>
            </div>
          </Card>
        </NavLink>
      ))}
    </>
  );
}

export default VideoSearchCard;
