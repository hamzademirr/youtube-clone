import React, { useState } from 'react';
import { Menu } from 'antd';

import { useSidebar } from '../../Context/SidebarContext';

import Home from "../../assets/Sidebar/Home.jsx";
import Explore from "../../assets/Sidebar/Explore.jsx";
import Subscriptions from "../../assets/Sidebar/Subscriptions.jsx";
import Library from "../../assets/Sidebar/Library.jsx";
import History from "../../assets/Sidebar/History.jsx";
import YourVideos from "../../assets/Sidebar/YourVideos.jsx";
import WatchLater from "../../assets/Sidebar/WatchLater.jsx";
import LikedVideos from "../../assets/Sidebar/LikedVideos.jsx";
import MenuIcon from "../../assets/Navbar/Menu.jsx";
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
    getItem('Home', '1', <span><Home /></span>),
    getItem('Explore', '2', <span><Explore /></span>),
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
    getItem('SUBSCRIPTIONS', 'b1', null, [
        getItem('James Gouse', '9', <img src={userPhoto2} />), 
        getItem('James Gouse', '10', <img src={userPhoto3} />),
        getItem('James Gouse', '11', <img src={userPhoto4} />),
        getItem('James Gouse', '12', <img src={userPhoto5} />),
        getItem('James Gouse', '13', <img src={userPhoto6} />),
        getItem('James Gouse', '14', <img src={userPhoto7} />),], 'group')
];
function Sidebar() {
    const { collapsed, toggleCollapsed } = useSidebar();
    return (
        <div className='scrol-bar'
            style={{
                width: collapsed ? 80 : 224,
            }}
        >
            <Menu
                className={collapsed ? 'is-sidebar2' : 'is-sidebar'}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default Sidebar;