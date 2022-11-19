import styles from "./css/Login.module.css"
import { Route, useNavigate } from "react-router-dom";
import KakaoLoginButton from "./KakaoLoginButton";


export default function Login() {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate("/Main");
    }



    return (
        <>
        <div text-align="center" >
        <div style={{display: 'inline-block'}}>
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

                    <img style={{
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
        </div>
         </>
    );
}