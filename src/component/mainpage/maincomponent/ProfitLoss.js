import styles from './css/ProfitLoss.module.css'
import LineGraph from './chart/LineGraph';
import BarChart from './chart/BarChart';

export default function ProfitLoss({stockHold, profit}) {

    return (
        <div>
        <div className={styles.box}>
            <div>
                {/* <LineGraph profit={profit}></LineGraph> */}
                <BarChart stockHold={stockHold}></BarChart>
            </div>
        </div>
        </div>
    );
}