import styles from "./css/Login.module.css"
import { Route, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate("/Main");
    }



    return (
        <div style={{textAlign: "center"}}>
            <div style={{display: 'flex'}}>
                <div className={styles.leftBox}>
                    <img className="kaLogo" src="img/ka_logo_s.png" alt="kaLogo" style={
                        {paddingTop: '15%', paddingRight: '10%'}}></img>
                </div>
                <div className={styles.rightBox}>
                    <div>
                    <img className="kaLoginTypo" src="img/ka_login_typo_s.png" alt="kaLoginTypo" style={
                        {paddingTop: '35%', paddingRight: '30%'}
                    }></img>
                    </div>
                    <div>
                    <img alt="loginbutton" src="img/certi_kakao_login_s.png" style={{paddingRight:'10%'}} onClick={navigateToMain}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}