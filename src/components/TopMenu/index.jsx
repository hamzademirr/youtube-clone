import React from "react";
import { Button } from "antd";
import { useTheme } from "../../context/ThemeContext";
import "./style.scss";

function TopMenu() {
  const { theme } = useTheme();
  return (
    <>
      <div>
        <div className={theme ? "dark top-menu" : "light top-menu"}>
          <Button type="link" shape="round">
            All
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
            Series
          </Button>
          <Button type="link" shape="round">
            Football
          </Button>
          <Button type="link" shape="round">
            Latest Uploads
          </Button>
        </div>
      </div>
    </>
  );
}

export default TopMenu;
