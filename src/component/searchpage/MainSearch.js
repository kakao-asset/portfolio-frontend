
import Header from "../mainpage/header/Header";
import Info from "./Info";

export default function MainSearch(){
    

    var searchStock = localStorage.getItem('searchStock');
    const detailStock = JSON.parse(searchStock);
    console.log(detailStock);
    return (

        
        
        <div>
            
            <Header>
            </Header>
            <Info>
            </Info>

        </div>
    );
}