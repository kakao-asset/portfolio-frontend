import { useState } from "react";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div>
            <input type="text" value={search} onChange={onChange} style={{
                width: '400px',
                height: '30px',
                backgroundColor: '#1F1F1F',
                border: '1px solid #D2D2D2',
                background: 'url(img/ka_search_icon_s.png) no-repeat scroll 1px 1px',
                backgroundSize: 'contain',
                backgroundPosition: 'left',
                position: 'absolute',
                top: '40px',
                left: '70%',
                bottom: '5px'

                
            }}></input>
        </div>
    );
}