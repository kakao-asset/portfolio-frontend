export default function NoStockRow() {
    return (
        <div>
            <p style={{ color: 'white', paddingTop: '5rem' }}>보유한 자산이 없습니다.</p>
            <p style={{ color: 'white', paddingTop: '1rem', paddingBottom: '2rem' }}>자산을 추가해 포트폴리오를 만들어 보세요.</p>
            <div text-align='center'>
                <div style={{ display: 'inline-block', marginTop: '2rem' }}>
                    <div style={{ display: 'flex' }}>
                    </div>
                </div>
            </div>
            <img alt="empty image" src="img/ka_lion_loading.gif"></img>
        </div>
    );
};
