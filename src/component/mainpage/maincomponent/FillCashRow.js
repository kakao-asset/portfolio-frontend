import { AiFillEdit } from "react-icons/ai";
import Modal from 'react-modal';
import axios from "axios";
import { useState } from 'react';
import Swal from "sweetalert2";

export default function FillCashRow({ cash }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setMemberCash = () => {
        if (document.getElementById("cash").value == "" || isNaN(document.getElementById("cash").value || Number(document.getElementById("cash").value) < 0 || Number(document.getElementById("cash").value) > 10000000000)) {
            Swal.fire({
                icon: "warning",
                text: "수정할 현금을 확인해주세요 (최대 100억)",
                showConfirmButton: false,
                timer: '1500'
            });
        } 
        else {
            var userId = JSON.parse(localStorage.getItem("userData")).userId;
            var userCash = document.getElementById("cash").value;

            axios({

                method: "POST",
                url: `/api/cash/${userId}`,
                data: { "cash": (userCash - cash) },
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                timeout: 5000,
                responseType: "json" // [응답 데이터 : stream , json]
            })
                .then((res) => {
                    Swal.fire({
                        icon: "success",
                        title: "수정 완료",
                        text: "보유 현금을 수정했습니다",
                        showConfirmButton: true,
                    }).then(result => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });
                }).catch((err, res) => {
                    Swal.fire({
                        icon: "error",
                        title: "수정 실패",
                        text: "잠시 후 다시 시도해주세요",
                        showConfirmButton: false,
                        timer: '1500'
                    });
                })
            setModalIsOpen(false);

        }
    }
    return (
        <div text-align='center'>
            <div style={{ display: 'inline-block', marginTop: '2rem' }}>
                <img alt="ka_plus_cash_3" src="img/ka_plus_cash_4.png" style={{}}></img>
                <img alt="ka_help" src="img/ka_help_text.png" style={{position: 'absolute', width: '300px', paddingLeft: '220px' }}></img>
                <div style={{ display: 'flex' }}>

                    <h3 style={{ color: 'white', paddingTop: '1rem', paddingRight: '1rem' }}>등록된 현금:  {Number(cash).toLocaleString('ko-KR')}원</h3>

                    <AiFillEdit size='30px' style={{ paddingTop: '2rem' }} color="white" onClick={() => setModalIsOpen(true)}></AiFillEdit>
                </div>
            </div>


            <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={() => { setModalIsOpen(false); }}
                style={{
                    overlay: {
                        position: 'absolute',
                        backgroundColor: 'rgba(31, 31, 31, 0)',
                        top: '0',
                        left: '0',
                    },
                    content: {
                        position: 'relative',
                        top: '20rem',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        margin: 'auto',
                        borderRadius: '4px',
                        width: 'fit-content',
                        height: 'fit-content',
                        background: '#1F1F1F',
                        borderColor: '#000',
                    }
                }}>
                <div style={{ textAlign: 'center', color: 'white', paddingLeft: '30px', paddingRight: '30px' }}>
                    <h3 style={{ color: 'white' }}>보유 현금 수정하기</h3>

                    <input id='cash' type="text" style={{ width: '150px', height: '30px', fontSize: '20px' }}></input> 원

                    <br></br>
                    <button style={{
                        backgroundColor: '#366cc2',
                        borderColor: '#366cc2',
                        width: 'fit-content',
                        height: '40px',
                        marginTop: '30px',
                        borderRadius: '4px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        textAlign: 'center',
                        paddingTop: '5px',
                        paddingBottom: '10px',
                        marginBottom: '20px',
                        color: 'white'
                    }} onClick={setMemberCash}>수정</button>
                </div>
            </Modal>
        </div>
    );
};
