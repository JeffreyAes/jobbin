import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



const BoardForm = (props) => {
    const { id } = useParams()
    const user = props.user
    const [boardName, setBoardName] = useState("")
    let today = new Date().getFullYear()

    const handleSubmit = e => {
        e.preventDefault();
        let arr = user.board
        arr.push({
            boardName: boardName,
            table: {
                list:
                    [
                        { name: "Wishlist", value: [] }, { name: "Applied", value: [] },
                        { name: "Interview", value: [] }, { name: "Offer", value: [] }, { name: "Denied", value: [] }
                    ]
            }
        })
        axios.put('http://localhost:8000/api/users/' + id, {
            board: arr
        }, { withCredentials: true })
            .then(res => {
                props.setRerender(true)
                props.setShowBoardForm(false)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const returnToDashboard = () => {
        props.setShowBoardForm(false)
    }

    return (
        <div className='container'>
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


                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <TextField
                        required
                        id="boardName"
                        label="Board Name"
                        type="text"
                        variant="standard"
                        placeholder={`${today}'s Job Search `}
                        onChange={(e) => setBoardName(e.target.value)} value={boardName}
                    />
                </FormControl>
                <div>
                <Button  type='submit' variant="contained" color="success">Save Board</Button>
                </div>
            </Box>
        </div >
    )

}

export default BoardForm