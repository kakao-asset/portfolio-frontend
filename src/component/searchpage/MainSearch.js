import Header from "../mainpage/header/Header";
import Info from "./Info";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import SearchEmpty from "./SearchEmpty";
import Footer from "../mainpage/header/Footer";
import Swal from "sweetalert2";


export default function MainSearch() {

    var searchStock = localStorage.getItem('searchStock');
    const detailStock = JSON.parse(searchStock);

    const stockSymbolCode = detailStock.searchTarget.symbolCode;

    const [current, setCurrent] = useState({});
    const [stockInfoisFill, setStockInfoisFill] = useState(false);

    function getRealtimeData() {
        axios({
            method: "get",
            url: `/main/realtime/?stock_name=${stockSymbolCode}`,
            headers: { "Access-Control-Allow-Origin": "*" },
            responseEncoding: 'binary'
        })
            .then((res) => {
                var result = res.data;

                if (result == "") {
                    Swal.fire({
                        icon: "warning",
                        text: "KOSPI 종목이 아닙니다",
                        showConfirmButton: false,
                        timer: '1000'
                    });
                    document.location.href = "/main";
                }
                var len = result.length == 0 ? 0 : result.length - 1;
                var data = result[len];
                setCurrent(data);

                if (current != "") {
                    setStockInfoisFill(true);
                } else setStockInfoisFill(false);

            }).catch((err) => {

            })
    }

    useEffect(() => {
        getRealtimeData();
        const interval = setInterval(() => {
            getRealtimeData();
        }, 50000)
    }, [stockSymbolCode])

    return (
        <div text-align="center">
            <div style={{ display: 'inline-block' }}>
                <Header></Header>
                {stockInfoisFill ? <Info current={current}></Info> : <SearchEmpty></SearchEmpty>}
                <Footer></Footer>
            </div>
        </div>
    );
}