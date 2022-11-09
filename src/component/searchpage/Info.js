import styles from './css/Info.module.css'
import InfoList from './InfoList';

export default function Info(){

    const stockInfo = [
        {
            id: 1,
            stockName: 'NAVER',
            currentPrice: '169000',
            oldPrice: '174000',
            startPrice: '168000',
            stockQuantity: '1010968',
            highPrice: '174000',
            lowPrice: '166000',

        }
    ];
    return(
        <div style={{marginTop: '50px', marginLeft: '2%', marginRight: '2%', textAlign: 'left', }}>
            <div className={styles.box}>
                <img src="https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside" 
                    style={{width: '40px', marginLeft: '50px', marginTop: '70px'}}></img>
                 {stockInfo.map(stockInfo => (
                        <InfoList key={stockInfo.id} stockInfo={stockInfo}></InfoList>
                    ))}
            </div>
        </div>
    );
}