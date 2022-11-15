import axios from 'axios';
import { AiOutlineUserDelete } from "react-icons/ai";

const UnlinkButton = () => {
    function unlink(){
        var userId = JSON.parse(localStorage.getItem("userData")).userId;
        axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_BACKEND_URI}/api/unlink/${userId}`
        })
        .then((res) => {
            window.alert("연결끊기");
            document.location.href = "/"
    
        }).catch((err, res) => {
            console.log("연결끊기 에러", res);
            window.alert("연결끊기 실패");
    
            document.location.href = "/main" 
        })
    }
    
    return(
    <button onClick={unlink}>
        <div>
            <AiOutlineUserDelete size='30px'></AiOutlineUserDelete>
        </div>
         
         
    </button>);
};

export default UnlinkButton;