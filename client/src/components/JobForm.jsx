import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';


const JobForm = (props) => {
    const { id } = useParams()
    const user = props.user
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const [jobTitle, setJobTitle] = useState("")
    const [company, setCompany] = useState("")
    const [newBoardIndex, setNewBoardIndex] = useState(boardIndex)
    const [newTableIndex, setNewTableIndex] = useState(tableIndex)

    const handleSubmit = e => {
        e.preventDefault();
        let arr = user.board
        let newArr = arr[newBoardIndex].table.list[newTableIndex].value
        newArr.push([jobTitle, company])
        axios.put('http://localhost:8000/api/users/' + id, {
            board: arr
        }, { withCredentials: true })
            .then(res => {
                props.setRerender(true)
                props.setShowJobForm(false)
                console.log(res)
                console.log(tableIndex)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const returnToDashboard = () => {
        props.setShowJobForm(false)
        console.log(tableIndex)
    }

    return (
        <div className='container'>
            <Button type='button' variant="contained" className='d-flex justify-content-start' color="secondary" onClick={() => {
                returnToDashboard()
            }}>Back</Button>
            <Box
                component="form"
                sx={{ minWidth: 120 }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >


                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <TextField
                        required
                        id="jobTitle"
                        label="Job Title"
                        type="text"
                        variant="standard"
                        onChange={(e) => setJobTitle(e.target.value)} value={jobTitle}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <TextField
                        required
                        id="company"
                        label="Company"
                        type="text"
                        variant="standard"
                        onChange={(e) => setCompany(e.target.value)} value={company}
                    />
                </FormControl>
                <div >

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Board</InputLabel>

                        <Select
                            id="board"
                            defaultValue={boardIndex}
                            label="Board"
                            onChange={(e) => setNewBoardIndex(e.target.value)}
                        >
                            {user.board.map((board, i) => {

                                return <MenuItem key={i} value={i}>{board.boardName}</MenuItem>

                            })
                            }
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="">Table</InputLabel>

                        <Select
                            id="table"
                            defaultValue={tableIndex}
                            label="Board"
                            onChange={(e) => setNewTableIndex(e.target.value)}
                        >
                            {user.board[newBoardIndex].table.list.map((table, i) => {

                                return <MenuItem key={i} value={i}>{table.name}</MenuItem>

                            })
                            }
                        </Select>
                    </FormControl>
                </div>
                <Button disabled={jobTitle.length === 0 || company.length === 0? true: false} type='submit' variant="contained" color="success">Save Job</Button>
            </Box>
        </div >
    )

}

export default JobForm