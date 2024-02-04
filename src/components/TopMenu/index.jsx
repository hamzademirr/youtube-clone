import React from 'react'
import { Button } from 'antd'
import { useTheme } from "../../context/ThemeContext";
import { useSidebar } from "../../context/SidebarContext";
import './style.scss'
import { Outlet } from 'react-router-dom';
import Home from "../../routes/Home"

function TopMenu() {
  const { theme } = useTheme();
  const { collapsed } = useSidebar();
  return (
    <>
      <div>
        <div className={theme ? 'dark top-menu' : 'light top-menu'} >
          <Button type="link" shape="round">
            Tümü
          </Button>
          <Button type="link" shape="round">
            Music
          </Button>
          <Button type="link" shape="round">
            Sitcoms
          </Button>
          <Button type="link" shape="round">
            Live
          </Button>
          <Button type="link" shape="round">
            diziler
          </Button>
          <Button type="link" shape="round">
            footbal
          </Button>
          <Button type="link" shape="round">
            son yuklenenler
          </Button>
        </div>
      </div>
    </>
  )
}

export default TopMenu
