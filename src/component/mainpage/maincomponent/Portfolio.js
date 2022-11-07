import styles from "./css/Portfolio.module.css"
import PieChart from "./chart/PieChart";

export default function Portfolio(){
    return (
        <div>
            <div className={styles.box}>
                <div>
                    <div style={{height: "25px"}}></div>
                    <p1 style={{marginLeft: '20px', color: "white"}}>자산구성</p1>
                </div>
                    <PieChart></PieChart>
                <div style={{display: "flex"}}>
                    <p1 style={{marginLeft: '20px', color: "white",paddingTop: "25px"}}>투자성향</p1>
                    <img alt="type1" src="img/ka_type_1.png" style={{marginLeft: '8%'}}></img>
                    <img alt="type2" src="img/ka_type_2.png"></img>
                </div>
                <div style={{display: "flex"}}>
                    <p1 style={{marginLeft: '20px', color: "white", paddingTop: "20px"}}>총 자산</p1>
                    <h3 style={{marginLeft: '10%', color: "white"}}>500,000,000원</h3>
                </div>
            </div>
        </div>
    );
}