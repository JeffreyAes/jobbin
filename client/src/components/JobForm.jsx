import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';


const JobForm = (props) => {
    const { id } = useParams()
    const user = props.user
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const [jobTitle, setJobTitle] = useState("")
    const [company, setCompany] = useState("")
    // const [newBoardIndex, setNewBoardIndex] = useState(boardIndex)
    // const [newTableIndex, setNewTableIndex] = useState(tableIndex)

    const handleSubmit = e => {
        e.preventDefault();
        let arr = user.board
        let newArr = arr[boardIndex].table.list[tableIndex].value
        newArr.push([jobTitle, company])
        axios.put('http://localhost:8000/api/users/' + id, {
            board: arr
        }, { withCredentials: true })
            .then(res => {
                props.setRerender(true)
                props.setShowJobForm(false)
                console.log(res)
                console.log(boardIndex)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const returnToDashboard = () => {
        props.setShowJobForm(false)
        console.log(boardIndex)
    }

    return (
        <div>
            <Button type='button' variant="contained" color="secondary"onClick={() => {
                returnToDashboard()
            }}>Back</Button>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    required
                    id="jobTitle"
                    label="Job Title"
                    type="text"
                    variant="standard"
                    onChange={(e) => setJobTitle(e.target.value)} value={jobTitle}
                />
                <TextField
                    required
                    id="company"
                    label="Company"
                    type="text"
                    variant="standard"
                    onChange={(e) => setCompany(e.target.value)} value={company}
                />

                {/* <div className='d-flex me-3 gap-3 justify-content-center'>
                    <Select
                        id="board"
                        defaultValue={boardIndex}
                        label="Board"
                        onChange={(e) => setNewBoardIndex(e.target.value)}
                    >
                        {user.board.map((board, i) => {

                            <MenuItem key={i} value={i}>{board.boardName}</MenuItem>

                        })
                        }
                    </Select>

                    <Select
                        id="table"
                        defaultValue={tableIndex}
                        label="Board"
                        onChange={(e) => setNewTableIndex(e.target.value)} value={newTableIndex}
                    >
                        {user.board[newBoardIndex].table.list.map((table, i) => {

                            <MenuItem key={i} value={i}>{table.name}</MenuItem>

                        })
                        }
                    </Select>
                </div> */}
                <Button type='submit' variant="contained" color="success">Save Job</Button>
            </Box>
        </div >
    )

}

export default JobForm