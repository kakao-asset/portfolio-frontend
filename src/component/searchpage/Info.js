import styles from './css/Info.module.css'
import InfoContent from './InfoContent';
import InfoHeader from './InfoHeader';
import InfoLineGraph from './InfoLineGraph';
import InfoList from './InfoList';

export default function Info(){

    var searchStock = localStorage.getItem('searchStock');
    const detailStock = JSON.parse(searchStock);

    
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
            imgURL: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",

        },
        {
            id: 2,
            stockCode: '035720',
            stockName: 'KAKAO',
            currentPrice: '54800',
            oldPrice: '50800',
            startPrice: '54500',
            stockQuantity: '1981582',
            highPrice: '55100',
            lowPrice: '53600',
            imgURL: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
        },
        {
            id: 3,
            stockCode: '005930',
            stockName: 'SAMSUNG',
            currentPrice: '62900',
            oldPrice: '60400',
            startPrice: '63100',
            stockQuantity: '4350775',
            highPrice: '63200',
            lowPrice: '62500',
            imgURL: "https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png",
        },
    ];


    const stockCode = stockInfo.stockCode;
    const stockName = stockInfo.stockName;

    // stockInfo.filter(searchStock => searchStock.id.includes(detailStock.searchTarget.id));
    var index = stockInfo.findIndex(i => i.id == detailStock.searchTarget.id);
    
    console.log(stockInfo[index]);
    const selectedStock = stockInfo[index]; 
    console.log(selectedStock);

    return(
        <div style={{marginTop: '50px', marginLeft: '2%', marginRight: '2%', textAlign: 'left', paddingBottom: '50px'}}>
            <div className={styles.box}>
                <div style={{display: 'flex'}}>
                <img src={selectedStock.imgURL} 
                    style={{width: '50px', height: '50px', marginLeft: '50px', marginTop: '70px', borderRadius: '4px'}}></img>
                        <InfoHeader key={selectedStock.id} stockInfo={selectedStock}></InfoHeader>
                </div>
                        <InfoContent key={selectedStock.id} stockInfo={selectedStock}></InfoContent>
                    <InfoLineGraph></InfoLineGraph>
                        <InfoList key={selectedStock.id} stockInfo={selectedStock}></InfoList>
            </div>
        </div>
    );
}