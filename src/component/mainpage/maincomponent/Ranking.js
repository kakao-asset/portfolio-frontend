import styles from "./css/Ranking.module.css";
import { VscChevronUp , VscChevronDown } from "react-icons/vsc";
import { useMemo, useState } from "react";
import RankingTable from "./RankingTable";
import { rankingColumn } from "./RankingColumn";
import { rankingData } from "./RankingData";

export default function Ranking(){
    // 등락률 버튼 제어
    const [flucRateisClick, flucRateOnIsClick] = useState(false);
    const flucRateSetIsClick = () => {
        flucRateOnIsClick(!flucRateisClick);
    }
    const [flucRateisSort, flucRateOnIsSort] = useState(false);
    const flucRateSetIsSort = () => {
        flucRateOnIsSort(!flucRateisSort);
    }

    // 거래량 버튼 제어
    const [tradeVolisClick, tradeVolOnIsClick] = useState(false);
    const tradeVolSetIsClick = () => {
        tradeVolOnIsClick(!tradeVolisClick);
    }
    const [tradeVolisSort, tradeVolOnIsSort] = useState(false);
    const tradeVolSetIsSort = () => {
        tradeVolOnIsSort(!tradeVolisSort);
    }

    // 거래대금 버튼 제어
    const [tradeAmountisClick, tradeAmountOnIsClick] = useState(false);
    const tradeAmountSetIsClick = () => {
        tradeAmountOnIsClick(!tradeAmountisClick);
    }
    const [tradeAmountisSort, tradeAmountOnIsSort] = useState(false);
    const tradeAmountSetIsSort = () => {
        tradeAmountOnIsSort(!tradeAmountisSort);
    }

    // 시가총액 버튼 제어
    const [marketCapisClick, marketCapOnIsClick] = useState(false);
    const marketCapSetIsClick = () => {
        marketCapOnIsClick(!marketCapisClick);
    }
    const [marketCapisSort, marketCapOnIsSort] = useState(false);
    const marketCapSetIsSort = () => {
        marketCapOnIsSort(!marketCapisSort);
    }

    // 외국인 버튼 제어
    const [foreTradeisClick, foreTradeOnIsClick] = useState(false);
    const foreTradeSetIsClick = () => {
        foreTradeOnIsClick(!foreTradeisClick);
    }
    const [foreTradeisSort, foreTradeOnIsSort] = useState(false);
    const foreTradeSetIsSort = () => {
        foreTradeOnIsSort(!foreTradeisSort);
    }

    const columns = useMemo(()=>[
        {
            accessor: 'stockName',
            Header: '종목이름'
        },
        {
            accessor: 'currentPrice',
            Header: '현재가'
        },
        {
            accessor: 'flucRate',
            Header: '등락률'
        },
        {
            accessor: 'tradeVol',
            Header: '거래량'
        },
        {
            accessor: 'tradeAmount',
            Header: '거래대금'
        },
        {
            accessor: 'marketCap',
            Header: '시가총액(억원)'
        },
        {
            accessor: 'foreTrade',
            Header: '외국인'
        },
    ], []);

    return(
        <div className={styles.box}>
            <h3 style={{color: 'white', paddingTop: '40px', paddingLeft: '40px'}}>전기 전자</h3>
            <div style={{display: 'flex', paddingTop: '20px', paddingLeft: '110px'}}>
                <button style={{
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>종목이름</button>
                <button style={{
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>현재가</button>

                <button  onClick={flucRateSetIsClick} style={{
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '45px',
                    paddingRight: '40px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>등락률</button>
                <button onClick={flucRateSetIsSort} style={{
                    display: flucRateisClick? 'block':'none',
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>{flucRateisSort? 
                    <VscChevronUp></VscChevronUp> :
                    <VscChevronDown></VscChevronDown>}    
                    </button>

                <button onClick={tradeVolSetIsClick} style={{
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '45px',
                    paddingRight: '40px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>거래량</button>
                <button onClick={tradeVolSetIsSort} style={{
                    display: tradeVolisClick? 'block':'none',
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>{tradeVolisSort? 
                    <VscChevronUp></VscChevronUp> :
                    <VscChevronDown></VscChevronDown>}</button>

                <button onClick={tradeAmountSetIsClick} style={{
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '47px',
                    paddingRight: '40px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>거래대금</button>
                <button onClick={tradeAmountSetIsSort} style={{
                    display: tradeAmountisClick? 'block':'none',
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>{tradeAmountisSort? 
                    <VscChevronUp></VscChevronUp> :
                    <VscChevronDown></VscChevronDown>}</button>

                <button onClick={marketCapSetIsClick} style={{
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '35px',
                    paddingRight: '40px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>시가총액(억원)</button>
                <button onClick={marketCapSetIsSort} style={{
                    display: marketCapisClick? 'block':'none',
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>{marketCapisSort? 
                    <VscChevronUp></VscChevronUp> :
                    <VscChevronDown></VscChevronDown>}</button>
                

                <button onClick={foreTradeSetIsClick} style={{
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '10px',
                    paddingRight: '40px',
                    borderColor: '#1F1F1F',
                    borderRadius: '2px',
                    border: '0px'                 
                   }}>외국인</button>
                <button onClick={foreTradeSetIsSort} style={{
                    display: foreTradeisClick? 'block':'none',
                    width: 'fit-content',
                    backgroundColor: '#1F1F1F',
                    color: '#E0E0E0',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingRight: '20px',
                    borderColor: '#1F1F1F',
                    border: '0px'                 
                   }}>{foreTradeisSort? 
                    <VscChevronUp></VscChevronUp> :
                    <VscChevronDown></VscChevronDown>}</button>
            </div>
            <RankingTable columns={columns} data={rankingData}></RankingTable>
        </div>
    );
}