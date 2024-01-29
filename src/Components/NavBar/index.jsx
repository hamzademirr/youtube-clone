import React from 'react';
import { Button, Input, Dropdown, Space } from "antd";
import { useSidebar } from '../../Context/SidebarContext';
import { useTheme } from "../../Context/ThemeContext";

import './style.scss';
import "../TopMenu/style.scss";

import youtubeLogo from "../../assets/Navbar/Youtube_logo.svg";
import youtubeLogoLight from "../../assets/Navbar/Youtube_logo_light.svg";
import Apps from "../../assets/Navbar/Apps.jsx";
import Create from "../../assets/Navbar/Create.jsx";
import Menu from "../../assets/Navbar/Menu.jsx";
import Mic from "../../assets/Navbar/Mic.jsx";
import Notifications from "../../assets/Navbar/Notifications.jsx";
import userPhoto from "../../assets/Navbar/user_photo.jpeg";
import { Outlet } from 'react-router-dom';

const { Search } = Input;

function NavBar() {
    const { toggleCollapsed, collapsed } = useSidebar();
    const { themeChancge, theme } = useTheme();

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
                    <Button type='text' onClick={toggleCollapsed}><Menu /></Button>
                    <img src={theme ? youtubeLogo : youtubeLogoLight} className='youtubeLogo' />
                </div>

                <div className='middleItem'>
                    <Search className='Search-Input' placeholder="Search" onSearch={() => { }} />
                    <Button className='micButton' shape="circle" icon={<Mic />} />
                </div>

                <div className='rightItem'>
                    <div>
                        <Create />
                    </div>
                    <div>
                        <Apps />
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
