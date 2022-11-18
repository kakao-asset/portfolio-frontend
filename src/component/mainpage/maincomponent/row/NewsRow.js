import React from "react";

    export default function NewsRow  ({article})  {
        const title = article.title;
        const desc = article.summary;
        const thumbnail = article.imageUrl;
        const newslink = article.detail_url;

        return (
            <div style={{marginTop: '40px', marginBotton: '20px', marginRight: '20px'}} onClick={() => window.open(`${newslink}`)}>
                <ul>
                <div style={{display: 'flex'}}>
                <div>
                    <img src= {thumbnail== null? "../../img/ka_noimage.png": thumbnail} style={{float: 'left', width: '200px', height: '150px', marginTop: '5px'}}></img>
                </div>
                <div style={{display: 'column', marginTop: '15px'}}>
                    <ul>
                    <span style={{color: 'white'}}>{title}</span>
                        <div style={{alignSelf: 'flex-start', marginTop: '10px', fontSize: 'small'}}>
                            <span style={{color: 'white'}}>{desc}</span>
                        </div>
                    </ul>
                </div>
                </div>
                </ul>
            </div>
        );
    }

