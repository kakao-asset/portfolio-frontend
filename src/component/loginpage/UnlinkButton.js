import axios from 'axios';

const UnlinkButton = () => {
    function unlink(){
        var userId = localStorage.getItem('userId');
        axios({
            method: "DELETE",
            url: `http://localhost:8080/api/unlink/${userId}`
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
         회원탈퇴
    </button>);
};

export default UnlinkButton;