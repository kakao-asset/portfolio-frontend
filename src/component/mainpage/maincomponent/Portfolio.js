import styles from "./css/Portfolio.module.css";
import PieChart from "./chart/PieChart";
import PieAnchor from "./chart/PieAnchor";
import React, { useCallback,useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import Modal from 'react-modal';

export default function Portfolio({stockHold, budget, cash}){

    const [,updateState] = useState()
    const forceUpdate = useCallback(()=> updateState({}), []);

    useEffect(()=>{
        forceUpdate()
        setInterval(()=>{
            forceUpdate()
        },1000)
    },[])

  
    var totalPurchase = 0;
    var totalAsset = 0;
    
    for (var i=0; i<stockHold.length; i++){
        totalPurchase += stockHold[i].value * stockHold[i].avgPrice;
        console.log(totalPurchase);
        console.log(stockHold[i].avgPrice);
    }

    for (var i=0; i<budget.length; i++){
        // console.log(budget[i].currentPrice);
        totalAsset += budget[i].value * budget[i].currentPrice;
        console.log(budget[i].currentPrice);
    }

    var totalSum = (totalAsset+cash)/(totalPurchase+cash);
     console.log(totalSum);
     console.log(Number((totalSum)*100-100).toFixed(2));

    return (
        <div>
            <div className={styles.box}>
                <div>
                    <div style={{height: "10px"}}></div>
                    <p style={{marginLeft: '30px', color: "white", fontSize: '20px'}}>자산구성</p>
                </div>
                    <div style={{display: 'flex'}}>
                        <PieChart stockHold={stockHold}></PieChart>
                        <div style={{width: '400px', height: '400px', overflow: 'auto'}}>
                        {stockHold.map(budget => (
                        <PieAnchor key={budget.symbolCode} budget={budget}></PieAnchor>
                    ))}
                    </div>
                    </div>
                

                <div style={{display: "flex"}}>
                    {/* 총 자산은 현재 보유 주식 실시간 데이터의 현재가 X 보유 개수 */}
                    {/* 지금은 보유 주식 평단가 X 보유 개수로 계산 */}
                    <p style={{marginLeft: '30px', color: "white", paddingTop: '5px', width: '70px'}}>매수금액</p>
                    <h3 style={{marginLeft: '5%', color: "white", width: '150px', textAlign: 'right'}}>{totalPurchase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>
                    <p style={{marginLeft: '100px', color: "white", paddingTop: '5px', width: '70px'}}>보유현금</p>
                    <h3 style={{marginLeft: '5%', color: "white", width: '150px', textAlign: 'right'}}>{Number(cash).toLocaleString('ko-KR')}원</h3>
                </div>
                <div style={{display: "flex"}}>
                    <p style={{marginLeft: '30px', color: "white", paddingTop: '5px', width: '70px'}}>투자금액</p>
                    <h3 style={{marginLeft: '5%', color: "white", width: '150px',textAlign: 'right'}}>{totalAsset == "" || totalAsset == undefined? '(계산중)' :totalAsset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>
                    <p style={{marginLeft: '100px', color: "white", paddingTop: '5px',  width: '70px'}}>총 자산</p>
                    <h3 style={{marginLeft: '5%', color: "white",  width: '150px',textAlign: 'right'}}>{Number(totalAsset+cash).toLocaleString('ko-KR')}원</h3>
                    <p style={{color: totalSum>1? '#57C083':'#DD6C87', paddingTop: '8px', marginLeft: '10px'}}>( {Number((totalSum)*100-100).toFixed(2)}% )</p>
                </div>
            </div>
        </div>
    );
}