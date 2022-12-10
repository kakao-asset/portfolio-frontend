import CashRow from "./maincomponent/CashRow";
import axios from "axios";
import { useState, useEffect } from "react";
import FillCashRow from "./maincomponent/FillCashRow";
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

            if (cash == null || cash == [] || cash == undefined) {
                setCashIsFill(false);
            } else (setCashIsFill(true));


        }).catch((err) => {

        })

    useEffect(() => {
        getUserCash();
    }, [cash]);

    return (
        <div>
            {cashIsFill ? <FillCashRow cash={cash}></FillCashRow> : <CashRow></CashRow>}
            {cashIsFill ? <NoStockRow></NoStockRow> : <></>}
        </div>
    );
};
