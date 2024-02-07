import { Button, Card } from 'antd'
import React from 'react'
import './style.scss'

import CommentPhoto from "../../assets/Home/channel-profile.jpg";
import LikeIcon from "../../assets/VideoDetail/Like.jsx";
import DisLikeIcon from "../../assets/VideoDetail/DisLike.jsx";

function CommentCard() {
  return (
    <Card className='comment-card-template'>
      <div className='photo'>
        <img src={CommentPhoto} alt="" />
      </div>
      <div className='comment-info'>
        <h3>@GökOğuz <span>1 yıl önce</span></h3>
        <p>Tanrı Türkü Korusun...</p>
        <div className='like-dislike-button'>
          <Button className='like-button' icon={<LikeIcon />}>53</Button>
          <Button className='dislike-button' icon={<DisLikeIcon />} />
          <p>Answer</p>
        </div>
      </div>
    </Card>
  )
}

export default CommentCard
