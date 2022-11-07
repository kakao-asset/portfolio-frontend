import Portfolio from "./maincomponent/Portfolio"
import Budget from "./maincomponent/Budget"
import ProfitLoss from "./maincomponent/ProfitLoss";
import News from "./maincomponent/News";

export default function MainPortfolio() {
    return (
        <div style={{marginLeft: '2%', marginRight: '2%', textAlign: 'left', }}>
            <div style={{marginTop: '10px'}}>
                <h3 style={{color: 'white', paddingTop: '10px', marginLeft:'20px'}}>자산</h3>
            </div>
        <div style={{display: "flex"}}>
            {<Portfolio></Portfolio>}
            {<Budget></Budget>}
        </div>
        <div style={{marginTop: '10px', display: 'flex'}}>
            <h3 style={{color: 'white', paddingTop: '10px', marginLeft:'20px'}}>손익(타임라인)</h3>
            <h3 style={{color: 'white', paddingTop: '10px', marginLeft:'910px'}}>뉴스</h3>
        </div>
        <div style={{display: "flex"}}>
            {<ProfitLoss></ProfitLoss>}
            {<News></News>}
        </div>
        </div>
    );
}