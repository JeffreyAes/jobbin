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
import Box from '@mui/material/Box';


const BoardTable = (props) => {
    const user = props.user
    const setUser = props.setUser
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const setTableIndex = props.setTableIndex
    const setShowTableEdit = props.setShowTableEdit
    const setOldTableName = props.setOldTableName


    const onSubmitHandler = (jobIndex, tableIndex) => {
        props.setRerender(true)
        props.setJobIndex(jobIndex)
        setTableIndex(tableIndex)
        props.setShowDetail(true)

    }

    const editTable = (i, oldTableName) => {
        setTableIndex(i)
        setOldTableName(oldTableName)
        setShowTableEdit(true)
        props.setRerender(true)

    }






    return (
        <div className="">


            <div >
                <TableContainer className='d-flex justify-content-center'  >
                    <Table sx={{ minWidth: 650, maxWidth: '94%' }} style={{ tableLayout: 'fixed' }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                {user?.board[boardIndex].table.list.map((list, i) =>
                                    <TableCell key={i} variant='center' >
                                        <Box  >
                                            <span onClick={() => {
                                                editTable(i, list.name)
                                            }} >{list.name}</span>
                                            <span>

                                                <TableDelete
                                                    tableIndex={i}
                                                    user={user}
                                                    setUser={setUser}
                                                    setRerender={props.setRerender}
                                                    boardIndex={boardIndex} />
                                            </span>
                                        </Box>
                                    </TableCell>
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
                                            <span >

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
            </div>
        </div>
    )
}

export default BoardTable