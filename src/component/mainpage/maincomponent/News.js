
import styles from './css/News.module.css'
import NewsRow from './row/NewsRow';
import { useState, useEffect } from "react";
import axios from "axios";

export default function News({stockCode}) {
    const [articles, setArticles] = useState([]);

    function getNews(){
        axios({
            method: "get",
            url: `/main/news?stockCode=${stockCode}`,
            headers: {"Access-Control-Allow-Origin": "*"},
            responseEncoding: 'binary'
        })
        .then((res) => {
            if (res.data.error == 'No Index') {
                setArticles([]);
            } else {
                setArticles(res.data);
            }        
        }).catch((err) => {
            console.log("데이터 받아오기 에러", err);
        })
    }

    useEffect(()=> {
        getNews();
    }, [stockCode]);

    console.log(articles);

    return (
        <div className={styles.box}>
            <div style={{display: 'flex'}}> 
            <img alt='ui_news_icon' src='img/ui_today_news.png' style={{width: '250px', marginLeft: '5rem', marginTop: '3rem'}}></img>
            {/* <h3 style={{color: 'white', paddingTop: '40px', paddingLeft: '100px', fontSize: '30px'}}>오늘의 뉴스</h3>
            <p style={{color: 'white', paddingTop: '61px', paddingLeft:'5px', fontSize: '20px'}}>를 알려드려요</p> */}
            </div>
            <div style={{marginLeft: '5rem', marginRight: '5rem'}}>
            <div>
            
                    {articles.map(article => (
                        <NewsRow key={article.newsId} article={article}></NewsRow>
                    ))}
            </div>
            </div>
        </div>
    );
}