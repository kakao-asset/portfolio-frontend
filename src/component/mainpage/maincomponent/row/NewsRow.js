import React from "react";

    export default function NewsRow  ({article})  {
        const title = article.title;
        const desc = article.summary;
        const thumbnail = article.imageUrl;
        const newslink = article.detail_url;
        const keywords = article.keywords;

        return (
            <div style={{marginTop: '30px', marginBotton: '20px', marginRight: '20px'}} onClick={() => window.open(`${newslink}`)}>
                <ul>
                <div style={{display: 'flex'}}>
                <div>
                    <img src= {thumbnail== null? "img/ka_noimage.png": thumbnail} style={{float: 'left', width: '350px', height: '200px', marginTop: '10px'}}></img>
                </div>
                <div style={{display: 'column', marginTop: '20px'}}>
                    <ul>
                    <span style={{color: 'white', fontSize: '25px',}}>{title}</span>
                        <div style={{alignSelf: 'flex-start', marginTop: '10px', fontSize: '15px'}}>
                            <span style={{color: 'white'}}>{desc}</span>
                            
                        </div>
                        <br></br>
                        {keywords.map((keyword)=> (<text style={{color: '#ccc', fontSize: '20px'}}>#{keyword} </text>))}
                        <br></br>
                        <span style={{color: 'white'}}>{article.updatedAt}</span>
                    </ul>
                </div>
                </div>
                </ul>
            </div>
        );
    }

