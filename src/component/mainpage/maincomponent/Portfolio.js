import styles from "./css/Portfolio.module.css"
import PieChart from "./chart/PieChart";
import PieAnchor from "./chart/PieAnchor";
import { StockData } from "../../../data/StockData";

export default function Portfolio({stockHold}){



    return (
        <div>
            <div className={styles.box}>
                <div>
                    <div style={{height: "25px"}}></div>
                    <p1 style={{marginLeft: '20px', color: "white"}}>자산구성</p1>
                </div>
                    <div style={{display: 'flex'}}>
                        <PieChart stockHold={stockHold}></PieChart>
                        <div>
                        {stockHold.map(budget => (
                        <PieAnchor key={budget.id} budget={budget}></PieAnchor>
                    ))}
                    </div>
                    </div>
                

                <div style={{display: "flex"}}>
                    <p1 style={{marginLeft: '20px', color: "white", paddingTop: "50px"}}>총 자산</p1>
                    <h3 style={{marginLeft: '10%', color: "white", paddingTop: "30px", paddingBottom: "30px"}}>111</h3>
                </div>
            </div>
        </div>
    );
}