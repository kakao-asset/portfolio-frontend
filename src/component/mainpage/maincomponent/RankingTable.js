import { useTable, useSortBy } from 'react-table';
import React, { useEffect, useState } from 'react';
import { VscChevronUp , VscChevronDown} from "react-icons/vsc";
import axios from "axios";
import ReactTable from "react-table";
import { DataGrid} from "@mui/x-data-grid";



const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
      headerNameName: '종목이름',
      field: 'name'
  },
  {
      headerName: '현재가',
      field: 'tradePrice'
  },
  {
      headerName: '등락률',
      field: 'prevAccTradeVolumeChangeRate',
  },
  {
      headerName: '거래량',
      field: 'accTradeVolume'
  },
  {
      headerName: '거래대금',
      field: 'accTradePrice'
  },
  {
      headerName: '시가총액(억원)',
      field: 'marketCap'
  },
  {
      headerName: '외국인',
      field: 'foreignRatio'
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
}, 1000);
  // if (interval == null){
  //   interval = setInterval(getSectorRank(), 10000);
  // }else{
  //   clearInterval(interval);
  //   interval = setInterval(getSectorRank(), 10000);
  // }
  
},[code])

useEffect(()=>{
  setCode(sectorCode);
},[sectorCode])



  return (
    <div style={{ height: 400, width: "100%", color: "white" }}>
      <DataGrid rows={rankData} columns={columns}>
      </DataGrid>
    </div>
  )
}