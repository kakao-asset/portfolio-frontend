import styles from "./css/Budget.module.css";
import BudgetRow from "./row/BudgetRow";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Budget({ stockHold, budgetData }) {

    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    const [cash, setCash] = useState("");

    const getUserCash = async () => await axios({
        method: "GET",
        url: `/api/cash/${userId}`
    })
        .then((res) => {
            var resData = res.data.data;
            setCash(resData.cash);


        }).catch((err) => {

        })

    useEffect(() => {
        getUserCash();
    }, []);

    return (
        <div className={styles.box} style={{ overflow: 'auto' }}>
            <div style={{ marginTop: '40px', marginLeft: '20px', marginBottom: '80px' }}>
                {budgetData.map(budget => (
                    <BudgetRow key={budget.name} budget={budget} cash={cash}></BudgetRow>
                ))}
            </div>
        </div>
    );
}