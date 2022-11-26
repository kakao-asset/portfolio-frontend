import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import LogoutButton from "../../loginpage/LogoutButton";
import UnlinkButton
    from "../../loginpage/UnlinkButton";
import { useState } from "react";
import Modal from 'react-modal';

export default function Header() {
    // 헤더 로고 영역 클릭 시 메인 페이지로 이동 
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate("/main");
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div style={{ width: '100rem', height: '5rem'}}>
            <div style={{
                display: 'flex', flexDirection: 'row', marginTop: '1.5rem', marginLeft: '1.5rem', marginRight: '1.5rem', width: '100rem', height: '5rem',
                borderBottom: '0.5px solid', color: "#d2d2d2", position: "relative"
            }} >
                <div style={{width: '15rem'}}>
                    <img onClick={navigateToMain} alt="kalogo" src="img/ka_logo_s.png" style={{ float: 'left', paddingTop: '1rem' }}></img>
                </div>
                <div style={{width: '30rem'}}>
                    <div>
                        <Searchbar></Searchbar>
                    
                    </div>

                <div>
                    <img alt="kaprofile" src={JSON.parse(localStorage.getItem("userData")).profile} style={
                        {
                            float: 'right',
                            position: 'absolute',
                            top: '1rem',
                            left: '92rem',
                            width: '50px',
                            height: '50px',
                            borderRadius: '5px'
                        }} onClick={() => setModalIsOpen(true)}></img>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                         style={{
                             overlay: {
                             position: 'absolute',
                             backgroundColor: 'rgba(255, 255, 255, 0)'
                            },
                    content: {
                        position: 'absolute',
                        top: '100px',
                        left: '1650px',
                        borderRadius: '4px',
                        width: 'fit-content',
                        height: 'fit-content',
                        background: '#1F1F1F',

                    },
                }}>
                    
                <UnlinkButton></UnlinkButton>
            </Modal>
            </div>
                    <LogoutButton></LogoutButton>
                </div>

            </div>
            {/* <div style={{borderBottom: '0.5px solid', color: "#d2d2d2", marginLeft: '1.5rem', marginRight: '1.5rem'}}></div> */}
{/* 
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 0)'
                    },
                    content: {
                        position: 'relative',
                        top: '100px',
                        left: '',
                        borderRadius: '4px',
                        width: 'fit-content',
                        height: 'fit-content',
                        background: '#1F1F1F'

                    }, position: 'relative'
                }}>
                <UnlinkButton></UnlinkButton>
            </Modal> */}
        </div>

    );
}