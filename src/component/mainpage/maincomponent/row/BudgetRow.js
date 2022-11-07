import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
    export default function BudgetRow  ({budget})  {
        const stockName = budget.stockName;
        const stockValue = budget.stockValue;

        return (
            <div style={{marginTop: '40px', marginBotton: '20px'}}>

                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <AiFillDollarCircle style={{color: 'white', display: 'block'}}></AiFillDollarCircle>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px'}}>{stockName}</span>
                    <span style={{color: 'white', paddingLeft: '100px', display: 'block'}}>{stockValue}원</span>
                    <img src="img/ka_buy.png" style={{marginLeft:'70px'}}></img>
                    <img src="img/ka_sell.png" style={{marginLeft: '20px'}}></img>
                </div>
             </div>


        );
    }
