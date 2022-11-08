import { useState } from "react";
import SearchModal from "./SearchModal";
import Modal from 'react-modal';
import sampledata from "./sampledata.json"
import SearchRow from "./SearchRow";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);;
    const onChange = (e) => {
        setSearch(e.target.value);
    }


    const searchData = [
        {
            "stocks": [
                {
                    "id": 0,
                    "sName": ["네이버", "naver"]
                },
                {
                    "id": 1,
                    "sName": ["카카오", "kakao"]
                },
                {
                    "id": 2,
                    "sName": ["삼성", "samsung"]
                }

            ]
        }
    ];

    const searchList = [...searchData];

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
                        left: '1100px',
                        overflow: 'auto',
                        borderRadius: '4px',
                        width: '600px',
                        height: '700px',
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
                </div>
                
            </Modal>
        </>
    );
}