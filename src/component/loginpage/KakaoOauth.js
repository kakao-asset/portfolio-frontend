import axios from 'axios';
import Swal from 'sweetalert2';

export default function KakaoOauth() {
    let code = new URL(window.location.href).searchParams.get('code');
    axios({
        method: "GET",
        url: `/api/oauth/kakao?code=${code}`
    })
        .then((res) => {
            if (res.data.data.code == 401) {
                Swal.fire({
                    icon: "error",
                    title: "회원 가입 실패",
                    text: "회원 가입시 이메일 수집에 동의해주세요.",
                    showConfirmButton: true,
                }).then(result => {
                    if (result.isConfirmed) {
                        document.location.href = "/";
                    }
                });
            } else {
                const tokenData = res.data.data.accessToken;
                const userData = JSON.stringify(res.data.data);
                const userId = userData.userId;

                localStorage.setItem("token", tokenData);   
                localStorage.setItem("userData", userData);
                localStorage.setItem("userId", userId);

                document.location.href = "/main"
            }

        }).catch((err) => {
            Swal.fire({
                icon: "error",
                title: "로그인 실패",
                text: "잠시 후 다시 시도해주세요",
                showConfirmButton: true,
            }).then(result => {
                if (result.isConfirmed) {
                    document.location.href = "/";
                }
            });;
        })
    return (<></>);
}