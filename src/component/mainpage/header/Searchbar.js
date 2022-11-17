import {useState} from "react";
import Modal from 'react-modal';
import { Comments } from "./Coments";
import CommentRow from "./ComentRow";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// 장 시작 때 받아온 데이터 정보로 사용하면 될 거 같음


export default function Searchbar() {
    const navigate = useNavigate();
    const navigateToDetail = () => {
        navigate("/detail");
        window.location.reload();
    }

    const setSearchTargetToLocal = (searchTarget) => {
        localStorage.setItem('searchStock',JSON.stringify({searchTarget}));
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
            url: `${process.env.REACT_APP_BACKEND_URI}/api/stock/search?word=${word}`,
            headers: {"Access-Control-Allow-Origin": "*"},
            responseEncoding: 'binary'
        })
        .then((res) => {
            var result = res.data.data;
            setSearchList(result);
            console.log(searchList);
        }).catch((err) => {
            console.log("데이터 받아오기 에러", err);
        })

    }

    const CommentRequest = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BACKEND_URI}/api/stock/rank`,
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then((res) => {
            var result = res.data.data;
            setCommentList(result);
        }).catch((err) => {
            console.log("데이터 받아오기 에러", err);
        })
    }


    return (
        <>
            <input type="text" onClick={() => {setModalIsOpen(true); CommentRequest();}} style={{
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
            <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={() => {setModalIsOpen(false); setSearchFilter(''); } }
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
                    {searchList != '' && search != '' && searchList.map((searchStock)=>
                    (<ul><button onClick={()=>{navigateToDetail(); 
                        setSearchTargetToLocal(searchStock);}} style={{
                        color: 'white', 
                        display: 'block', 
                        width: 'fit-content',
                        backgroundColor: '#1F1F1F',
                        border: 'none',
                        fontSize: '20px'
                        }}>{searchStock.name}</button></ul>))}
                    </div>
                
                    <div style={{ marginTop: '200px', marginLeft: '20px', marginBottom: '30px', dYisplay: 'flex', whiteSpace: 'nowrap'}}>
                        {commentList != '' && commentList.map((commentStock)=>(<button
                        onClick={()=>{navigateToDetail(); 
                            setSearchTargetToLocal(commentStock);}}
                            style = {{
                                width: 'fit-content',
                                height: '30px',
                                backgroundColor: '#9B51E0',
                                borderRadius: '5px',
                                marginTop: '20px',
                                marginRight: '15px',
                                paddingLeft: '15px',
                                paddingRight: '20px',
                                textAlign: 'center',
                                paddingBottom: '25px',
                                color: 'white',
                                whiteSpace: 'nowrap'
                            }}
                        >#{commentStock.name}</button>))}
                        {/* {Comments.map(comment => (
                            <CommentRow key={comment.id} comment={comment}></CommentRow>
                        ))} */}
                    </div>
                </div>
            </Modal>
        </>
    );
}