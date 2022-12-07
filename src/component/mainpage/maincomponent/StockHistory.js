import styles from "./css/Stockhistory.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import HistoryRow from "./row/HistoryRow";

export default function StockHistory() {
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    const [stockHistory, setStockHistory] = useState([]);

//     const dummy = [
//     {
//         stockName: "삼성",
//         tradeType: "true",
//         tradeDate: "2022-12-07",
//         tradeTime: "12:00",
//         price: "60000",
//         quantity: "2"
//     },
//     {
//         stockName: "삼성",
//         tradeType: "false",
//         tradeDate: "2022-12-09",
//         tradeTime: "09:00",
//         price: "60000",
//         quantity: "1"
//     },
//     {
//         stockName: "삼성",
//         tradeType: "true",
//         tradeDate: "2022-12-08",
//         tradeTime: "11:00",
//         price: "60000",
//         quantity: "3"
//     },
//     {
//         stockName: "삼성",
//         tradeType: "true",
//         tradeDate: "2022-12-07",
//         tradeTime: "09:00",
//         price: "60000",
//         quantity: "2"
//     },
//     {
//         stockName: "카카오",
//         tradeType: "false",
//         tradeDate: "2022-12-06",
//         tradeTime: "09:00",
//         price: "60000",
//         quantity: "1"
//     },
// ];



    // const result2 = dummy.sort(function (a,b){
    //     var dateA = (new Date(a.tradeDate+" "+a.tradeTime+":00"));
    //     var dateB = (new Date(b.tradeDate+" "+b.tradeTime+":00"));
    //     return dateA - dateB;
    // })

    // console.log(result2);

// useEffect(() => {
//     setStockHistory(result2);
// }, []);

function getStockHistory(){
    axios({
        method: "get",
        url: `/api/stock/history/${userId}`,
    })
    .then((res) => {            
        var resData = res.data.data;
        console.log(resData);
        var result = resData.sort(function (a,b){
            var dateA = (new Date(a.tradeDate+" "+a.tradeTime+":00"));
            var dateB = (new Date(b.tradeDate+" "+b.tradeTime+":00"));
            return dateA - dateB;
        })
        console.log(result);
        setStockHistory(result);
    }).catch((err) => {
        console.log("stock_history 받아오기 에러", err);
    })
}

useEffect(() => {
    getStockHistory();
}, []);

    return (
        <div className={styles.box} style={{overflow: 'auto'}}>
            <div style={{marginTop: '1rem'}}>
            {stockHistory.map((history) => (<HistoryRow history={history}></HistoryRow>))}
            </div>
        </div>
    );
};
