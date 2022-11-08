import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/loginpage/Login';
import Main from './component/mainpage/Main';
import MainSearch from './component/searchpage/MainSearch';
import { useSelector } from 'react-redux';


function App() {

  const searchStock = useSelector(state => state.inputData.content);

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail/:id" element={<MainSearch searchStock={searchStock}></MainSearch>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
