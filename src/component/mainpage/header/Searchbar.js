import { useState } from "react";
import SearchModal from "./SearchModal";
import Modal from 'react-modal';
import SearchRow from "./SearchRow";
import { Stocks } from "./Stocks";
import styles from "./css/SearchList.module.css"
import { Comments } from "./Coments";
import CommentRow from "./ComentRow";
import { Link } from "react-router-dom";


export default function Searchbar() {
    const [search, setSearch] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);;
    const onChange = (e) => {
        setSearch(e.target.value);
    }


    return (
        <>
            <input type="text" onClick={() => setModalIsOpen(true)} style={{
                width: '400px',
                height: '30px',
                backgroundColor: '#1F1F1F',
                border: '1px solid #D2D2D2',
                background: 'no-repeat scroll 1px 1px',
                backgroundSize: 'contain',
                backgroundPosition: 'left',
                position: 'absolute',
                top: '40px',
                left: '70%',
                bottom: '5px',
                color: 'white'
            }}></input>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        backgroundColor: 'rgba(255, 255, 255, 0)'
                    },
                    content: {
                        position: 'relative',
                        top: '40px',
                        left: '1095px',
                        overflow: 'auto',
                        borderRadius: '4px',
                        width: '600px',
                        height: 'fit-content',
                        background: '#1F1F1F'

                    }
                }}>
                <div style={{}}>
                    <input id="searchText" name="searchText" type="text" onChange={onChange} style={{
                        width: '600px',
                        height: '30px',
                        backgroundColor: '#1F1F1F',
                        border: '1px solid #D2D2D2',
                        background: 'no-repeat scroll 1px 1px',
                        backgroundSize: 'contain',
                        backgroundPosition: 'left',
                        position: 'absolute',
                        color: 'white',
                        top: '5px',
                        left: '10px',
                        right: '10px'
                    }}></input>
                    <ul className={styles.searchList}>
                        {Stocks.filter(searchStock=>searchStock.sName.toLowerCase().includes(search.toLowerCase())).map((searchStock)=>(
                             <li key={searchStock.id} className={styles.searchItem} onClick={
                                <Link to={"/detail/" +(searchStock.id)}></Link>
                             }>{searchStock.sName}</li>
                        ))}
                    </ul>
                    <div style={{marginTop: '200px', marginLeft: '20px', marginBottom: '30px', display: 'flex'}}>
                        {Comments.map(comment => (
                        <CommentRow key={comment.id} comment={comment}></CommentRow>
                        ))}
                    </div>

                </div>
                
            </Modal>
        </>
    );
}