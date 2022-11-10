import React, { useMemo } from 'react';
import { useTable } from 'react-table';


export default function RankingTable({columns, data}) {

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({columns,data});

    //테이블 칼럼 데이터
    //Header 에는 테이블에 출력될 header 이름
    //accessor 에는 data object와 연결할 key name 
    // const columnData = [
    //     {
    //         accessor: 'stockName',
    //         Header: '종목이름'
    //     },
    //     {
    //         accessor: 'currentPrice',
    //         Header: '현재가'
    //     },
    //     {
    //         accessor: 'flucRate',
    //         Header: '등락률'
    //     },
    //     {
    //         accessor: 'tradeVol',
    //         Header: '거래량'
    //     },
    //     {
    //         accessor: 'tradeAmount',
    //         Header: '거래대금'
    //     },
    //     {
    //         accessor: 'marketCap',
    //         Header: '시가총액(억원)'
    //     },
    //     {
    //         accessor: 'foreTrade',
    //         Header: '외국인'
    //     },
    // ];

    
    return (
        <table style={{paddingLeft: '140px', paddingTop:'40px'}}{...getTableProps()}>
            <thead style={{color: 'white'}}>
                {headerGroups.map((headerGroup)=> {
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column)=>(
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            
                ))}
                    </tr>
                })}
            </thead>
            <tbody {...getTableBodyProps()} style={{color:'white'}}>
                {rows.map((row)=> {
                    prepareRow(row);
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>(
                                <td style={{paddingRight: '70px', paddingBottom: '40px'}} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}

                        </tr>
                    );
                })}

            </tbody>

        </table>
    );

}