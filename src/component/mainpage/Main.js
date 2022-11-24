import Header from "./header/Header";
import MainPortfolio from "./MainPortfolio";
import axios from "axios";
import { useEffect, useState } from "react";
import MainEmpty from "./MainEmpty";

export default function Main() {
    const [stockHold, setStockHold] = useState([{
        name: "",
        value: "",
        avgPrice: "",
        sectorCode: "",
        symbolCode: "",
        sectorName: "",
    }]);

    const [stockHistory, setStockHistory] = useState([{
        name: "",
        tradeType: "",          // 1이 매수, 0이 매도 
        tradeDate: "",
        tradeTime: "",
        price: "",
        quantity: "",
    }])
    
    const [stockHoldisFill, setStockHoldisFill] = useState(false);

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
            resStockData = resData.map((x) => ({
                name: x.stockName, 
                value: x.quantity, 
                avgPrice: x.avgPrice, 
                symbolCode: x.stockCode, 
                sectorCode: x.sectorCode, 
                sectorName: x.sectorName}));
            setStockHold(resStockData);

            getRealtimeData(resStockData);
            const interval = setInterval(()=>{
                getRealtimeData(resStockData);
            }, 5000)

            console.log(stockHold);

            if (resStockData.length > 0) {
                if (resStockData[0].name != "") 
                     setStockHoldisFill(true);
            } else (setStockHoldisFill(false));
            
            
        }).catch((err) => {
            console.log("use_stock 데이터 에러", err);
        })

    useEffect(() => {
        test();
    }, []);
    

    const getStockHistory = async () => await axios({
        method: "GET",
        url: `/api/stock-history/${userId}`
    })
    .then((res) => {
        resData = res.data.data;
        resStockData = resData.map((x) => ({
            name: x.stockName, 
            quantity: x.quantity, 
            price: x.price, 
            tradeType: x.tradeType, 
            tradeDate: x.tradeDate, 
            tradeTime: x.tradeTime}));
        setStockHistory(resStockData);

        console.log(stockHistory);
        
    }).catch((err) => {
        console.log("use_stock 데이터 에러", err);
    })

useEffect(() => {
    getStockHistory();
}, []);


    return (
        <div text-align="center">
            <div style={{display: 'inline-block'}}>
            <Header></Header>
            {console.log(stockHistory)}
            {stockHoldisFill? <MainPortfolio stockHold={stockHold} budgetData={budgetData} profit={profit} stockHistory={stockHistory}></MainPortfolio> : <MainEmpty></MainEmpty>}
            {/* <MainPortfolio stockHold={stockHold} budgetData={budgetData} profit={profit}></MainPortfolio> */}
            </div>
        </div>
    );
    
}