import React from 'react';
import {Page} from "../components/page";
import styled from 'styled-components';
import { useTable } from 'react-table';

    
const Styles = styled.div`
    padding: 1rem;

    table {
        border-spacing: 0;
        border: 1px solid black;

        tr {
        :last-child {
            td {
            border-bottom: 0;
            }
        }
        }

        th,
        td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
            border-right: 0;
        }
        }
    }
`
function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
        }

export function Directory() {

    const columns = React.useMemo(
        () => [
            
              {
                Header: ' ID',
                accessor: 'id',
              },
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'Username',
                accessor: 'username',
              },
              {
                Header: 'Email',
                accessor: 'email',
              },
              {
                Header: 'Phone',
                accessor: 'phone',
              },
            //   {
            //     Header: 'Company',
            //     accessor: 'company.name',
            //   },

        ],
        []
      )

  const [users, setUsers] = React.useState([])
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    fetch('http://localhost:8000/user', {headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(setUsers)
      .catch(setError)
  }, [])
    

  return <Page>
      <div>
          <h2>User Directory</h2>
        <Styles>
          <Table columns={columns} data={users} />
        </Styles>
      </div>
         
  </Page>;
}

