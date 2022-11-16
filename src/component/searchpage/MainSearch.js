import Header from "../mainpage/header/Header";
import Info from "./Info";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainSearch(){
    
    const [stockHold, setStockHold] = useState([{
        name: "",
        value: "",
        avgPrice: "",
        symbolCode: "",
        stockCode: "",
    }]);
    
    var resStockData; var resData;
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    function getStockHold(){
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_BACKEND_URI}/api/stock/${userId}`
        })
        .then((res) => {
            resData = res.data.data;
            console.log("resData", resData);
            resStockData = resData.map((x) => ({name: x.stockName, value: x.quantity, avgPrice: x.avgPrice, symbolCode: x.stockCode, sectorCode: x.sectorCode}));
            setStockHold(resStockData);
            console.log("stockHold", stockHold);
        }).catch((err) => {
            console.log("use_stock 데이터 에러", err);
        })
    }
    
    useEffect(() => {
        getStockHold();
    }, [userId]);
    
    return (
        <div>          
            <Header></Header>
            <Info stockHold={stockHold}></Info>
        </div>
    );
}