import Header from "./header/Header";
import MainPortfolio from "./MainPortfolio";
import axios from "axios";
import { useEffect, useState } from "react";
import MainEmpty from "./MainEmpty";
import Footer from "./header/Footer";

export default function Main() {
    const [stockHold, setStockHold] = useState([{
        name: "",
        value: "",
        avgPrice: "",
        sectorCode: "",
        symbolCode: "",
        sectorName: "",
    }]);

    const [stockHoldisFill, setStockHoldisFill] = useState(false);

    var resStockData = [];
    var resData;
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    const [budgetData, setBudgetData] = useState([]);
    const [profit, setProfit] = useState([]);

    function getRealtimeData(stock_data) {
        var tmp = stock_data;

        for (let i = 0; i < resStockData.length; i++) {
            axios({
                method: "get",
                url: `/main/realtime/?stock_name=${tmp[i]['symbolCode']}`,
                headers: { "Access-Control-Allow-Origin": "*" },
                responseEncoding: 'binary'
            })
                .then((res) => {
                    var result = res.data;
                    var len = result.length == 0 ? 0 : result.length - 1;
                    var data = result[len].tradePrice;
                    var dateData = result[len].datetime;
                    tmp[i]['currentPrice'] = data;
                    tmp[i]['datetime'] = dateData;

                    var updateData = { [tmp[i]['name']]: result }
                    var target = Object.assign(profit, updateData)
                    setProfit(target)

                }).catch((err) => {
                })
        }

        setBudgetData(tmp)
    }

    const getStockInfo = async () => await axios({
        method: "GET",
        url: `/api/stock/${userId}`
    })
        .then((res) => {
            resData = res.data.data;
            resStockData = resData.map((x) => ({
                name: x.stockName,
                value: x.quantity,
                avgPrice: x.avgPrice,
                symbolCode: x.stockCode,
                sectorCode: x.sectorCode,
                sectorName: x.sectorName
            }));
            setStockHold(resStockData);

            getRealtimeData(resStockData);
            const interval = setInterval(() => {
                getRealtimeData(resStockData);
            }, 10000)

            if (resStockData.length > 0) {
                if (resStockData[0].name != "")
                    setStockHoldisFill(true);
            } else (setStockHoldisFill(false));


        }).catch((err) => {
        })

    useEffect(() => {
        getStockInfo();
    }, []);


    return (
        <div text-align="center">
            <div style={{ display: 'inline-block' }}>
                <Header></Header>
                {stockHoldisFill ? <MainPortfolio stockHold={stockHold} budgetData={budgetData} profit={profit}></MainPortfolio> : <MainEmpty></MainEmpty>}
                <Footer></Footer>
            </div>
        </div>
    );

}