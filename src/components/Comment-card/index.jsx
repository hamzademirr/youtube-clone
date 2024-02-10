import { Button, Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { useTheme } from "../../context/ThemeContext/index.jsx";
import './style.scss'

import Comment from '../../components/Comment-data';

import LikeIcon from "../../assets/VideoDetail/Like.jsx";
import DisLikeIcon from "../../assets/VideoDetail/DisLike.jsx";

function CommentCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [commentData, setCommentData] = useState([]);
  const { theme } = useTheme();

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
        <Card key={comment.id} className={theme ? 'comment-card-template dark' : 'comment-card-template light'}>
          <div className='photo'>
            <img src={comment.profileImage} alt={comment.title} />
          </div>
          <div className='comment-info'>
            <h3>{comment.userName} <span>{comment.date}</span></h3>
            <p>{comment.comment}</p>
            <div className='like-dislike-button'>
              <Button className='like-button' icon={<LikeIcon />}>{comment.like}</Button>
              <Button className='dislike-button' icon={<DisLikeIcon />} />
              <Button type='link'>Answer</Button>
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

export default CommentCard
