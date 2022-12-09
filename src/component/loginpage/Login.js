import styles from "./css/Login.module.css"
import { Route, useNavigate } from "react-router-dom";
import KakaoLoginButton from "./KakaoLoginButton";
import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Swal from "sweetalert2";


export default function Login() {
    const navigate = useNavigate();

    const navigateToAdmin = () => {
        if (document.getElementById("admin_pw").value == "kasset"){
            navigate("/admin");
        }
        else {
            Swal.fire({
                icon: "error",
                text: "관리자 비밀번호를 확인해주세요",
                showConfirmButton: true,
                
            }).then(result => {
                if (result.isConfirmed){
                    document.location.href = "/";
                }
            });
        }
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <div text-align="center" >
        <div style={{display: 'inline-block', paddingTop: '5%', paddingBottom: '5%'}}>
            <div style={{display: 'flex'}}>
                <div className={styles.leftBox}>
                    <img className="kaLogo" src="img/ka_logo_s.png" alt="kaLogo" style={
                        {paddingTop: '15%'}}></img>
                    
                    <img src="img/ka_login_page_img.png" alt="ka_login_page_img_1"
                    style={{width: '850px'}}
                    ></img>
                </div>
                <div className={styles.rightBox}>
                    <div>
                    <img className="kaLoginTypo" src="img/ka_login_typo_s.png" alt="kaLoginTypo" style={
                        {paddingTop: '35%', paddingRight: '30%'}
                    }></img>
                    </div>
                    <div>
                    <KakaoLoginButton/>
                    </div>

                    {/* <img onClick={navigateToAdmin} style={{
                        marginTop: '280px',
                        marginLeft: '550px',
                        width: '100px'
                    }} src="img/ka_admin_login_img.png" alt="kaAdminLogin"></img> */}

                    <img onClick={()=>setModalIsOpen(true)} style={{
                        marginTop: '280px',
                        marginLeft: '550px',
                        width: '100px'
                    }} src="img/ka_admin_login_img.png" alt="kaAdminLogin"></img>

                </div>


            </div>
            <img alt="kaUnderText" src="img/ka_login_text.png" style={{
                    marginTop: '2rem', width: '400px'}}>
                </img>
            </div>

            <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={() => {setModalIsOpen(false);}}
            style={{
                overlay: {
                    position: 'absolute',
                    backgroundColor: 'rgba(31, 31, 31, 1)',
                    top: '0',
                    left: '0',

                    
                },
                content: {
                    position: 'relative',
                    top: '13rem',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    margin: 'auto',
                    background: '#1F1F1F',
                    borderColor: '#1F1F1F',


                }
            }}>
                <div style={{textAlign: 'center'}}>
                <img src="img/ka_admin_login.png"></img>
                <h2 style={{color: 'white'}}>관리자 비밀번호</h2>
                <div style={{textAlign: 'center'}}>
                <input id="admin_pw" type="password" style={{height: '40px', fontSize: '40px', width: '150px', paddingBottom: '10px', }}></input>
                <button style={{
                backgroundColor: '#366cc2',
                borderColor: '#366cc2',
                width: 'fit-content',
                height: '50px',
                borderRadius: '4px',
                paddingLeft: '10px',
                paddingRight: '10px',
                textAlign: 'center',
                paddingTop: '5px',
                paddingBottom: '5px',
                color: 'white',
                marginLeft: '10px',
                marginBottom: '10px'
            }} onClick={navigateToAdmin}>ENTER</button>
                </div>
               
                <br></br>
                <div onClick={()=> {setModalIsOpen(false)}}>
                <AiOutlineArrowLeft size='15px' color="white" style={{marginTop: '3rem'}}></AiOutlineArrowLeft><text  style={{color: 'white', fontSize: '15px'}}> 뒤로가기</text>
                </div>
                </div>
            </Modal>
        </div>
         </>
    );
}