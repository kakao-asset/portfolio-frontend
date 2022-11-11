import axios from 'axios';

export default function Bridge(){
    window.alert("브릿지도착");
    axios({
        method: "GET",
        url: `http://localhost:8080/api/bridge`,
        headers: {
            'token': localStorage.getItem("token")
        }
    })
    .then((res) => {
        console.log("로그인 성공")
        //history.replace("/main") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)

        document.location.href = "/main"

        }).catch((err) => {
            window.alert("토큰이 유효하지않음", err);
        window.alert("로그인에 실패하였습니다.");

        document.location.href = "/" // 로그인 실패하면 로그인화면으로 돌려보냄
    })
    return(<></>);
}