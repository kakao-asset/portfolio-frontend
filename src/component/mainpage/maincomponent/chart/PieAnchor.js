import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

export default function PieAnchor  ({budget})  {
        const stockName = budget.stockName;
        const stockValue = budget.currentPrice;

        return (
            <div style={{marginTop: '40px', marginBotton: '20px', display: 'block', width:'400px'}}>

                <div style={{display: 'flex'}}>
                    <BsFillCircleFill style={{color: 'white', paddingTop: '15px'}}></BsFillCircleFill>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', paddingTop: '10px'}}>{stockName}</span>
                    <span style={{color: 'white', paddingLeft: '100px', display: 'block', paddingTop: '10px'}}>{stockValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
             </div>


        );
    }