import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
    export default function SearchRow  ({searchTarget})  {
        const stockName = searchTarget.sName;

        return (
            <div style={{marginTop: '40px', marginBotton: '20px'}}>

                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <AiFillDollarCircle style={{color: 'white', display: 'block'}}></AiFillDollarCircle>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px'}}>{stockName}</span>
                </div>
             </div>


        );
    }
