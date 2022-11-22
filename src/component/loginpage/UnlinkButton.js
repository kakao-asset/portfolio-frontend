import axios from 'axios';
import { AiOutlineUserDelete } from "react-icons/ai";

const UnlinkButton = () => {
    function unlink(){
        var userId = JSON.parse(localStorage.getItem("userData")).userId;
        axios({
            method: "DELETE",
            url: `/api/unlink/${userId}`
        })
        .then((res) => {
            window.alert("회원 탈퇴");
            document.location.href = "/"
    
        }).catch((err, res) => {
            console.log("회원 탈퇴 에러", res);
            window.alert("회원 탈퇴에 실패했습니다.");
    
            document.location.href = "/main" 
        })
    }
    
    return(
    <button onClick={unlink} >회원탈퇴
        <div>
            <AiOutlineUserDelete size='30px'></AiOutlineUserDelete>
        </div>
         
         
    </button>);
};

export default UnlinkButton;