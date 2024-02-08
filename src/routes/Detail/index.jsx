import React, { useEffect, useState } from 'react';
import { Button, Input } from "antd";
import { useSearchParams } from "react-router-dom";
import './style.scss';

import CommentCard from "../../components/Comment-card";
import CommentData from "../../components/Comment-data";

import LikeIcon from "../../assets/VideoDetail/Like.jsx";
import DisLikeIcon from "../../assets/VideoDetail/DisLike.jsx";
import ShareIcon from "../../assets/VideoDetail/Share.jsx";
import MenuIcon from "../../assets/VideoDetail/Menu.jsx";
import OptionsIcon from "../../assets/VideoDetail/Options.jsx";
import VideoDetailCard from "../../components/Video-detail-card";
import ChannelPhoto from "../../assets/Home/channel-profile.jpg";
import ProfilPhoto from "../../assets/Home/profil-photo.jpg";

function Detail() {
  const Comment = CommentData();
  const [searchParams, setSearchParams] = useSearchParams()

  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [channelData, setChannelData] = useState([]);

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
    // AIzaSyD8zNVSbzl7yEn0l3car8Fo075L6mI2hmg
    // AIzaSyApxmwkAcDPaMgGjP4WDqAjAy-W9Niq-SM
    let api = 'AIzaSyApxmwkAcDPaMgGjP4WDqAjAy-W9Niq-SM';
    const http = '/api/videos?';

    const response = await fetch(http + new URLSearchParams({
      key: api,
      part: 'snippet,statistics',
      id: searchParams.get("q")
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
    const http = '/api/channels?';

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
    <div className='video-detail-container'>
      {isLoading && <p>Loading...</p>}
      {!isLoading && videoData.map((video, index) => (
        <div className='video-side'>
          <iframe className='video-frame' src={`https://www.youtube.com/embed/${searchParams.get("q")}`} frameborder="0" allowfullscreen></iframe>
          <div className='video-info'>
            <h1>{video.snippet.title}</h1>
            <div className='chanel'>
              <div className='chanel-info'>
                {channelData[index] && (
                  <img src={channelData[index].snippet.thumbnails.default.url} alt={channelData[index].snippet.title} />
                )}
                <div className='chanel-name'>
                  <h3>{video.snippet.channelTitle}</h3>
                  <p>291 B abone</p>
                </div>
                <Button className='subscribe-button'>Subscribe</Button>
              </div>
              <div className='like-unlike-share'>
                <Button className='like-button' icon={<LikeIcon />}>
                  {`${Math.random()}`.slice(0, 3) * 1000}K
                </Button>
                <Button className='dislike-button' icon={<DisLikeIcon />} />
                <Button className='share-button' icon={<ShareIcon />}>Share</Button>
                <Button className='options-button' shape="circle" icon={<OptionsIcon />} />
              </div>
            </div>
          </div>
          <div className='explanation'>
            <h3>89 B görüntüleme  1 yıl önce</h3>
            <p>🙏🏼 Videolarımı izlediğiniz için Teşekkürler!</p>
            <p>🔔 Abone Olmayı ve Bildirimleri açmayı Unutmayın!</p>
            <p>📧 İletişim : tavsanoglumusic@gmail.com</p>
          </div>
          <div className='comment'>
            <div className='comment-nav'>
              <div className='info'>
                <h2> Yorum</h2>
                <Button type="text" icon={<MenuIcon />}>Sorting Measure</Button>
              </div>
              <div className='comment-write'>
                <img src={() => { }} alt="" />
                <Input className='comment-input' placeholder="Add Comment" />
              </div>
            </div>
            <CommentCard />
          </div>
        </div>
      ))}
      <div className='nex-video'>
        <VideoDetailCard />
      </div>
    </div>
  )
}

export default Detail
