import styles from './css/Info.module.css'
import InfoContent from './InfoContent';
import InfoHeader from './InfoHeader';
import InfoLineGraph from './InfoLineGraph';
import InfoList from './InfoList';
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

// 현재는 임시 데이터 목록에서 searchStock의 종목코드(symbolCode)와 같은 값 찾아서 해당 정보를 Info 컴포넌트들에게 전달하고 있음
// 서버 통신 시, api 서버에다가 searchStock의 종목코드를 쿼리로 날려서 실시간 데이터를 받아와서 전달해 주어야 함

export default function Info({stockHold}){
    // 로컬 스토리지에 저장되어 있는 searchStock 데이터 가져옴
    var searchStock = localStorage.getItem('searchStock');
    const detailStock = JSON.parse(searchStock);
    // ----------------서버에 요청--------------------
    // detailStock.searchTarget.symbolCode 로 쿼리 날리고 해당하는 정보 받아오기

    const stockSymbolCode = detailStock.searchTarget.symbolCode;

    const[current, setCurrent] = useState({});

    function getRealtimeData(){
        axios({
            method: "get",
            url: `/main/realtime/?stock_name=${stockSymbolCode}`,
            headers: {"Access-Control-Allow-Origin": "*"},
            responseEncoding: 'binary'
        })
        .then((res) => {
            var result = res.data;
            console.log(result)
            var len = result.length == 0? 0 : result.length-1;
            var data = result[len];
            setCurrent(data)
        }).catch((err) => {
            console.log("데이터 받아오기 에러", err);
        })
    }

    useEffect( () => {
        getRealtimeData();
        const interval = setInterval(()=>{
            getRealtimeData();
        }, 50000)
    },[stockSymbolCode])

    console.log("curr: ", current);
    

    return(
        <div style={{marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem', textAlign: 'left', paddingBottom: '50px'}}>
            <div className={styles.box}>
                <div style={{display: 'flex'}}>
                    <InfoHeader stockInfo={current}></InfoHeader>
                </div>
                    <InfoContent budget={stockHold} stockInfo={current}></InfoContent>
                    <InfoLineGraph></InfoLineGraph>
                    <InfoList stockInfo={current}></InfoList>
            </div>
        </div>        
    );
}