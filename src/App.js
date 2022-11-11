import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/loginpage/Login';
import Main from './component/mainpage/Main';
import MainSearch from './component/searchpage/MainSearch';
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import KakaoOauth from './component/loginpage/KakaoOauth';
// import Test from './component/loginpage/Test';

function App() {



  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<MainSearch/>}/>
        <Route path="/oauth/kakao" element={<KakaoOauth/>}/>
        {/* <Route path="/test" element={<Test/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
