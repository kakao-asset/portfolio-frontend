import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/loginpage/Login';
import Main from './component/mainpage/Main';
import MainSearch from './component/searchpage/MainSearch';
import KakaoOauth from './component/loginpage/KakaoOauth';
import AdminPage from './component/mainpage/AdminPage';
import TestPage from './component/TestPage';
// import SearchStore from './store/SearchStore';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    {/* <SearchStore> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<MainSearch/>}/>
        <Route path="/oauth/kakao" element={<KakaoOauth/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/test" element={<TestPage></TestPage>}></Route>
      </Routes>
    {/* </SearchStore> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
