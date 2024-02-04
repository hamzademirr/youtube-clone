import { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const values = {
    collapsed,
    toggleCollapsed
  }

  return <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => useContext(SidebarContext);
