import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/loginpage/Login';
import Main from './component/mainpage/Main';
import MainSearch from './component/searchpage/MainSearch';
import KakaoOauth from './component/loginpage/KakaoOauth';
import AdminPage from './component/mainpage/AdminPage';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<MainSearch/>}/>
        <Route path="/oauth/kakao" element={<KakaoOauth/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
