import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import LogoutButton from "../../loginpage/LogoutButton";
import UnlinkButton
 from "../../loginpage/UnlinkButton";
export default function Header() {
    // 헤더 로고 영역 클릭 시 메인 페이지로 이동 
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate("/main");
    }
    return (
        <div style={{width: '100%', height: '50px'}}>
            <div style={{display: 'flex', marginTop: '1.5%', marginLeft: '1.5%', width: '100%', height: '55px'}} >
                <div onClick={navigateToMain} style={{display: 'block', width: '60%'}}>
                <img alt="kalogo" src="img/ka_logo_s.png" style={{float: 'left'}}></img>
                </div>
                <div style={{marginRight: '10px', display: 'flex', width: '20%'}}>
                    <Searchbar></Searchbar>
                    <LogoutButton></LogoutButton>
                    <UnlinkButton></UnlinkButton>
                    {/* 카카오 로그인 후 받아온 유저 프로필 사진 url */}
                    <img alt="kaprofile" src="img/ka_user_profile.png" style={
                        {float: 'right',
                        position: 'absolute',
                        top: '30px',
                        left: '92%',
                        width: '50px',
                        height: '50px'
                        }}></img>

                </div>

            </div>
            <div style={{borderBottom: '0.5px solid', color: "#d2d2d2", marginLeft: '1.5%', marginRight: '1.5%'}}></div>
        </div>

    );
}