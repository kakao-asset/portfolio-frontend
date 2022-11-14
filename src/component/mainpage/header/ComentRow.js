import styles from "./css/CommentBox.module.css"
export default function CommentRow({comment}){
    const stockName = comment.sName;
    return (
        <>
            <div className={styles.div}>
                <p style={{color: 'white'}}>#{stockName}</p>
            </div>
        </>
    );
}