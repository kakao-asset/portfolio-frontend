import styles from "./css/Login.module.css"
import KakaoLoginButton from "./KakaoLoginButton";


export default function Login() {

    return (
        <>
            <div text-align="center" >
                <div style={{ display: 'inline-block', paddingTop: '5%', paddingBottom: '5%' }}>
                    <div style={{ display: 'flex' }}>
                        <div className={styles.leftBox}>
                            <img className="kaLogo" src="img/ka_logo_s.png" alt="kaLogo" style={
                                { paddingTop: '15%' }}></img>

                            <img src="img/ka_login_page_img.png" alt="ka_login_page_img_1"
                                style={{ width: '850px' }}
                            ></img>
                        </div>
                        <div className={styles.rightBox}>
                            <div>
                                <img className="kaLoginTypo" src="img/ka_login_typo_s.png" alt="kaLoginTypo" style={
                                    { paddingTop: '35%', paddingRight: '30%' }
                                }></img>
                            </div>
                            <div>
                                <KakaoLoginButton />
                            </div>

                        </div>


                    </div>
                    <img alt="kaUnderText" src="img/ka_login_text.png" style={{
                        marginTop: '2rem', width: '400px'
                    }}>
                    </img>
                </div>

            </div>
        </>
    );
}