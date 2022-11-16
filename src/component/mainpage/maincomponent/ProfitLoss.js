import styles from './css/ProfitLoss.module.css'
import LineGraph from './chart/LineGraph';

export default function ProfitLoss({stockHold}) {
    console.log(stockHold);
    return (
        <div>
        <div className={styles.box}>
            <div>
                <LineGraph></LineGraph>
            </div>
        </div>
        </div>
    );
}