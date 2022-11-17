import React, { useEffect, useState } from 'react';
import axios from "axios";
import { DataGrid} from "@mui/x-data-grid";



const columns = [
  {   field: "id", 
    headerName: "ID", 
    headerAlign: 'center',
    width: '0'

   },
  {
      headerAlign: 'center',  
      headerName: '종목이름',
      field: 'name',
      width: '200'
      
  },
  {
      headerAlign: 'center',
      headerName: '현재가',
      field: 'tradePrice',
      width: '150'
  },
  {
      headerAlign: 'center',
      headerName: '등락률',
      field: 'prevAccTradeVolumeChangeRate',
      width: '200'
  },
  {
      headerAlign: 'center',
      headerName: '거래량',
      field: 'accTradeVolume',
      width: '250'
  },
  {
      headerAlign: 'center',
      headerName: '거래대금',
      field: 'accTradePrice',
      width: '250'
  },
  {
      headerAlign: 'center',
      headerName: '시가총액',
      field: 'marketCap',
      width: '250'
  },
  {
      headerAlign: 'center',
      headerName: '외국인',
      field: 'foreignRatio',
      width: '200'
  }
];

export default function RankingTable({rankingColumn,rankingData, sectorCode}) {
  
  const [rankData, setRankData] = useState([]);
  const [code, setCode] = useState("");

  function getSectorRank(){
    if (sectorCode != ""){
      let req_url = 'http://localhost:8080/sector?stock_sector='+code;
    console.log("req_url : " + req_url);
    axios({
        method: "get",
        url: req_url,
        headerNames: {"Access-Control-Allow-Origin": "*"},
        responseEncoding: 'binary'
    })
    .then((res) => {
        var result = res.data
        setRankData(result);
        console.log("sector rank result" + result);

        }).catch((err) => {
        console.log("데이터 받아오기 에러", err);
    })
    }
}

useEffect(()=>{
  console.log("sectorCode :" + sectorCode);
  getSectorRank();
  var interval = setInterval(()=>{
    getSectorRank();
}, 100000);
  
},[code])

useEffect(()=>{
  setCode(sectorCode);
},[sectorCode])



  return (
    <div style={{ height: '800px', width: '1550px', color: "white", marginBottom: '100px' }}>
      <DataGrid rows={rankData}
      columns={columns} style={{color: 'white', textAlign: 'center' }}>
      </DataGrid>
    </div>
  )
}