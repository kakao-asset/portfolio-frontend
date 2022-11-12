import Header from "./header/Header";
import MainPortfolio from "./MainPortfolio";

export default function Main() {
    // 사용자가 보유한 주식 목록 - DB에서 가져옴 
    // useState 로 변경 필요
    // 지금은 stockHold에 임시 데이터 넣어서 작업 중
    const stockHold = [
        {
            name: '포스코스틸리온',
            value: 20,
            avgPrice: 400000
        },
        {
            name: '일진다이아',
            value: 10,
            avgPrice: 100000
        },
        {
            name: '뉴트리',
            value: 15,
            avgPrice: 250000
        },
    ]

    return (
        <div>
                <Header></Header>
                <MainPortfolio stockHold={stockHold}></MainPortfolio>
        </div>
    );
}