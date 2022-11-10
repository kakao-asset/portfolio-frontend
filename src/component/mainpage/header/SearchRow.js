import React from "react";
import { useDispatch } from "react-redux";
import { changeSearch } from "../../../store";
import { Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

    export default function SearchRow  ({searchTarget})  {
        const mapStateToProps = state => {
            return {
                searchTarget: state.searchTarget,
            };
        };
        
        const stockName = searchTarget.sName;
        const navigate = useNavigate();
        const navigateToDetail = () => {
            navigate("/detail");
        }

        const dispatch = useDispatch();
        const searchStock = useSelector((store) => store.searchTarget);

        return (
            <div style={{marginTop: '45px', marginBotton: '20px'}}>
                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <button onClick={()=> {
                        console.log(searchTarget);
                        
                        dispatch((changeSearch(searchTarget)));
                        console.log("store에 저장된 검색어: "+searchStock);
                        // navigateToDetail;
                        }} style={{
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
