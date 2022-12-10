import Modal from 'react-modal';
import axios from "axios";
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function CashRow() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setMemberCash = () => {
        if (document.getElementById("cash").value == "" || isNaN(document.getElementById("cash").value)) {
            Swal.fire({
                icon: "warning",
                text: "등록될 현금을 확인해주세요",
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
                data: { "cash": userCash },
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                timeout: 5000,
                responseType: "json" 
            })
                .then((res) => {

                    Swal.fire({
                        icon: "success",
                        title: "등록 성공",
                        text: "현금을 등록했습니다",
                        showConfirmButton: true,

                    }).then(result => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });

                }).catch((err, res) => {

                    Swal.fire({
                        icon: "error",
                        title: "등록 실패",
                        text: "잠시 후 다시 시도해주세요",
                        showConfirmButton: false,
                        timer: '1500'
                    });

                })
            setModalIsOpen(false);

        }
    }

    return (
        <div>
            <img src="img/ka_plus_cash.png" style={{ width: '10rem', paddingTop: '5rem', paddingBottom: '1rem' }}></img>
            <br></br>
            <button style={{
                backgroundColor: '#366cc2',
                borderColor: '#366cc2',
                width: 'fit-content',
                height: '60px',
                borderRadius: '4px',
                paddingLeft: '70px',
                paddingRight: '70px',
                textAlign: 'center',
                paddingTop: '5px',
                paddingBottom: '10px',
                color: 'white',
                fontSize: '20px'
            }} onClick={() => setModalIsOpen(true)}>내 현금 등록하기</button>

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
                        top: '10rem',
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
                    <h3 style={{ color: 'white' }}>나의 현금은?</h3>

                    <input id='cash' type="text" style={{ width: '150px', height: '30px', fontSize: '20px' }}></input> 원

                    <br></br>
                    <img src='img/ka_plus_cash_2.png'></img>
                    <p>현금을 등록하고 </p>
                    <p>주식을 추가하세요!</p>
                    <br></br>
                    <button style={{
                        backgroundColor: '#366cc2',
                        borderColor: '#366cc2',
                        width: 'fit-content',
                        height: '40px',
                        borderRadius: '4px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        textAlign: 'center',
                        paddingTop: '5px',
                        paddingBottom: '10px',
                        marginBottom: '20px',
                        color: 'white'
                    }} onClick={setMemberCash}>등록</button>
                </div>
            </Modal>
        </div>
    );

};
