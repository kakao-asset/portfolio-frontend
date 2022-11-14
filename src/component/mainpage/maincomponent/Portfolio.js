import styles from "./css/Portfolio.module.css"
import PieChart from "./chart/PieChart";
import PieAnchor from "./chart/PieAnchor";
import { StockData } from "../../../data/StockData";

export default function Portfolio({stockHold}){

    var totalAsset = 0;

    for (var i=0; i<stockHold.length; i++){
        totalAsset += stockHold[i].value * stockHold[i].avgPrice;
    }

    return (
        <div>
            <div className={styles.box}>
                <div>
                    <div style={{height: "25px"}}></div>
                    <p style={{marginLeft: '30px', color: "white"}}>자산구성</p>
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
                    <p style={{marginLeft: '30px', color: "white", paddingTop: "37px"}}>총 자산</p>
                    <h3 style={{marginLeft: '5%', color: "white", paddingTop: "30px", paddingBottom: "30px"}}>{totalAsset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>
                </div>
            </div>
        </div>
    );
}