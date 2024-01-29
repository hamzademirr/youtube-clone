import React from 'react'
import { Button } from 'antd'
import { useTheme } from "../../Context/ThemeContext";
import { useSidebar } from "../../Context/SidebarContext";
import './style.scss'
import { Outlet } from 'react-router-dom';
import Home from '../Home';


function TopMenu() {
  const { theme } = useTheme();
  const { collapsed } = useSidebar();
  return (
    <>
      <div style={{ width: collapsed ? `calc(100% - 80px)` : 'calc(100% - 224px)' }}>
        <div className={theme ? 'dark top-menu' : 'light top-menu'} >
          <Button type="link" shape="round">
            All
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
          <Button type="link" shape="round">
            Item
          </Button>
        </div>
        <Home />
      </div>
      <Outlet />
    </>
  )
}

export default TopMenu