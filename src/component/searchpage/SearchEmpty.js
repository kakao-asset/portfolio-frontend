import Header from "../mainpage/header/Header";

export default function SearchEmpty() {
    return(
       
            <div>
                <p style={{color: 'white', paddingTop: '10rem'}}>검색 데이터를 찾고 있어요.</p>
                <img alt="empty image" src="img/ka_search_loading.png"></img>
            </div>
    );    
};
