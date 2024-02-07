import React, { useState } from 'react';
import { Button, Input, Dropdown, Space } from "antd";
import { useSidebar } from '../../context/SidebarContext/index.jsx';
import { useTheme } from "../../context/ThemeContext/index.jsx";

import './style.scss';
import "../TopMenu/style.scss";

import youtubeLogo from "../../assets/Navbar/Youtube_logo.svg";
import youtubeLogoLight from "../../assets/Navbar/Youtube_logo_light.svg";
import Create from "../../assets/Navbar/Create.jsx";
import Menu from "../../assets/Navbar/Menu.jsx";
import Mic from "../../assets/Navbar/Mic.jsx";
import SearchIcon from "../../assets/Navbar/Search.jsx";
import Notifications from "../../assets/Navbar/Notifications.jsx";
import userPhoto from "../../assets/Navbar/user_photo.jpeg";
import { Outlet, useNavigate } from 'react-router-dom';

function NavBar() {
  const { toggleCollapsed, collapsed } = useSidebar();
  const { themeChancge, theme } = useTheme();

  const [serachText, setSerchText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log(serachText);
    event.preventDefault();
    navigate(`/search?q=${serachText}`);
  }

  const items = [
    {
      label: <Button type='text' onClick={themeChancge}>Theme Chanche</Button>,
      key: '0',
    },
  ];

  return (
    <>
      <navbar className={theme ? 'dark' : 'light'}>
        <div className='leftItem'>
          <Button className='menu-button' type='text' onClick={toggleCollapsed}><Menu /></Button>
          <img src={theme ? youtubeLogo : youtubeLogoLight} className='youtubeLogo' />
        </div>

        <div className='middleItem'>
          <form className='search-form' onSubmit={handleSubmit}>
            <Input className='Search-Input' name='serach' onChange={event => setSerchText(event.target.value)} placeholder="Ara" />
            <Button className='Search-Button' htmlType="submit" icon={<SearchIcon />} />
          </form>
          <Button className='micButton' shape="circle" icon={<Mic />} />
        </div>

        <div className='rightItem'>
          <div>
            <Create />
          </div>
          <div>
            <Notifications />
          </div>
          <div className='user'>
            <Dropdown overlayClassName={theme ? 'is-dark-theme is-user-drop-menu' : 'is-light-theme is-user-drop-menu'}
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src={userPhoto} className='userPhoto' />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </navbar >
      <Outlet />
    </>
  )
}

export default NavBar
