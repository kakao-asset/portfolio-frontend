import styles from "./css/Ranking.module.css";
import RankingTable from "./RankingTable";

export default function Ranking({ selectedRankingStock }) {

    const selectedSetorName = selectedRankingStock.sectorName;
    const selectedSectorCode = selectedRankingStock.sectorCode;

    return (
        <div className={styles.box} style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex' }}>
                <img alt="ranking_icon" src="img/ui_ranking_icon.png" style={{ width: '100px', height: '100px', marginLeft: '5rem', marginTop: '2rem' }}></img>
                <h3 style={{ color: 'white', paddingTop: '35px', paddingLeft: '1rem', fontSize: '35px' }}>{selectedSetorName}</h3>
                <p style={{ color: 'white', paddingTop: '65px', paddingLeft: '5px', fontSize: '20px' }}>에 속한 다른 종목들은 지금...</p>
            </div>
            <div style={{ display: 'flex', paddingTop: '20px', paddingLeft: '150px' }}>
                <RankingTable sectorCode={selectedSectorCode}></RankingTable>
                <img style={{ width: '150px', height: 'fit-content', paddingTop: '700px', paddingLeft: '30px' }} alt="ranking_img" src="img/ka_ranking_img.png"></img>
            </div>
        </div>
    );
}