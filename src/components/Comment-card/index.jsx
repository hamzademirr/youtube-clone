import { Button, Card } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.scss'

import Comment from '../../components/Comment-data';

import CommentPhoto from "../../assets/Home/channel-profile.jpg";
import LikeIcon from "../../assets/VideoDetail/Like.jsx";
import DisLikeIcon from "../../assets/VideoDetail/DisLike.jsx";

function CommentCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await Comment();
      setCommentData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && commentData.map((comment) => (
        <Card key={comment.id} className='comment-card-template'>
          <div className='photo'>
            <img src={comment.profileImage} alt={comment.title} />
          </div>
          <div className='comment-info'>
            <h3>{comment.title} <span>{comment.date}</span></h3>
            <p>{comment.comment}</p>
            <div className='like-dislike-button'>
              <Button className='like-button' icon={<LikeIcon />}>{comment.like}</Button>
              <Button className='dislike-button' icon={<DisLikeIcon />} />
              <p>Answer</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

export default CommentCard
