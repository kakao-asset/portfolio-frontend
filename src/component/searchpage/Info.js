import styles from './css/Info.module.css'
import InfoContent from './InfoContent';
import InfoHeader from './InfoHeader';
import InfoList from './InfoList';
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import LineChart from '../mainpage/maincomponent/chart/LineChart';

export default function Info({ current }) {

    const [stockHold, setStockHold] = useState([{
        name: "",
        value: "",
        avgPrice: "",
        symbolCode: "",
        stockCode: "",
    }]);

    var resStockData; var resData;
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    function getStockHold() {
        axios({
            method: "GET",
            url: `/api/stock/${userId}`
        })
            .then((res) => {
                resData = res.data.data;
                resStockData = resData.map((x) => ({ name: x.stockName, value: x.quantity, avgPrice: x.avgPrice, symbolCode: x.stockCode, sectorCode: x.sectorCode }));
                setStockHold(resStockData);
            }).catch((err) => {
            })
    }

    useEffect(() => {
        getStockHold();
    }, [userId]);



    return (
        <div style={{ marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem', textAlign: 'left', paddingBottom: '50px' }}>
            <div className={styles.box}>
                <div style={{ display: 'flex' }}>
                    <InfoHeader stockInfo={current}></InfoHeader>
                </div>
                <InfoContent budget={stockHold} stockInfo={current}></InfoContent>
                <LineChart></LineChart>
                <InfoList stockInfo={current}></InfoList>
            </div>
        </div>
    );
}