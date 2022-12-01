import CashRow from "./maincomponent/CashRow";
import axios from "axios";
import { useState, useEffect } from "react";
import FillCashRow from "./maincomponent/FillCashRow";

export default function MainEmpty() {
    var userId = JSON.parse(localStorage.getItem("userData")).userId;
    const [cash, setCash] = useState("");

    const [cashIsFill, setCashIsFill] = useState(false);

    const getUserCash = async () => await axios({
        method: "GET",
        url: `/api/cash/${userId}`
    })
    .then((res) => {
        var resData = res.data.data;
        console.log(resData.cash);
        setCash(resData.cash);

        console.log(cash);

        if ( cash != null) {
            setCashIsFill(true);
        } else (setCashIsFill(false));
        
        
    }).catch((err) => {
        console.log("user_cash 데이터 에러", err);
    })

useEffect(() => {
    getUserCash();
}, []);

    return (
        <div>
            {cashIsFill? <FillCashRow cash={cash}></FillCashRow> : <CashRow></CashRow>}
            <p style={{color: 'white', paddingTop: '5rem'}}>보유한 자산이 없습니다.</p>
            <p style={{color: 'white', paddingTop: '1rem', paddingBottom: '2rem'}}>자산을 추가해 포트폴리오를 만들어 보세요.</p>
            <img alt="empty image" src="img/ka_lion_loading.gif"></img>

            
        </div>
    );
};
