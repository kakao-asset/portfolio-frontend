
import styles from './css/News.module.css'
import NewsRow from './row/NewsRow';
import { useState, useEffect } from "react";
import axios from "axios";

export default function News({stockCode}) {
    const [articles, setArticles] = useState([]);
    // const getNews = async () => await axios({
    //     method: "get",
    //     url: `${process.env.REACT_APP_BACKEND_URI}/main/news?stockCode=${stockCode}`,
    //     headers: {"Access-Control-Allow-Origin": "*"},
    //     responseEncoding: 'binary'
    // })
    // .then((res) => {
    //     console.log("*******************************************");
    //     console.log(res);
    //     console.log("*******************************************");
    // }).catch((err) => {
    //     console.log("use_stock 데이터 에러", err);
    // })

    // getNews();

    function getNews(){
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BACKEND_URI}/main/news?stockCode=${stockCode}`,
            headers: {"Access-Control-Allow-Origin": "*"},
            responseEncoding: 'binary'
        })
        .then((res) => {
            console.log("*******************************************");
            console.log(res.data);
            console.log("*******************************************");
            setArticles(res.data);
        }).catch((err) => {
            console.log("데이터 받아오기 에러", err);
        })
    }

    useEffect(()=> {
        getNews();
    }, [stockCode]);

    // const articles = [
    //     {
    //         id: 1,
    //         title: 'News 1',
    //         desc: 'News 1 description',
    //         thumbnail: 'img/ka_article_img.png'

    //     },
    //     {
    //         id: 2,
    //         title: 'News 2',
    //         desc: 'News 2 description',
    //         thumbnail: 'img/ka_article_img.png'

    //     },
    //     {
    //         id: 3,
    //         title: 'News 3',
    //         desc: 'News 3 description',
    //         thumbnail: 'img/ka_article_img.png'

    //     },
    // ]
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