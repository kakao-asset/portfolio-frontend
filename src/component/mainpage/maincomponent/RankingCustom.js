import { VscChevronRight } from "react-icons/vsc";
import { useState } from "react";
import Modal from 'react-modal';

export default function RankingCustom(){
        const selectList = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];

        // 등락률 버튼 제어
        const [flucRateisClick, flucRateOnIsClick] = useState(false);
        const flucRateSetIsClick = () => {
            flucRateOnIsClick(!flucRateisClick);
        }

        // 거래량 버튼 제어
        const [tradeVolisClick, tradeVolOnIsClick] = useState(false);
        const tradeVolSetIsClick = () => {
            tradeVolOnIsClick(!tradeVolisClick);
        }

    
        // 거래대금 버튼 제어
        const [tradeAmountisClick, tradeAmountOnIsClick] = useState(false);
        const tradeAmountSetIsClick = () => {
            tradeAmountOnIsClick(!tradeAmountisClick);
        }

    
        // 시가총액 버튼 제어
        const [marketCapisClick, marketCapOnIsClick] = useState(false);
        const marketCapSetIsClick = () => {
            marketCapOnIsClick(!marketCapisClick);
        }

        // 외국인 버튼 제어
        const [foreTradeisClick, foreTradeOnIsClick] = useState(false);
        const foreTradeSetIsClick = () => {
            foreTradeOnIsClick(!foreTradeisClick);
        }


    return(
        <div style={{display:'block', width:'300px', textAlign: 'center'}}>
        <button style={{
            marginBottom: '40px',
            marginLeft:'100px',
            width: 'fit-content',
            backgroundColor: '#1F1F1F',
            color: '#E0E0E0',
            paddingTop: '13px',
            paddingBottom: '13px',
            paddingLeft: '40px',
            paddingRight: '40px',
            borderColor: '#1F1F1F',
            border: '0px'                 
           }}>기준 커스텀</button>
           <ul>
            <button onClick={flucRateSetIsClick} style={{
            marginLeft:'60px',
            width: 'fit-content',
            backgroundColor: '#2F3138',
            color: '#E0E0E0',
            paddingTop: '13px',
            paddingBottom: '13px',
            paddingLeft: '20px',
            paddingRight: '40px',
            borderColor: '#2F3138',
            border: '0px'                 
           }}>등락률</button><VscChevronRight color="white"></VscChevronRight>
        </ul>
        <ul>
            <button onClick={tradeVolSetIsClick} style={{
            marginLeft:'60px',
            width: 'fit-content',
            backgroundColor: '#2F3138',
            color: '#E0E0E0',
            paddingTop: '13px',
            paddingBottom: '13px',
            paddingLeft: '20px',
            paddingRight: '40px',
            borderColor: '#2F3138',
            border: '0px'                 
           }}>거래량</button><VscChevronRight color="white"></VscChevronRight>
        </ul>
        <ul>
            <button onClick={tradeAmountSetIsClick} style={{
            marginLeft:'60px',
            width: 'fit-content',
            backgroundColor: '#2F3138',
            color: '#E0E0E0',
            paddingTop: '13px',
            paddingBottom: '13px',
            paddingLeft: '20px',
            paddingRight: '30px',
            borderColor: '#2F3138',
            border: '0px'                 
           }}>거래대금</button><VscChevronRight color="white"></VscChevronRight>
        </ul>
        <ul>
            <button onClick={marketCapSetIsClick} style={{
            marginLeft:'60px',
            width: 'fit-content',
            backgroundColor: '#2F3138',
            color: '#E0E0E0',
            paddingTop: '13px',
            paddingBottom: '13px',
            paddingLeft: '20px',
            paddingRight: '30px',
            borderColor: '#2F3138',
            border: '0px'                 
           }}>시가총액</button><VscChevronRight color="white"></VscChevronRight>
        </ul>
        <ul>
            <button onClick={foreTradeSetIsClick} style={{
            marginLeft:'60px',
            width: 'fit-content',
            backgroundColor: '#2F3138',
            color: '#E0E0E0',
            paddingTop: '13px',
            paddingBottom: '13px',
            paddingLeft: '20px',
            paddingRight: '40px',
            borderColor: '#2F3138',
            border: '0px'                 
           }}>외국인</button><VscChevronRight color="white"></VscChevronRight>
        </ul>

        <Modal isOpen={flucRateisClick} onRequestClose={()=>flucRateOnIsClick(false)} 
        style={{
            overlay: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0)'
            },
            content: {
                position: 'relative',
                top: '1550px',
                left: '78%',
                overflow: 'auto',
                borderRadius: '4px',
                width: '100px',
                height: 'fit-content',
                background: '#1F1F1F'

            }
        }}>
            <select>
                {selectList.map((item)=>(
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
            <button onClick={flucRateSetIsClick} style={{marginLeft: '8px'}}>선택</button>
        </Modal>

        <Modal isOpen={tradeVolisClick} onRequestClose={()=>tradeVolOnIsClick(false)} 
        style={{
            overlay: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0)'
            },
            content: {
                position: 'relative',
                top: '1610px',
                left: '78%',
                overflow: 'auto',
                borderRadius: '4px',
                width: '100px',
                height: 'fit-content',
                background: '#1F1F1F'

            }
        }}>
            <select>
                {selectList.map((item)=>(
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
            <button onClick={tradeVolSetIsClick} style={{marginLeft: '8px'}}>선택</button>
        </Modal>

        <Modal isOpen={tradeAmountisClick} onRequestClose={()=>tradeAmountOnIsClick(false)} 
        style={{
            overlay: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0)'
            },
            content: {
                position: 'relative',
                top: '1680px',
                left: '78%',
                overflow: 'auto',
                borderRadius: '4px',
                width: '100px',
                height: 'fit-content',
                background: '#1F1F1F'

            }
        }}>
            <select>
                {selectList.map((item)=>(
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
            <button onClick={tradeAmountSetIsClick} style={{marginLeft: '8px'}}>선택</button>
        </Modal>

        <Modal isOpen={marketCapisClick} onRequestClose={()=>marketCapOnIsClick(false)} 
        style={{
            overlay: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0)'
            },
            content: {
                position: 'relative',
                top: '1740px',
                left: '78%',
                overflow: 'auto',
                borderRadius: '4px',
                width: '100px',
                height: 'fit-content',
                background: '#1F1F1F'

            }
        }}>
            <select>
                {selectList.map((item)=>(
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
            <button onClick={marketCapSetIsClick} style={{marginLeft: '8px'}}>선택</button>
        </Modal>

        <Modal isOpen={foreTradeisClick} onRequestClose={()=>foreTradeOnIsClick(false)} 
        style={{
            overlay: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0)'
            },
            content: {
                position: 'relative',
                top: '1800px',
                left: '78%',
                overflow: 'auto',
                borderRadius: '4px',
                width: '100px',
                height: 'fit-content',
                background: '#1F1F1F'

            }
        }}>
            <select>
                {selectList.map((item)=>(
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
            <button onClick={foreTradeSetIsClick} style={{marginLeft: '8px'}}>선택</button>
        </Modal>
       
    </div>
    );
}