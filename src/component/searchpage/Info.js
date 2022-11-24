import styles from './css/Info.module.css'
import InfoContent from './InfoContent';
import InfoHeader from './InfoHeader';
import InfoLineGraph from './InfoLineGraph';
import InfoList from './InfoList';
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import LineChart from '../mainpage/maincomponent/chart/LineChart';
// 현재는 임시 데이터 목록에서 searchStock의 종목코드(symbolCode)와 같은 값 찾아서 해당 정보를 Info 컴포넌트들에게 전달하고 있음
// 서버 통신 시, api 서버에다가 searchStock의 종목코드를 쿼리로 날려서 실시간 데이터를 받아와서 전달해 주어야 함

export default function Info({current}){

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
            url: `/api/stock/${userId}`
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


 
    return(
        <div style={{marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem', textAlign: 'left', paddingBottom: '50px'}}>
            <div className={styles.box}>
                <div style={{display: 'flex'}}>
                    <InfoHeader stockInfo={current}></InfoHeader>
                </div>
                    <InfoContent budget={stockHold} stockInfo={current}></InfoContent>
                    {/* <InfoLineGraph></InfoLineGraph> */}
                    <LineChart></LineChart>
                    <InfoList stockInfo={current}></InfoList>
            </div>
        </div>        
    );
}