import CashRow from "./maincomponent/CashRow";
import axios from "axios";
import { useState, useEffect } from "react";
import FillCashRow from "./maincomponent/FillCashRow";
import { AiFillQuestionCircle } from "react-icons/ai";

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
            <p style={{color: 'white', paddingTop: '5rem'}}>보유한 자산이 없습니다.</p>
            <p style={{color: 'white', paddingTop: '1rem', paddingBottom: '2rem'}}>자산을 추가해 포트폴리오를 만들어 보세요.</p>
            <div text-align='center'>
            <div style={{display: 'inline-block', marginTop: '2rem'}}>
            <div style={{display: 'flex'}}>
                {/* <p style={{color: '#366cc2'}}>사용 가이드</p><AiFillQuestionCircle size='20px' color="#366cc2" style={{paddingTop: '19px', paddingLeft: '5px'}}></AiFillQuestionCircle> */}
            </div>
            </div>
            </div>
            <img alt="empty image" src="img/ka_lion_loading.gif"></img>

            
        </div>
    );
};
