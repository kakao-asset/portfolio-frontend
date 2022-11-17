import styles from './css/ProfitLoss.module.css'
import LineGraph from './chart/LineGraph';

export default function ProfitLoss({stockHold, profit}) {

    return (
        <div>
        <div className={styles.box}>
            <div>
                <LineGraph profit={profit}></LineGraph>
            </div>
        </div>
        </div>
    );
}