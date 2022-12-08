import CashRow from "./maincomponent/CashRow";
import axios from "axios";
import { useState, useEffect } from "react";
import FillCashRow from "./maincomponent/FillCashRow";
import { AiFillQuestionCircle } from "react-icons/ai";
import NoStockRow from "./maincomponent/row/NoStockRow";

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

        setCash(resData.cash);
        
        
        console.log(cash);
        
        if ( cash == null || cash == [] || cash == undefined) {
            setCashIsFill(false);
        } else (setCashIsFill(true));
        
        
    }).catch((err) => {
        console.log("user_cash 데이터 에러", err);
    })

useEffect(() => {
    getUserCash();
}, [cash]);

    return (
        <div>
            {cashIsFill? <FillCashRow cash={cash}></FillCashRow> : <CashRow></CashRow>}
            {cashIsFill? <NoStockRow></NoStockRow>: <></>}

            
        </div>
    );
};
