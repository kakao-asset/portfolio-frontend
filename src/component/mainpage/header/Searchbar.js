import { useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Searchbar() {

    const navigate = useNavigate();
    const navigateToDetail = () => {
        navigate("/detail");
        window.location.reload();
    }

    const setSearchTargetToLocal = (searchTarget) => {
        localStorage.setItem('searchStock', JSON.stringify({ searchTarget }));
    }


    const [search, setSearch] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchList, setSearchList] = useState("");
    const [commentList, setCommentList] = useState("");

    const setSearchFilter = (search) => {
        SearchRequest(search);
    }

    const onChange = (e) => {
        setSearch(e.target.value);
        SearchRequest(e.target.value);
    }

    const SearchRequest = (search) => {
        var word = search;
        axios({
            method: "get",
            url: `/api/stock/search?word=${word}`,
            headers: { "Access-Control-Allow-Origin": "*" },
            responseEncoding: 'binary'
        })
            .then((res) => {
                var result = res.data.data;
                setSearchList(result);
            }).catch((err) => {
            })

    }

    const CommentRequest = () => {
        axios({
            method: "get",
            url: `/api/stock/rank`,
            headers: { "Access-Control-Allow-Origin": "*" }
        })
            .then((res) => {
                var result = res.data.data;
                setCommentList(result);
            }).catch((err) => {
            })
    }


    return (
        <>
            <input id="searchBar" type="text" onClick={() => { setModalIsOpen(true); CommentRequest(); }} style={{
                width: '400px',
                height: '30px',
                backgroundColor: '#1F1F1F',
                border: '1px solid #D2D2D2',
                background: 'no-repeat scroll 1px 1px',
                backgroundSize: 'contain',
                backgroundPosition: 'left',
                position: 'absolute',
                top: '2rem',
                left: '65rem',
                bottom: '5px',
                color: 'white',
                visibility: modalIsOpen ? 'hidden' : 'visible'
            }}></input>

            {/* 검색바 클릭 시 하단에 생성되는 검색 모달 */}
            <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={() => { setModalIsOpen(false); setSearchFilter(''); }}
                style={{
                    overlay: {
                        position: 'absolute',
                        backgroundColor: 'rgba(31, 31, 31, 0)',
                        top: '0',
                        left: '0',
                    },
                    content: {
                        position: 'relative',
                        top: '3rem',
                        bottom: '0',
                        left: '21.5rem',
                        right: '0',
                        margin: 'auto',
                        borderRadius: '4px',
                        width: '600px',
                        height: 'fit-content',
                        background: '#1F1F1F',
                        borderColor: '#000'
                    }
                }}>
                <div style={{}}>
                    <input autoFocus placeholder="검색어를 입력하세요" id="searchText" name="searchText" type="text" onChange={onChange} style={{
                        width: '600px',
                        height: '30px',
                        backgroundColor: '#1F1F1F',
                        border: '1px solid #000',
                        background: 'no-repeat scroll 1px 1px',
                        backgroundSize: 'contain',
                        backgroundPosition: 'left',
                        position: 'absolute',
                        color: 'white',
                        top: '5px',
                        left: '10px',
                        right: '10px',
                        paddingLeft: '10px'
                    }}></input>
                    <div style={{ paddingTop: '30px' }}>
                        {searchList != '' && search != '' && searchList.map((searchStock) =>
                        (<ul><button onClick={() => {
                            navigateToDetail();
                            setSearchTargetToLocal(searchStock);
                        }} style={{
                            color: 'white',
                            display: 'block',
                            width: 'fit-content',
                            backgroundColor: '#1F1F1F',
                            border: 'none',
                            fontSize: '20px'
                        }}>{searchStock.name}</button></ul>))}
                    </div>

                    <div style={{ marginTop: '70px', marginLeft: '10px', marginBottom: '30px', width: '600px', textAlign: 'center' }}>
                        {commentList != '' && commentList.map((commentStock) => (<button
                            onClick={() => {
                                navigateToDetail();
                                setSearchTargetToLocal(commentStock);
                            }}
                            style={{
                                width: 'fit-content',
                                height: '33px',
                                backgroundColor: '#9B51E0',
                                borderRadius: '5px',
                                border: '0px',
                                marginTop: '20px',
                                marginRight: '15px',
                                paddingTop: '5px',
                                paddingLeft: '20px',
                                paddingRight: '25px',
                                textAlign: 'center',
                                paddingBottom: '20px',
                                color: 'white',
                                whiteSpace: 'nowrap'
                            }}
                        ># {commentStock.name}</button>))}
                    </div>
                </div>
            </Modal>
        </>
    );
}