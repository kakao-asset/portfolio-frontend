
const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

const KakaoLoginButton = () => {
    return (
        <a href={KAKAO_AUTH_URL}>
            <img alt="loginbutton" src="img/certi_kakao_login_s.png" style={{paddingRight:'10%'}} ></img>
        </a>
        
    );
};

export default KakaoLoginButton;
