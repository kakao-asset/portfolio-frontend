import axios from 'axios';
import { AiOutlinePoweroff } from "react-icons/ai";

const LogoutButton = () => {

    function logout(){
        var userId = JSON.parse(localStorage.getItem("userData")).userId;
        axios({
            method: "DELETE",
            url: `/api/logout/${userId}`
        })
        .then((res) => {
            
            document.location.href = "/"
    
        }).catch((err, res) => {
            console.log("로그아웃 에러", res);
            window.alert("로그아웃에 실패하였습니다.");
    
            document.location.href = "/main" 
        })
    }
    
    return(
    <button onClick={logout} style={{
        color: 'white', 
        backgroundColor: '#1F1F1F', 
        border: '0px', 
        float: 'right', 
        position: 'absolute', 
        left: '96rem', 
        top: '2rem'}}>
         <AiOutlinePoweroff size='30px'></AiOutlinePoweroff>
    </button>
    
    );
};

export default LogoutButton;