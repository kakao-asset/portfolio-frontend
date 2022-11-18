import styles from "./css/Budget.module.css";
import BudgetRow from "./row/BudgetRow";

export default function Budget({stockHold, budgetData}) {
    return (
        <div className={styles.box} style={{overflow: 'auto'}}>
            <p style={{color: 'white', marginLeft: '50px', marginTop: '35px', fontSize: '20px'}}>내 보유 주식의 현재가는?</p>
            <div style={{marginTop: '40px', marginLeft: '20px', marginBottom: '80px'}}>
                    {budgetData.map(budget => (
                        <BudgetRow key={budget.name} budget={budget}></BudgetRow>
                    ))}
            </div>
        </div>
    );
}