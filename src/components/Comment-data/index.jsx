import React from 'react'

function CommentData() {

  const CommentData = [
    {
      id: 1,
      userName: '@JohnDoe',
      date: '6 days ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'Great video!'
    },
    {
      id: 2,
      userName: '@JaneSmith',
      date: '5 days ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'Awesome content!'
    },
    {
      id: 3,
      userName: '@MichaelJohnson',
      date: '4 days ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'Really helpful tutorial!'
    },
    {
      id: 4,
      userName: '@EmilyDavis',
      date: '3 days ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'I learned a lot, thanks!'
    },
    {
      id: 5,
      userName: '@DanielWilson',
      date: '2 days ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'This video is amazing!'
    },
    {
      id: 6,
      userName: '@OliviaTaylor',
      date: '1 day ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'Keep up the good work!'
    },
    {
      id: 7,
      userName: '@JamesAnderson',
      date: '12 hours ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'I really enjoyed this video!'
    },
    {
      id: 8,
      userName: '@SophiaMartinez',
      date: '6 hours ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'Thanks for sharing!'
    },
    {
      id: 9,
      userName: '@BenjaminThompson',
      date: '1 hour ago',
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      like: `${Math.floor(Math.random() * 1000)}`,
      comment: 'I really appreciate this video!'
    }
  ]
  return CommentData;
}

export default CommentData
