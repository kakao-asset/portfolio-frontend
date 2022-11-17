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
        symbolCode: "",
        sectorName: "",
    }]);
    
    var resStockData =[]; 
    var resData;
    var tmp;
    var userId = JSON.parse(localStorage.getItem("userData")).userId;
    
    const [budgetData, setBudgetData] = useState([]);

    function getRealtimeData(stock_data){
        // 현재 보유 종목에 대한 모든 실시간 데이터 수집
        for(let i = 0; i < resStockData.length; i++){
            axios({
                method: "get",
                url: `${process.env.REACT_APP_BACKEND_URI}/main/realtime/?stock_name=${stock_data[i]['symbolCode']}`,
                headers: {"Access-Control-Allow-Origin": "*"},
                responseEncoding: 'binary'
            })
            .then((res) => {
                var result = res.data;
                
                var len = result.length == 0 ? 0 : result.length-1;
                var data = result[len].tradePrice;
    
                stock_data[i]['currentPrice'] = data
                stock_data[i]['time'] = new Date();
                
                
            }).catch((err) => {
                console.log("데이터 받아오기 에러", err);
            })
        }
        console.log(budgetData);
        setBudgetData(stock_data)
    }

    const test = async () => await axios({
            method: "GET",
            url: `${process.env.REACT_APP_BACKEND_URI}/api/stock/${userId}`
        })
        .then((res) => {
            resData = res.data.data;
            resStockData = resData.map((x) => ({name: x.stockName, value: x.quantity, avgPrice: x.avgPrice, symbolCode: x.stockCode, sectorCode: x.sectorCode, sectorName: x.sectorName}));
            setStockHold(resStockData);

            getRealtimeData(resStockData);
            const interval = setInterval(()=>{
                getRealtimeData(resStockData);
            }, 5000)
            
            
        }).catch((err) => {
            console.log("use_stock 데이터 에러", err);
        })

    useEffect(() => {
        test();
    }, []);
    

    return (
        <div>
            <Header></Header>
            <MainPortfolio stockHold={stockHold} budgetData={budgetData}></MainPortfolio>
            
        </div>
    );
    
}