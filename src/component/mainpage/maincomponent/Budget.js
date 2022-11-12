import styles from "./css/Budget.module.css";
import BudgetRow from "./row/BudgetRow";

export default function Budget({stockHold}) {
    return (
        <div className={styles.box} style={{overflow: 'auto'}}>
            <div style={{marginTop: '80px', marginLeft: '20px'}}>
                    {stockHold.map(budget => (
                        <BudgetRow key={budget.name} budget={budget}></BudgetRow>
                    ))}
            </div>
        </div>
    );
}