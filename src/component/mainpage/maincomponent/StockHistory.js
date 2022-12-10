import styles from "./css/Stockhistory.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import HistoryRow from "./row/HistoryRow";

export default function StockHistory() {
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    const [stockHistory, setStockHistory] = useState([]);

    function getStockHistory() {
        axios({
            method: "get",
            url: `/api/stock/history/${userId}`,
        })
            .then((res) => {
                var resData = res.data.data;
                var result = resData.sort(function (a, b) {
                    var dateA = (new Date(a.tradeDate + " " + a.tradeTime + ":00"));
                    var dateB = (new Date(b.tradeDate + " " + b.tradeTime + ":00"));
                    return dateB - dateA;
                })
                setStockHistory(result);
            }).catch((err) => {
            })
    }

    useEffect(() => {
        getStockHistory();
    }, []);

    return (
        <div className={styles.box} style={{ overflow: 'auto' }}>
            <div style={{ marginTop: '1rem' }}>
                {stockHistory.map((history) => (<HistoryRow history={history}></HistoryRow>))}
            </div>
        </div>
    );
};
