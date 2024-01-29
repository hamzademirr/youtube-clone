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
        <Row gutter={[16, 16]} justify='center'>
          <Col span={6}><Card /></Col>
          <Col span={6}><Card /></Col>
          <Col span={6}><Card /></Col>
          <Col span={6}><Card /></Col>
          <Col span={6}><Card /></Col>
          <Col span={6}><Card /></Col>
          <Col span={6}><Card /></Col>
          <Col span={6}><Card /></Col>
        </Row>
      </div>
    </>
  )
}

export default Home