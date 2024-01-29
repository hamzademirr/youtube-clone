import React from 'react'
import { Col, Row } from 'antd';
import { useTheme } from "../../Context/ThemeContext";

import Card from "../Card";

import './style.scss'



function Home() {
  const { theme } = useTheme();
  return (
    <>
      <div className={theme ? 'dark item' : 'light item'}>
        <div className='grid-container'>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
          <div className='grid-item'><Card /></div>
        </div>
      </div>
    </>
  )
}

export default Home