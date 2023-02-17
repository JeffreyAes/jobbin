import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



const TableForm = (props) => {
    const { id } = useParams()
    const user = props.user
    const [tableName, setTableName] = useState(null)
    const tableIndex = props.tableIndex
    const boardIndex = props.boardIndex
    const oldTableName = props.oldTableName

    const handleSubmit = e => {
        e.preventDefault();
        let arr = user.board
        let newArr = arr[boardIndex].table.list[tableIndex].name
        user.board[boardIndex].table.list[tableIndex].name = newArr.replace(oldTableName, tableName === null ? oldTableName : tableName)
        axios.put('http://localhost:8000/api/users/' + id, {
            board: arr
        }, { withCredentials: true })
            .then(res => {
                console.log(res)
                props.setRerender(true)
                props.setShowTableEdit(false)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const returnToDashboard = () => {
        props.setShowTableEdit(false)
    }

    return (
        <div className="container">

            <Button className='d-flex justify-content-start' type='button' variant="contained" color="secondary" onClick={() => {
                returnToDashboard()
            }}>Back</Button>

            <Box
                component="form"
                sx={{ minWidth: 120 }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h1>{oldTableName}</h1>

                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <TextField
                        required
                        id="tableName"
                        label="New Table Name"
                        type="text"
                        variant="standard"
                        value={tableName !== null ? tableName : oldTableName}
                        onChange={(e) => setTableName(e.target.value)}
                    />
                </FormControl>
                <div>
                    <Button type='submit' variant="text" color="success">Save Table</Button>
                </div>
            </Box>
        </div>
    )

}

export default TableForm 