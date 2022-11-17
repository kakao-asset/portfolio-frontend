
import styles from './css/News.module.css'
import NewsRow from './row/NewsRow';
import { useState, useEffect } from "react";
import axios from "axios";

export default function News({stockCode}) {
    const [articles, setArticles] = useState([]);

    function getNews(){
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BACKEND_URI}/main/news?stockCode=${stockCode}`,
            headers: {"Access-Control-Allow-Origin": "*"},
            responseEncoding: 'binary'
        })
        .then((res) => {
            setArticles(res.data);
        }).catch((err) => {
            console.log("데이터 받아오기 에러", err);
        })
    }

    useEffect(()=> {
        getNews();
    }, [stockCode]);


    return (
        <div className={styles.box}>
            <div>
                    {articles.map(article => (
                        <NewsRow key={article.newsId} article={article}></NewsRow>
                    ))}
            </div>
        </div>
    );
}