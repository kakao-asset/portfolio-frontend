import axios from 'axios';
import { AiOutlinePoweroff } from "react-icons/ai";
import Swal from 'sweetalert2';

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

            Swal.fire({
                icon: "error",
                title: "로그아웃 실패",
                text: "잠시 후 다시 시도해주세요",
                showConfirmButton: false,
                timer: '1000'
            });
    
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