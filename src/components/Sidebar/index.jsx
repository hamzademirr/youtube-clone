import React from 'react';
import { Menu } from 'antd';

import { useSidebar } from '../../context/SidebarContext/index.jsx';
import { useTheme } from "../../context/ThemeContext/index.jsx";

import HomeIcon from "../../assets/Sidebar/Home.jsx";
import Shorts from "../../assets/Sidebar/Shorts.jsx";
import Subscriptions from "../../assets/Sidebar/Subscriptions.jsx";
import Library from "../../assets/Sidebar/Library.jsx";
import History from "../../assets/Sidebar/History.jsx";
import YourVideos from "../../assets/Sidebar/YourVideos.jsx";
import WatchLater from "../../assets/Sidebar/WatchLater.jsx";
import LikedVideos from "../../assets/Sidebar/LikedVideos.jsx";
import userPhoto2 from '../../assets/Sidebar/user-photo/User-Avatar2.png'
import userPhoto3 from '../../assets/Sidebar/user-photo/User-Avatar3.png'
import userPhoto4 from '../../assets/Sidebar/user-photo/User-Avatar4.png'
import userPhoto5 from '../../assets/Sidebar/user-photo/User-Avatar5.png'
import userPhoto6 from '../../assets/Sidebar/user-photo/User-Avatar6.png'
import userPhoto7 from '../../assets/Sidebar/user-photo/User-Avatar7.png'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', '1', <span><HomeIcon /></span>),
  getItem('Shorts', '2', <span><Shorts /></span>),
  getItem('Subscriptions', '3', <span><Subscriptions /></span>),
  {
    type: 'divider',
  },
  getItem('Library', '4', <span><Library /></span>),
  getItem('History', '5', <span><History /></span>),
  getItem('Your Videos', '6', <span><YourVideos /></span>),
  getItem('Watch Later', '7', <span><WatchLater /></span>),
  getItem('Liked Videos', '8', <span><LikedVideos /></span>),
  {
    type: 'divider',
  },
  getItem('Subscriptions', 'b1', null, [
    getItem('John Doe', '9', <img src={userPhoto2} />),
    getItem('Jane Smith', '10', <img src={userPhoto3} />),
    getItem('Michael Johnson', '11', <img src={userPhoto4} />),
    getItem('Emily Davis', '12', <img src={userPhoto5} />),
    getItem('David Wilson', '13', <img src={userPhoto6} />),
    getItem('Sarah Thompson', '14', <img src={userPhoto7} />),], 'group')
];

function Sidebar() {
  const { theme } = useTheme();
  const { collapsed, toggleCollapsed } = useSidebar();
  return (
    <>
      <div className={theme ? 'dark side-bar' : 'light side-bar'}>
        <Menu
          className={collapsed ? 'is-sidebar2' : 'is-sidebar'}
          defaultSelectedKeys={['1']}
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </>
  );
};
export default Sidebar;
