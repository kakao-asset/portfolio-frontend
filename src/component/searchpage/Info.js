import styles from './css/Info.module.css'
import InfoContent from './InfoContent';
import InfoHeader from './InfoHeader';
import InfoLineGraph from './InfoLineGraph';
import InfoList from './InfoList';

export default function Info(){

    const stockInfo = [
        {
            id: 1,
            stockCode: '001440',
            stockName: 'NAVER',
            currentPrice: '169000',
            oldPrice: '174000',
            startPrice: '168000',
            stockQuantity: '1010968',
            highPrice: '174000',
            lowPrice: '166000',

        },
    ];

    const stockCode = stockInfo.stockCode;
    const stockName = stockInfo.stockName;

    return(
        <div style={{marginTop: '50px', marginLeft: '2%', marginRight: '2%', textAlign: 'left', paddingBottom: '50px'}}>
            <div className={styles.box}>
                <div style={{display: 'flex'}}>
                <img src="https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside" 
                    style={{width: '50px', height: '50px', marginLeft: '50px', marginTop: '70px'}}></img>
                 {stockInfo.map(stockInfo => (
                        <InfoHeader key={stockInfo.id} stockInfo={stockInfo}></InfoHeader>
                    ))} 
                </div>
                    {stockInfo.map(stockInfo => (
                        <InfoContent key={stockInfo.id} stockInfo={stockInfo}></InfoContent>
                    ))}
                    <InfoLineGraph></InfoLineGraph>
                 {stockInfo.map(stockInfo => (
                        <InfoList key={stockInfo.id} stockInfo={stockInfo}></InfoList>
                    ))}
            </div>
        </div>
    );
}