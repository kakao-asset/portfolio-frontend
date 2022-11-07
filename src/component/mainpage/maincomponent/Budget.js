import styles from "./css/Budget.module.css";
import BudgetRow from "./row/BudgetRow";

export default function Budget() {
    const myStocks = [
        {
            id: 1,
            stockName: 'Naver',
            stockValue: 45000,
        },
        {
            id: 2,
            stockName: 'Kakao',
            stockValue: 50000,
        },
        {
            id: 3,
            stockName: 'Samsung',
            stockValue: 90000
        },

    ];
    return (
        <div className={styles.box}>
            <div style={{marginTop: '80px', marginLeft: '20px'}}>
                    {myStocks.map(budget => (
                        <BudgetRow key={budget.id} budget={budget}></BudgetRow>
                    ))}
            </div>
        </div>
    );
}