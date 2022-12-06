import styles from "./css/Ranking.module.css";
import RankingTable from "./RankingTable";
import { rankingColumn } from './RankingColumn';
import { rankingData } from './RankingData';

export default function Ranking({selectedRankingStock}){
    // ----------------서버에 요청--------------------
    // selectedRankingStockName의 업종으로 쿼리 날리기 (<-그럼 처음에 stockHold에서 업종 코드도 함께)
    // OR 이름 값만 보내면 백엔드에서 그 이름에 해당하는 업종별 데이터 찾아서 보내주기
    // 해당 업종 상위 10? 개의 데이터 불러와서 테이블에 맞는 데이터 형식으로 바꿔 넣기
    // 랭킹 데이터는 백엔드에서 숫자 세자리마다 , 찍은 형태로 넘겨 받기

    // ----------------테이블에 들어갈 랭킹 데이터 형식---------------------
    // {
    //     name: "삼성전자",
    //     tradePrice: "100000",
    //     prevAccTradeVolumeChangeRate: "267400",
    //     accTradeVolume: "558612",
    //     accTradePrice: "13994815",
    //     marketCap: "3689326",
    //     foreignRatio: "55%"

    // } 

    const selectedSetorName = selectedRankingStock.sectorName;
    const selectedSectorCode = selectedRankingStock.sectorCode;
    
    return(
        <div className={styles.box} style={{marginTop: '20px'}}>
            <div style={{display: 'flex'}}> 
            <h3 style={{color: 'white', paddingTop: '40px', paddingLeft: '100px'}}>{selectedSetorName}</h3>
            <p style={{color: 'white', paddingTop: '45px', paddingLeft:'5px'}}>에 속한 다른 주식들은 지금...</p>
            </div>
            <div style={{display: 'flex', paddingTop: '20px', paddingLeft: '150px'}}>
            <RankingTable rankingColumn={rankingColumn} rankingData={rankingData} sectorCode={selectedSectorCode}></RankingTable>
            <img style={{width: '150px', height: 'fit-content', paddingTop: '700px', paddingLeft: '30px'}} alt="ranking_img" src="img/ka_ranking_img.png"></img>
            {/* <RankingCustom></RankingCustom> */}
            </div>
        </div>
    );
}