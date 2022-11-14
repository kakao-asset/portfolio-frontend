import axios from 'axios';

const LogoutButton = () => {

    function logout(){
        var userId = localStorage.getItem('userId');
        axios({
            method: "DELETE",
            url: `http://localhost:8080/api/logout/${userId}`
        })
        .then((res) => {
            
            document.location.href = "/"
    
        }).catch((err, res) => {
            console.log("로그아웃 에러", res);
            window.alert("로그아웃 실패");
    
            document.location.href = "/main" 
        })
    }
    
    return(
    <button onClick={logout}>
         로그아웃
    </button>);
};

export default LogoutButton;