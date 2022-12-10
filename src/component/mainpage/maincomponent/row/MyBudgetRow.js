import React from "react";

export default function MyBudgetRow({ rankingTarget }) {
    const stockName = rankingTarget.name;

    const setRankingTargetToLocal = (rankingTarget) => {
        localStorage.setItem('rankingStock', JSON.stringify({ rankingTarget }));
    }

    return (
        <div style={{ marginTop: '10px', marginBotton: '20px' }}>
            <div style={{ display: 'flex', marginLeft: '5px' }}>
                <button onClick={() => {
                    setRankingTargetToLocal(rankingTarget); window.location.reload();
                }} style={{
                    color: 'white',
                    display: 'block',
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    border: 'none',
                    fontSize: '25px'
                }}>{stockName}</button>
            </div>
        </div>
    );
}
