import Header from "../mainpage/header/Header";
import Info from "./Info";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import SearchEmpty from "./SearchEmpty";
import Footer from "../mainpage/header/Footer";
import Swal from "sweetalert2";
// import { SearchContext } from "../../store/SearchStore";


export default function MainSearch(){
        // const context = useContext(SearchContext);

        // console.log(context);

        // 로컬 스토리지에 저장되어 있는 searchStock 데이터 가져옴
        var searchStock = localStorage.getItem('searchStock');
        const detailStock = JSON.parse(searchStock);
        // ----------------서버에 요청--------------------
        // detailStock.searchTarget.symbolCode 로 쿼리 날리고 해당하는 정보 받아오기
    
        const stockSymbolCode = detailStock.searchTarget.symbolCode;
    
        const[current, setCurrent] = useState({});
        const [stockInfoisFill, setStockInfoisFill] = useState(false);
    
        function getRealtimeData(){
            console.log("실시간 정보 검색");
            axios({
                method: "get",
                url: `/main/realtime/?stock_name=${stockSymbolCode}`,
                headers: {"Access-Control-Allow-Origin": "*"},
                responseEncoding: 'binary'
            })
            .then((res) => {
                var result = res.data;
                console.log(result);

                if (result == "") {
                    Swal.fire({
                        icon: "warning",
                        text: "KOSPI 종목이 아닙니다",
                        showConfirmButton: false,
                        timer: '1000'
                    });
                    document.location.href = "/main";
                }
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
            <Footer></Footer>
            </div>
        </div>
    );
}