import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import { SidebarProvider } from "./context/SidebarContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TopMenu from './components/TopMenu';
import Sidebar from './components/Sidebar';
import Home from './routes/Home';
import LayoutWithOutTopMenu from "./layouts/WithOutTopMenu";
import LayoutWithTopMenu from "./layouts/WithTopMenu";
import Search from './routes/Search';
import Detail from './routes/Detail';

function App() {
  const { theme } = useTheme();
  return (
      <SidebarProvider>
        <Router>
          <div>
            <NavBar />
            <div className='site-wrapper'>
              <Sidebar />
              <div className={theme ? 'dark routes-wraper' : 'light routes-wraper'}>
                <Routes>
                  <Route path="/" element={<LayoutWithTopMenu />}>
                    <Route index element={<Home />} />
                    <Route path='search' element={<Search />} />
                    {/* <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoMatch />} /> */}
                  </Route>
                  <Route path="/" element={<LayoutWithOutTopMenu />}>
                    <Route path='detail' element={<Detail />} />
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </SidebarProvider>
  )
}

export default App
