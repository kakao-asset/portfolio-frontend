import Header from "./header/Header";
import MainPortfolio from "./MainPortfolio";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main() {
    const [stockHold, setStockHold] = useState([{
        name: "",
        value: "",
        avgPrice: "",
        sectorCode: "",
        symbolCode: ""
    }]);
    
    var resStockData; var resData;
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    const test = async () => await axios({
            method: "GET",
            url: `http://localhost:8080/api/stock/${userId}`
        })
        .then((res) => {
            resData = res.data.data;
            resStockData = resData.map((x) => ({name: x.stockName, value: x.quantity, avgPrice: x.avgPrice, symbolCode: x.stockCode, sectorCode: x.sectorCode}));
            setStockHold(resStockData);
        }).catch((err) => {
            console.log("use_stock 데이터 에러", err);
        })

    useEffect(() => {
        test();
    }, []);
    
    return (
        <div>
            <Header></Header>
            <MainPortfolio stockHold={stockHold}></MainPortfolio>
            
        </div>
    );
    
}