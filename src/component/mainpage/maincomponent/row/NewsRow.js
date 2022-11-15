import React from "react";
    export default function NewsRow  ({article})  {
        const title = article.title;
        const desc = article.summary;
        const thumbnail = article.imageUrl;
        console.log(article);
        return (
            <div style={{marginTop: '40px', marginBotton: '20px'}}>
                <ul>
                <div style={{display: 'flex'}}>
                <div>
                    <img src="img/ka_article_img.png" style={{float: 'left'}}></img>
                </div>
                <div style={{display: 'column'}}>
                    <ul>
                    <span style={{color: 'white', fontSize: 'small' }}>{title}</span>
                        <div style={{alignSelf: 'flex-start', marginTop: '10px'}}>
                            <span style={{color: 'white'}}>{desc}</span>
                        </div>
                    </ul>
                </div>
                </div>
                </ul>
            </div>
        );
    }

