import styles from "./css/Portfolio.module.css";
import PieChart from "./chart/PieChart";
import PieAnchor from "./chart/PieAnchor";
import React, { useCallback, useState, useEffect } from "react";
import Modal from 'react-modal';
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";

export default function Portfolio({ stockHold, budget, cash }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setMemberCash = () => {
        if (document.getElementById("cash").value == "" || isNaN(document.getElementById("cash").value)) {
            Swal.fire({
                icon: "warning",
                text: "수정할 현금을 확인해주세요",
                showConfirmButton: false,
                timer: '1000'
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
                        title: "수정 성공",
                        text: "현금을 수정했습니다",
                        showConfirmButton: false,
                        timer: '1000'
                    });
                    window.location.reload();

                }).catch((err, res) => {

                    Swal.fire({
                        icon: "error",
                        title: "수정 실패",
                        text: "잠시 후 다시 시도해주세요",
                        showConfirmButton: false,
                        timer: '1000'
                    });

                })
            setModalIsOpen(false);

        }
    }

    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        forceUpdate()
        setInterval(() => {
            forceUpdate()
        }, 1000)
    }, [])


    var totalPurchase = 0;
    var totalAsset = 0;

    for (var i = 0; i < stockHold.length; i++) {
        totalPurchase += stockHold[i].value * stockHold[i].avgPrice;
    }

    for (var i = 0; i < budget.length; i++) {
        totalAsset += budget[i].value * budget[i].currentPrice;
    }

    var totalSum = Number(((totalAsset + cash) / (totalPurchase + cash) * 100 - 100).toFixed(2));



    return (
        <div>
            <div className={styles.box}>
                <div>
                    <div style={{ height: "10px" }}></div>
                    <p style={{ marginLeft: '30px', color: "white", fontSize: '20px' }}>자산구성</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <PieChart stockHold={stockHold}></PieChart>
                    <div style={{ width: '400px', height: '400px', overflow: 'auto' }}>
                        {stockHold.map(budget => (
                            <PieAnchor key={budget.symbolCode} budget={budget}></PieAnchor>
                        ))}
                    </div>
                </div>


                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: '30px', color: "white", paddingTop: '5px', width: '70px' }}>매수금액</p>
                    <h3 style={{ marginLeft: '5%', color: "white", width: '150px', textAlign: 'right' }}>{totalPurchase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>
                    <p style={{ marginLeft: '100px', color: "white", paddingTop: '5px', width: '70px' }}>보유현금</p>
                    <h3 style={{ marginLeft: '5%', color: "white", width: '150px', textAlign: 'right' }}>{Number(cash).toLocaleString('ko-KR')}원</h3>
                    <AiFillEdit size='30px' style={{ paddingTop: '1.2rem', marginLeft: '0.5rem' }} color="white" onClick={() => setModalIsOpen(true)}></AiFillEdit>

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
                                top: '35rem',
                                bottom: '0',
                                left: '5rem',
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
                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: '30px', color: "white", paddingTop: '5px', width: '70px' }}>투자금액</p>
                    <h3 style={{ marginLeft: '5%', color: "white", width: '150px', textAlign: 'right' }}>{totalAsset == "" || totalAsset == undefined ? '(계산중)' : totalAsset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>
                    <p style={{ marginLeft: '100px', color: "white", paddingTop: '5px', width: '70px' }}>총 자산</p>
                    <h3 style={{ marginLeft: '5%', color: "white", width: '150px', textAlign: 'right' }}>{Number(totalAsset + cash).toLocaleString('ko-KR')}원</h3>
                    <p style={{ color: totalSum > 1 ? '#57C083' : '#DD6C87', paddingTop: '8px', marginLeft: '10px' }}>( {totalSum}% )</p>
                </div>
            </div>
        </div>
    );
}