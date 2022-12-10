import { BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";


export default function HistoryRow({ history }) {
    return (
        <div>
            <span style={{ color: 'white', paddingLeft: '3rem', color: "#ccc" }}>{history.tradeDate}</span>
            <div style={{ display: 'flex', marginBottom: '2rem', paddingLeft: '2rem' }}>

                {history.tradeType == true ? <BsPlusCircleFill size='25px' style={{ color: '#DD6C87', paddingTop: '24px' }}></BsPlusCircleFill> : <BsDashCircleFill size='25px' style={{ color: '#57C083', paddingTop: '24px' }}></BsDashCircleFill>}
                <p style={{ color: 'white', fontSize: '18px', paddingLeft: '5px', paddingTop: '5px' }}>{history.tradeTime}</p>
                <h3 style={{ color: 'white', fontSize: '20px', paddingLeft: '6rem', width: '150px' }}>{history.stockName}</h3>
                <p style={{ color: 'white', fontSize: '20px', paddingLeft: '1rem', width: '50px', textAlign: 'right' }}>{history.quantity}개</p>
                <p style={{ color: history.tradeType == true ? '#DD6C87' : '#57C083', fontSize: '20px', paddingLeft: '10px', width: '150px', textAlign: 'right' }}>{Number(history.price).toLocaleString('ko-KR')}원</p>

            </div>
        </div>
    );
};
