
import styles from './css/News.module.css'
import NewsRow from './row/NewsRow';

export default function News() {

    const articles = [
        {
            id: 1,
            title: 'News 1',
            desc: 'News 1 description',
            thumbnail: 'img/ka_article_img.png'

        },
        {
            id: 2,
            title: 'News 2',
            desc: 'News 2 description',
            thumbnail: 'img/ka_article_img.png'

        },
        {
            id: 3,
            title: 'News 3',
            desc: 'News 3 description',
            thumbnail: 'img/ka_article_img.png'

        },
    ]
    return (
        <div className={styles.box}>
            <div>
                    {articles.map(article => (
                        <NewsRow key={article.id} article={article}></NewsRow>
                    ))}
            </div>
        </div>
    );
}