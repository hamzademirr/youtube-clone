import React from 'react';
import { Button, Input } from "antd";
import './style.scss';

import CommentCard from "../../components/Comment-card";

import LikeIcon from "../../assets/VideoDetail/Like.jsx";
import DisLikeIcon from "../../assets/VideoDetail/DisLike.jsx";
import ShareIcon from "../../assets/VideoDetail/Share.jsx";
import MenuIcon from "../../assets/VideoDetail/Menu.jsx";
import OptionsIcon from "../../assets/VideoDetail/Options.jsx";
import VideoDetailCard from "../../components/Video-detail-card";
import VideoPhoto from "../../assets/Home/video.mp4";
import ChannelPhoto from "../../assets/Home/channel-profile.jpg";
import ProfilPhoto from "../../assets/Home/profil-photo.jpg";

function Detail() {
  return (
    <div className='video-detail-container'>
      <div className='video-side'>
        <video className='video-frame' controls>
          <source src={VideoPhoto} type="video/mp4" />
        </video>
        <div className='video-info'>
          <h1>Mt - Kök Tu (Göktuğ - Gök Bayrak)</h1>
          <div className='chanel'>
            <div className='chanel-info'>
              <img src={ChannelPhoto} alt="" />
              <div className='chanel-name'>
                <h3>Mt</h3>
                <p>291 B abone</p>
              </div>
              <Button className='subscribe-button'>Subscribe</Button>
            </div>
            <div className='like-unlike-share'>
              <Button className='like-button' icon={<LikeIcon />}>
                1,4B
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
              <h2>50 Yorum</h2>
              <Button type="text" icon={<MenuIcon />}>Sorting Measure</Button>
            </div>
            <div className='comment-write'>
              <img src={ProfilPhoto} alt="" />
              <Input className='comment-input' placeholder="Add Comment" />
            </div>
          </div>
          <CommentCard />
        </div>
      </div>

      <div className='nex-video'>
        <VideoDetailCard />
      </div>
    </div>
  )
}

export default Detail
