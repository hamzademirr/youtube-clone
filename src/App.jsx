import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar';
import { SidebarProvider } from './Context/SidebarContext';
import { ThemeProvider } from "./Context/ThemeContext";
import TopMenu from './Components/TopMenu';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <div>
            <NavBar />
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <TopMenu />
            </div>
              <Routes>
                
              </Routes>
          </div>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
