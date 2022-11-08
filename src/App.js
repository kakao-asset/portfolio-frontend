import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/loginpage/Login';
import Main from './component/mainpage/Main';
import MainSearch from './component/searchpage/MainSearch';
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';

function App() {

  const mapStateToProps = state => {
    return {
      searchData : state.searchData,
    };
  };

  const SearchPage = ({ searchData })=>{
    const [search, setSearhTarget] = useState([]);

    useEffect(()=>{
      if (searchData.length !== 0){
        setSearhTarget(searchData);
      }
    }
    )
  }

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/detail/:id" element={<MainSearch searchStock={searchStock}></MainSearch>} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
