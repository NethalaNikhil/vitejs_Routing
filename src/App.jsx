import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/NavBar';
import SideNav from './components/SideBar';
import Body from './Body';
import Login from './Login';
import Page from './pageNotFound';

function App() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/Login';
  return (
    <>
      {!isLoginRoute && <Nav />}
      <div className="flex">
        {!isLoginRoute && <SideNav />}
        <div className="flex-1">
          <Routes>
            <Route path="/:buttonclicked" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
