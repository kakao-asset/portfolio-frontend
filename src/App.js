import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/loginpage/Login';
import Main from './component/mainpage/Main';
import MainSearch from './component/searchpage/MainSearch';
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';

function App() {



  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<MainSearch/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
