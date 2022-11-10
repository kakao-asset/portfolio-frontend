import axios from 'axios';

export default function KakaoOauth(){
    let code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    axios({
        method: "GET",
        url: `http://localhost:8080/oauth/kakao?code=${code}`
    })
    .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        
        console.log(res);
        console.log(res.data);
        const tokenData = res.data;
        
        localStorage.setItem("token", JSON.stringify({tokenData}));    //예시로 로컬에 저장함    
        console.log("로그인 성공")
        //history.replace("/main") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        document.location.href = "/main"

        }).catch((err) => {
        console.log("소셜로그인 에러", err);
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");

        document.location.href = "/test" // 로그인 실패하면 로그인화면으로 돌려보냄
    })
    return(<></>);
}