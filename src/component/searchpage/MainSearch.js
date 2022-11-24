import Header from "../mainpage/header/Header";
import Info from "./Info";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchEmpty from "./SearchEmpty";

export default function MainSearch(){

        // 로컬 스토리지에 저장되어 있는 searchStock 데이터 가져옴
        var searchStock = localStorage.getItem('searchStock');
        const detailStock = JSON.parse(searchStock);
        // ----------------서버에 요청--------------------
        // detailStock.searchTarget.symbolCode 로 쿼리 날리고 해당하는 정보 받아오기
    
        const stockSymbolCode = detailStock.searchTarget.symbolCode;
    
        const[current, setCurrent] = useState({});
        const [stockInfoisFill, setStockInfoisFill] = useState(false);
    
        function getRealtimeData(){
            axios({
                method: "get",
                url: `/main/realtime/?stock_name=${stockSymbolCode}`,
                headers: {"Access-Control-Allow-Origin": "*"},
                responseEncoding: 'binary'
            })
            .then((res) => {
                var result = res.data;
                console.log(result)
                var len = result.length == 0? 0 : result.length-1;
                var data = result[len];
                setCurrent(data);

                if (current != "") {
                    setStockInfoisFill(true);
                } else setStockInfoisFill(false);

            }).catch((err) => {
                console.log("데이터 받아오기 에러", err);
            })
        }
    
        useEffect( () => {
            getRealtimeData();
            const interval = setInterval(()=>{
                getRealtimeData();
            }, 50000)
        },[stockSymbolCode])
    
    return (
        <div text-align="center">
        <div style={{display: 'inline-block'}}>         
            <Header></Header>
            {stockInfoisFill? <Info current={current}></Info> : <SearchEmpty></SearchEmpty>}
            </div>
        </div>
    );
}