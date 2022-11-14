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
        <div style={{width: '100%', height: '50px'}}>
            <div style={{display: 'flex', marginTop: '1.5%', marginLeft: '1.5%', width: '100%', height: '55px'}} >              
                <img  onClick={navigateToMain} alt="kalogo" src="img/ka_logo_s.png" style={{float: 'left'}}></img>
                
                    <Searchbar></Searchbar>
                
                    <img alt="kaprofile" src={JSON.parse(localStorage.getItem("userData")).profile} style={
                        {float: 'right',
                        position: 'absolute',
                        top: '30px',
                        left: '1730px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '5px'
                        }} onClick={()=>setModalIsOpen(true)}></img>
                        <LogoutButton></LogoutButton>
                
            </div>
            <div style={{borderBottom: '0.5px solid', color: "#d2d2d2", marginLeft: '1.5%', marginRight: '1.5%'}}></div>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    position: 'absolute',
                                    backgroundColor: 'rgba(255, 255, 255, 0)'
                                },
                                content: {
                                    position: 'relative',
                                    top: '100px',
                                    left: '1730px',
                                    borderRadius: '4px',
                                    width: 'fit-content',
                                    height: 'fit-content',
                                    background: '#1F1F1F'
            
                                }
                            }}>
                    <UnlinkButton></UnlinkButton>
            </Modal>
        </div>

    );
}