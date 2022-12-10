import React from "react";
import { BsCoin } from "react-icons/bs";

export default function PieAnchor({ budget }) {
    const stockName = budget.name;
    const stockAvgPrice = budget.avgPrice;

    return (
        <div style={{ marginTop: '40px', marginBotton: '20px', display: 'block', width: '300px' }}>

            <div style={{ display: 'flex' }}>
                <BsCoin style={{ color: 'white', paddingTop: '15px' }}></BsCoin>
                <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '100px', paddingTop: '10px' }}>{stockName}</span>
                <span style={{ color: 'white', paddingLeft: '100px', display: 'block', paddingTop: '10px', textAlign: 'right', width: '100px' }}>{stockAvgPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
            </div>
        </div>


    );
}

