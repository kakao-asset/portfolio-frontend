import ControllerChart from "./ControllerChart";
import SearchKewordChart from "./SearchKewordChart";
import TimesLoginChart from "./TimesLoginChart";
import WeeksLoginChart from "./WeeksLoginChart";

export default function Admin() {
    return(
        <div text-align="center">
            <div style={{display: 'inline-block'}}>
                <div style={{ display: 'flex', marginTop: '2rem'}}>
                    <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'2rem'}}>요일별 사용자 추이</h3>
                    <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'44rem'}}>시간대별 사용자 추이</h3>
                </div>
                <div style={{display: 'flex'}}>
                <WeeksLoginChart></WeeksLoginChart>
                <TimesLoginChart></TimesLoginChart>
                </div>
                <div style={{ display: 'flex', marginTop: '2rem'}}>
                    <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'2rem'}}>사용자 검색 키워드</h3>
                    <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'44rem'}}>컨트롤러별 처리 속도</h3>
                </div>
                <div style={{display: 'flex'}}>
                <SearchKewordChart></SearchKewordChart>
                <ControllerChart></ControllerChart>
                </div>
                
            </div>
        </div>
    );
};
