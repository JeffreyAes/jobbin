import React from 'react'
import TableNew from './TableNew'
import TableDelete from './TableDelete'
import JobNew from './JobNew'
import JobDelete from './JobDelete'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const BoardTable = (props) => {
    const user = props.user
    const setUser = props.setUser
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const setTableIndex = props.setTableIndex


    const onSubmitHandler = (jobIndex, tableIndex) => {
        props.setRerender(true)
        props.setJobIndex(jobIndex)
        setTableIndex(tableIndex)
        props.setShowDetail(true)

    }






    return (
        <div className="">


            <div >
                <TableContainer  className='d-flex justify-content-center'  >
                    <Table sx={{ minWidth: 650, maxWidth: '94%' }} style={{tableLayout: 'fixed'}}  aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                    {user?.board[boardIndex].table.list.map((list, i) =>
                                <TableCell variant='center' key={i} >{list.name} <TableDelete
                                            tableIndex={i}
                                            user={user}
                                            setUser={setUser}
                                            setRerender={props.setRerender}
                                            boardIndex={boardIndex} /> </TableCell>
                                    )}
                                <TableCell>
                                    <TableNew user={user} setUser={setUser} setRerender={props.setRerender} boardIndex={boardIndex} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {user?.board[boardIndex].table.list.map((list, i) =>
                                    <TableCell
                                        key={i}><JobNew
                                            setRerender={props.setRerender}
                                            user={user}
                                            boardIndex={boardIndex}
                                            tableIndex={tableIndex}
                                            setTableIndex={setTableIndex}
                                            index={i}
                                            setShowJobForm={props.setShowJobForm} />
                                    </TableCell>
                                )}
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                {user?.board[boardIndex].table.list.map((list, i) =>
                                    <TableCell key={i}>{list.value.map((val, j) =>
                                        <Box key={j} >

                                            <span  onClick={() => {
                                                onSubmitHandler(j, i)
                                            }}>  {val[0]}  </span>
                                            <span className=''>

                                                <JobDelete
                                                    tableIndex={i}
                                                    jobIndex={j}
                                                    user={user}
                                                    setUser={setUser}
                                                    setRerender={props.setRerender}
                                                    boardIndex={boardIndex}
                                                />
                                            </span>
                                        </Box>
                                    )}
                                    </TableCell>
                                )}
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <table className='table table-striped table-dark'>
                    <thead>
                        <tr>
                            {user?.board[boardIndex].table.list.map((list, i) =>

                                <th key={i} >{list.name} <TableDelete
                                    tableIndex={i}
                                    user={user}
                                    setUser={setUser}
                                    setRerender={props.setRerender}
                                    boardIndex={boardIndex} /> </th>
                            )}
                            <td ><TableNew user={user} setUser={setUser} setRerender={props.setRerender} boardIndex={boardIndex} /></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {user?.board[boardIndex].table.list.map((list, i) =>
                                <td key={i}><JobNew
                                    setRerender={props.setRerender}
                                    user={user}
                                    boardIndex={boardIndex}
                                    tableIndex={tableIndex}
                                    setTableIndex={setTableIndex}
                                    index={i}
                                    setShowJobForm={props.setShowJobForm} /></td>
                            )}
                            <td></td>
                        </tr>
                        <tr>
                            {user?.board[boardIndex].table.list.map((list, i) =>
                                <td key={i}>{list.value.map((val, j) =>
                                    <div key={j} className="d-flex justify-content-center">

                                        <span className='inline' onClick={() => {
                                            onSubmitHandler(j, i)
                                        }}>  {val[0]}  </span>
                                        <span className='inline'>

                                            <JobDelete
                                                tableIndex={i}
                                                jobIndex={j}
                                                user={user}
                                                setUser={setUser}
                                                setRerender={props.setRerender}
                                                boardIndex={boardIndex}
                                            />
                                        </span>
                                    </div>
                                )} </td>
                            )}
                            <td></td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default BoardTable