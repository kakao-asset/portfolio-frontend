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

    const test = async () => await axios({
            method: "GET",
            url: `http://localhost:8080/api/stock/${userId}`
        })
        .then((res) => {
            resData = res.data.data;
            resStockData = resData.map((x) => ({name: x.stockCode, value: x.quantity, avgPrice: x.avgPrice}));
            setStockHold(resStockData);
        }).catch((err) => {
            console.log("use_stock 데이터 에러", err);
        })

    useEffect(() => {
        test();
    }, []);
    
    return (       
        <div>            
            <Header>
            </Header>
            <Info stockHold={stockHold}>
            </Info>
        </div>
    );
}