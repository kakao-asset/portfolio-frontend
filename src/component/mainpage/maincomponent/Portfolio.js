import styles from "./css/Portfolio.module.css"
import PieChart from "./chart/PieChart";
import PieAnchor from "./chart/PieAnchor";
import React, { useCallback,useState, useEffect } from "react";

export default function Portfolio({stockHold, budget}){

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
    }

    for (var i=0; i<budget.length; i++){
        // console.log(budget[i].currentPrice);
        totalAsset += budget[i].value * budget[i].currentPrice;
    }

    // console.log(totalAsset);

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
                    <p style={{marginLeft: '30px', color: "white", paddingTop: '5px'}}>매수금액</p>
                    <h3 style={{marginLeft: '5%', color: "white"}}>{totalPurchase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>
                </div>
                <div style={{display: "flex"}}>
                    <p style={{marginLeft: '30px', color: "white", paddingTop: '5px'}}>투자금액</p>
                    <h3 style={{marginLeft: '5%', color: "white"}}>{totalAsset == "" || totalAsset == undefined? '(계산중)' :totalAsset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>
                </div>
            </div>
        </div>
    );
}