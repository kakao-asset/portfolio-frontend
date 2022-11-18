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
    var userId = JSON.parse(localStorage.getItem("userData")).userId;
    
    const [budgetData, setBudgetData] = useState([]);
    const [profit, setProfit] = useState([]);

    function getRealtimeData(stock_data){
        var tmp = stock_data;
        // 현재 보유 종목에 대한 모든 실시간 데이터 수집
        for(let i = 0; i < resStockData.length; i++){
            axios({
                method: "get",
                url: `/main/realtime/?stock_name=${tmp[i]['symbolCode']}`,
                headers: {"Access-Control-Allow-Origin": "*"},
                responseEncoding: 'binary'
            })
            .then((res) => {
                var result = res.data;
                
                var len = result.length == 0 ? 0 : result.length-1;
                var data = result[len].tradePrice;
                tmp[i]['currentPrice'] = data

                var updateData = {[tmp[i]['name']] : result}
                var target = Object.assign(profit, updateData)
                setProfit(target)
                
            }).catch((err) => {
                console.log("데이터 받아오기 에러", err);
            })
        }

        setBudgetData(tmp)
    }

    const test = async () => await axios({
            method: "GET",
            url: `/api/stock/${userId}`
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
            <MainPortfolio stockHold={stockHold} budgetData={budgetData} profit={profit}></MainPortfolio>
            
        </div>
    );
    
}