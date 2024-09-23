import React from 'react';
import Nav from './components/NavBar';
import SideNav from './components/SideBar';
import Body from './Body';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Nav />
      <div className="flex">
        <SideNav />
        <div className="flex-1">
          <Routes>
          <Route path="/:buttonclicked" element={<Body />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
