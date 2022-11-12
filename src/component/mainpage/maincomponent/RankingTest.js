import { useTable, useSortBy } from 'react-table';
import React from 'react';
import { rankingColumn } from './RankingColumn';
import { rankingData } from './RankingData';
import { VscChevronUp , VscChevronDown} from "react-icons/vsc";
 
export default function RankingTest() {

  const data = React.useMemo(
    () => rankingData,
    []
  )

  const columns = React.useMemo(
    () => rankingColumn,
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  return (
    <table {...getTableProps()} style={{ width: '70%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  background: '#1F1F1F',
                  color: 'white',
                  textAlign: 'center',
                  padding: '10px',
                }}
              >
                {column.render('Header')}
                <span style={{paddingLeft: '15px'}}>{column.isSorted? (column.isSortedDesc ? <VscChevronDown color='white'></VscChevronDown> : <VscChevronUp color='white'></VscChevronUp>) : ''} </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                        
                      paddingTop: '35px',
                      background: '#2F3138',
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}