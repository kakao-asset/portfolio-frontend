import axios from 'axios';
import { AiOutlineUserDelete } from "react-icons/ai";
import Swal from 'sweetalert2';

const UnlinkButton = () => {
    function unlink(){
        var userId = JSON.parse(localStorage.getItem("userData")).userId;
        axios({
            method: "DELETE",
            url: `/api/unlink/${userId}`
        })
        .then((res) => {
            Swal.fire({
                icon: "success",
                title: "회원 탈퇴 성공",
                text: "다음에 다시 만나요~",
                showConfirmButton: true,
            }).then(result => {
                if (result.isConfirmed){
                    document.location.href = "/";
                }
            })
            ;
            
    
        }).catch((err, res) => {
            console.log("회원 탈퇴 에러", res);
            Swal.fire({
                icon: "error",
                title: "회원 탈퇴 실패",
                text: "잠시 후 다시 시도해주세요",
                showConfirmButton: true,
                
            }).then(result => {
                if (result.isConfirmed){
                    document.location.href = "/main";
                }
            });
            
        })
    }
    
    return(
    <button onClick={()=>{
        Swal.fire({
            icon: "question",
            title: "회원 탈퇴",
            text: "회원 정보는 탈퇴 시 바로 삭제됩니다.",
            showCancelButton: true,
            confirmButtonText: "확인",
            cancelButtonText: "취소",

            
        }).then(result => {
            if (result.isConfirmed){
                unlink();
            }
        });
}}
     >회원탈퇴
        <div>
            <AiOutlineUserDelete size='30px'></AiOutlineUserDelete>
        </div>
         
         
    </button>);
};

export default UnlinkButton;