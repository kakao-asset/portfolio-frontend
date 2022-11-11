import axios from 'axios';

export default function TestComponent(){
    // axios.defaults.withCredentials = true;

    axios({
        method: "GET",
        url: '/api',
        headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then((res) => {
        console.log(res); 
        
        const stockData = res.body;

        }).catch((err) => {
        console.log("데이터 받아오기 에러", err);
    })
    return(<></>);
}
