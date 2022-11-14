import { useState } from "react";
import Modal from 'react-modal';
import SearchRow from "./SearchRow";
import styles from "./css/SearchList.module.css"
import { Comments } from "./Coments";
import CommentRow from "./ComentRow";
import { TestStockData } from "../../../data/TestStockData";
// 장 시작 때 받아온 데이터 정보로 사용하면 될 거 같음


export default function Searchbar() {

    const [search, setSearch] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                left: '1300px',
                bottom: '5px',
                color: 'white'
            }}></input>
            
            {/* 검색바 클릭 시 하단에 생성되는 검색 모달 */}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 0)'
                    },
                    content: {
                        position: 'relative',
                        top: '40px',
                        left: '1080px',
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
                    <div style={{paddingTop: '30px'}}>
                    
                        {TestStockData.filter(searchStock => searchStock.name.replace(" ","").toUpperCase().includes(search.replace(" ","").toUpperCase())).map((searchStock) => (
                        <SearchRow key={searchStock.symbolCode} searchTarget={searchStock} className={styles.searchItem} 
                        ></SearchRow>
                    ))}
                    
                    </div>

                    <div style={{ marginTop: '200px', marginLeft: '20px', marginBottom: '30px', display: 'flex' }}>
                        {Comments.map(comment => (
                            <CommentRow key={comment.id} comment={comment}></CommentRow>
                        ))}
                    </div>
                </div>
            </Modal>
        </>
    );
}