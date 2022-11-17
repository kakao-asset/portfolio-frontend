import Header from "./header/Header";
import MainPortfolio from "./MainPortfolio";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main() {
    const [stockHold, setStockHold] = useState([{
        name: "",
        value: "",
        avgPrice: "",
        sectorCode: "",
        symbolCode: "",
        sectorName: "",
    }]);
    
    var resStockData; var resData;
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    const test = async () => await axios({
            method: "GET",
            url: `${process.env.REACT_APP_BACKEND_URI}/api/stock/${userId}`
        })
        .then((res) => {
            resData = res.data.data;
            resStockData = resData.map((x) => ({name: x.stockName, value: x.quantity, avgPrice: x.avgPrice, symbolCode: x.stockCode, sectorCode: x.sectorCode, sectorName: x.sectorName}));
            setStockHold(resStockData);
        }).catch((err) => {
            console.log("use_stock 데이터 에러", err);
        })
        
    //-----------
    // const[currnt, setCurrent] = useState({});
    // function getRealtimeData(){
    //     for (let i = 0; i < stockHold.length; i++) {
    //         console.log("------------------");
    //         console.log(stockHold[i]);
    //         console.log("es ::: ", stockHold[i], stockHold[i].symbolCode);
    //         axios({
    //             method: "get",
    //             url: `${process.env.REACT_APP_BACKEND_URI}/main/realtime/?stock_name=${stockHold[i].symbolCode}`,
    //             headers: {"Access-Control-Allow-Origin": "*"},
    //             responseEncoding: 'binary'
    //         })
    //         .then((res) => {
    //             var result = res.data
    //             console.log("res ::: ", result);
    //             var updateData= {[stockHold[i]["label"]]: result};

    //             if (Object.keys(currnt).length == 3){
    //                 updateData["우리기술투자"] = "바보"
    //             }
    //             var final = Object.assign(currnt, updateData)
    //             setCurrent(final)

    //             console.log(final);
    //         }).catch((err) => {
    //             console.log("데이터 받아오기 에러", err);
    //         })
    //     }
    // }

    useEffect(() => {
        test();
    }, []);
    
    // useEffect(()=>{
    //     getRealtimeData();
    //     const interval = setInterval(()=>{
    //         getRealtimeData();
    //     },10000)
    // },[])

    // useEffect(()=>{
    //     //console.log(currnt);
    // }, [currnt])

    return (
        <div>
            <Header></Header>
            <MainPortfolio stockHold={stockHold}></MainPortfolio>
            
        </div>
    );
    
}