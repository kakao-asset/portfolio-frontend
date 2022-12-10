import styles from './css/ProfitLoss.module.css'
import BarChart from './chart/BarChart';

export default function ProfitLoss({ stockHold, profit }) {

    return (
        <div>
            <div className={styles.box}>
                <div>
                    <BarChart stockHold={stockHold}></BarChart>
                </div>
            </div>
        </div>
    );
}