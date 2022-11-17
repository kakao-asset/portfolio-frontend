import styles from "./css/Login.module.css"
import { Route, useNavigate } from "react-router-dom";
import KakaoLoginButton from "./KakaoLoginButton";


export default function Login() {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate("/Main");
    }



    return (
        <div style={{textAlign: "center"}}>
            <div style={{display: 'flex'}}>
                <div className={styles.leftBox}>
                    <img className="kaLogo" src="img/ka_logo_kaasset.png" alt="kaLogo" style={
                        {paddingTop: '15%', width: '310px'}}></img>
                    
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
                    <button 
                    style={{marginTop: '290px', 
                    marginLeft: '550px', 
                    color: 'black',
                    backgroundColor: 'white',
                    border: '0px',
                    paddingTop: '10px',
                    paddingBottom: '12px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    borderRadius: '5px'}}>
                        관리자 로그인</button>
                </div>
            </div>
        </div>
    );
}