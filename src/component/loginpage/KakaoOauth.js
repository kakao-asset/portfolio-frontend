import axios from 'axios';
import Swal from 'sweetalert2';

export default function KakaoOauth(){
    let code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    axios({
        method: "GET",
        url: `/api/oauth/kakao?code=${code}`
    })
    .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        
        console.log(res);
        if(res.data.data.code == 401) {
            Swal.fire({
                icon: "error",
                title: "회원 가입 실패",
                text: "회원 가입시 이메일 수집에 동의해주세요.",
                showConfirmButton: true,
                
            }).then(result => {
                if (result.isConfirmed){
                    document.location.href = "/";
                }
            });
        } else {
            const tokenData = res.data.data.accessToken;
            const userData = JSON.stringify(res.data.data);
            const userId = userData.userId;
            
            localStorage.setItem("token", tokenData);    //예시로 로컬에 저장함 
            localStorage.setItem("userData", userData); 
            localStorage.setItem("userId", userId); 
            console.log("로그인 성공");
            document.location.href = "/main"
        }
        
        //history.replace("/main") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
    }).catch((err) => {
        console.log("소셜로그인 에러", err);
        Swal.fire({
            icon: "error",
            title: "로그인 실패",
            text: "잠시 후 다시 시도해주세요",
            showConfirmButton: true,
            
        }).then(result => {
            if (result.isConfirmed){
                document.location.href = "/";
            }
        });;
    })
    return(<></>);
}