import { useState } from "react";
import SearchModal from "./SearchModal";
import Modal from 'react-modal';

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);;
    const onChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <input type="text" value={search} onChange={{onChange}} onClick={()=> setModalIsOpen(true)} style={{
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
            <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        backgroundColor: '#1F1F1F'
                    },
                }}>검색 모달 창</Modal>
        </div>
    );
}