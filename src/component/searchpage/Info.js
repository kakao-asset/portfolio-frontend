import styles from './css/Info.module.css'
import InfoContent from './InfoContent';
import InfoHeader from './InfoHeader';
import InfoLineGraph from './InfoLineGraph';
import InfoList from './InfoList';
import {TestStockData} from '../../data/TestStockData';
import React from 'react';

// 현재는 임시 데이터 목록에서 searchStock의 종목코드(symbolCode)와 같은 값 찾아서 해당 정보를 Info 컴포넌트들에게 전달하고 있음
// 서버 통신 시, api 서버에다가 searchStock의 종목코드를 쿼리로 날려서 실시간 데이터를 받아와서 전달해 주어야 함

export default function Info({stockHold}){
    // 로컬 스토리지에 저장되어 있는 searchStock 데이터 가져옴
    var searchStock = localStorage.getItem('searchStock');
    const detailStock = JSON.parse(searchStock);
    // ----------------서버에 요청--------------------
    // detailStock.searchTarget.symbolCode 로 쿼리 날리고 해당하는 정보 받아오기



    // 임시 데이터 목록에서 같은 값 찾는 부분
    var index = TestStockData.findIndex(i => i.symbolCode === detailStock.searchTarget.symbolCode);

    // 같은 값 => selectedStock 을 Info의 Header, Content, LineGraph, List에 props로 전달
    // 수정하면 실시간 데이터 정보 들어가는 변수
    const selectedStock = TestStockData[index];

    return(
        <div style={{marginTop: '50px', marginLeft: '2%', marginRight: '2%', textAlign: 'left', paddingBottom: '50px'}}>
            <div className={styles.box}>
                <div style={{display: 'flex'}}>
                    <InfoHeader stockInfo={selectedStock}></InfoHeader>
                </div>
                    {/* <InfoContent budget={stockHold} stockInfo={selectedStock}></InfoContent> */}
                    <InfoLineGraph></InfoLineGraph>
                    <InfoList stockInfo={selectedStock}></InfoList>
            </div>
        </div>        
    );
}