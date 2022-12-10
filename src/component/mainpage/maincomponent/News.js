import styles from './css/News.module.css'
import NewsRow from './row/NewsRow';
import { useState, useEffect } from "react";
import axios from "axios";

export default function News({ stockCode }) {
    const [articles, setArticles] = useState([]);

    function getNews() {
        axios({
            method: "get",
            url: `/main/news?stockCode=${stockCode}`,
            headers: { "Access-Control-Allow-Origin": "*" },
            responseEncoding: 'binary'
        })
            .then((res) => {
                if (res.data.error == 'No Index') {
                    setArticles([]);
                } else {
                    setArticles(res.data);
                }
            }).catch((err) => {
            })
    }

    useEffect(() => {
        getNews();
    }, [stockCode]);

    return (
        <div className={styles.box}>
            <div style={{ display: 'flex' }}>
                <img alt='ui_news_icon' src='img/ui_today_news.png' style={{ width: '250px', marginLeft: '5rem', marginTop: '3rem' }}></img>
            </div>
            <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
                <div>

                    {articles.map(article => (
                        <NewsRow key={article.newsId} article={article}></NewsRow>
                    ))}
                </div>
            </div>
        </div>
    );
}