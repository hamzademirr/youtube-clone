import React from 'react'

function VideoData() {
  const videoData = [
    {
      id: 1,
      title: 'Become a Web Developer in 10 minutes',
      views: '34562',
      date: '6 days ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
      description: 'This is a video description'
    },
    {
      id: 2,
      title: 'Fixed error in React',
      views: '1000',
      date: '12 days ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    },
    {
      id: 3,
      title: 'Phone unboxing',
      views: '1,000,000 views',
      date: '9 days ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    },
    {
      id: 4,
      title: 'Laptop unboxing',
      views: '1,000,000 views',
      date: '20 days ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    },
    {
      id: 5,
      title: 'Upgrade phone',
      views: '1,000,000 views',
      date: '11 days ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    },
    {
      id: 6,
      title: 'Make a website in 10 minutes',
      views: '1,000,000 views',
      date: '65 days ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    },
    {
      id: 7,
      title: 'Solve router problem in 10 minutes',
      views: '1,000,000 views',
      date: '1 years ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    },
    {
      id: 8,
      title: 'Draw a picture in 10 minutes',
      views: '1,000,000 views',
      date: '1 days ago',
      channel: 'Clever Programmer',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    },
    {
      id: 9,
      title: 'Cook a meal in 10 minutes',
      views: '1,000,000 views',
      date: '3 days ago',
      channel: 'Clever Cooker',
      videImage: `https://picsum.photos/360/202?random=${Math.random()}`,
      profileImage: `https://picsum.photos/68/68?random=${Math.random()}`,
    }
  ]
  return videoData;
}

export default VideoData
