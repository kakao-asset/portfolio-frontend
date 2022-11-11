import React from "react";
import { Route, useNavigate } from "react-router-dom";


    export default function SearchRow  ({searchTarget})  {

        const stockName = searchTarget.sName;
        const navigate = useNavigate();
        const navigateToDetail = () => {
            navigate("/detail");
            window.location.reload();
        }

        const setSearchTargetToLocal = (searchTarget) => {
            localStorage.setItem('searchStock',JSON.stringify({searchTarget}));
        }


        return (
            <div style={{marginTop: '45px', marginBotton: '20px'}}>
                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <button onClick={()=>{navigateToDetail(); 
                            setSearchTargetToLocal(searchTarget);}} style={{
                            color: 'white', 
                            display: 'block', 
                            width: '100px',
                            backgroundColor: '#1F1F1F',
                            border: 'none',
                            fontSize: '20px'
                            }}>{stockName}</button>
                </div>
             </div>


        );
    }
