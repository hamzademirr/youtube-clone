import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar';
import { SidebarProvider } from './Context/SidebarContext';
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
      <ThemeProvider>
        <SidebarProvider>
          <Router>
            <Routes>
              <Route path='/' element={<NavBar />} />
            </Routes>
          </Router>
        </SidebarProvider>
      </ThemeProvider>
  )
}

export default App
