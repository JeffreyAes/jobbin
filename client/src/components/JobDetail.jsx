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
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const JobDetail = (props) => {
    const { id } = useParams()
    const user = props.user
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const jobIndex = props.jobIndex
    const [jobTitle, setJobTitle] = useState(null)
    const [company, setCompany] = useState(null)
    const [newBoardIndex, setNewBoardIndex] = useState(boardIndex)
    const [newTableIndex, setNewTableIndex] = useState(tableIndex)
    const [jobURL, setJobURL] = useState(null)
    const [location, setLocation] = useState(null)
    const [sallery, setSallery] = useState(null)
    const [remote, setRemote] = useState(null)
    const [description, setDescription] = useState(null)
    const jobData = user.board[boardIndex].table.list[tableIndex].value[jobIndex]



    const handleSubmit = e => {
        e.preventDefault();
        if (newBoardIndex !== boardIndex || newTableIndex !== tableIndex) {
            let arr = user.board
            let newArr = arr[boardIndex].table.list[tableIndex].value
            newArr.splice(jobIndex, 1)
            console.log(newArr)

            axios.put('http://localhost:8000/api/users/' + id, {
                board: arr
            }, { withCredentials: true })
                .then(res => {
                    console.log(res)
                    let arr = user.board
                    let newArr = arr[newBoardIndex].table.list[newTableIndex].value
                    newArr.push([
                        jobTitle === null ? jobData[0] : jobTitle,
                        company === null ? jobData[1] : company,
                        jobURL === null ? jobData[2] : jobURL,
                        sallery === null ? jobData[3] : sallery,
                        location === null ? jobData[4] : location,
                        remote === null ? jobData[5] : remote,
                        description === null ? jobData[6] : description
                    ])
                    axios.put('http://localhost:8000/api/users/' + id, {
                        board: arr
                    }, { withCredentials: true })
                        .then(res => {
                            props.setRerender(true)
                            props.setShowDetail(false)
                            console.log(res)
                            console.log(tableIndex)
                        })
                        .catch(err => {
                            console.log(err)
                        })

                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            console.log("hello")


            let arr = user.board
            console.log(newBoardIndex, newTableIndex)
            let spliceArr = arr[newBoardIndex].table.list[newTableIndex].value
            spliceArr.splice(jobIndex, 1)
            let newArr = arr[newBoardIndex].table.list[newTableIndex].value

            newArr.splice(jobIndex, 0, [
                jobTitle === null ? jobData[0] : jobTitle,
                company === null ? jobData[1] : company,
                jobURL === null ? jobData[2] : jobURL,
                sallery === null ? jobData[3] : sallery,
                location === null ? jobData[4] : location,
                remote === null ? jobData[5] : remote,
                description === null ? jobData[6] : description
            ])
            axios.put('http://localhost:8000/api/users/' + id, {
                board: arr
            }, { withCredentials: true })
                .then(res => {
                    props.setRerender(true)
                    props.setShowDetail(false)
                    console.log(res)
                    console.log(tableIndex)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    const returnToDashboard = () => {
        props.setShowDetail(false)
        console.log(tableIndex)
    }

    const handleChange = (event) => {
        setRemote(event.target.checked);
      };

    return (
        <div className='container'>
            <Button type='button' variant="contained" color="secondary" onClick={() => {
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
                        value={jobTitle !== null ? jobTitle : jobData[0]}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <TextField
                        required
                        id="company"
                        label="Company"
                        type="text"
                        variant="standard"
                        value={company !== null ? company : jobData[1]}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </FormControl>
                <div>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>

                        <TextField
                            required
                            id="URL"
                            label="URL"
                            type="text"
                            variant="standard"
                            value={jobURL !== null ? jobURL : jobData[2]}
                            onChange={(e) => setJobURL(e.target.value)} 
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>

                        <TextField
                            required
                            id="Sallery"
                            label="Sallery"
                            type="text"
                            variant="standard"
                            value={sallery !== null ? sallery : jobData[3]}
                            onChange={(e) => setSallery(e.target.value)} 
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>

                        <TextField
                            required
                            id="Location"
                            label="Location"
                            type="text"
                            variant="standard"
                            onChange={(e) => setLocation(e.target.value)} 
                            value={location !== null? location : jobData[4]}
                        />
                    </FormControl>

                    <FormControl>
                        <FormControlLabel control={<Checkbox />}
                            label="Remote"
                            checked={remote===null? jobData[5] : remote===null && jobData[5] === null? false : remote }
                            onChange={(e) => handleChange(e)} value={remote}
                        />
                    </FormControl>
                </div>
                <div >

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Move Board</InputLabel>

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
                        <InputLabel id="">Move Table</InputLabel>

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
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 240 }}>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                style={{ width: 240 }}
                                value={description !== null? description : jobData[6]}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>
                    </div>
                </div>

                <Button type='submit' variant="contained" color="success">Update Job</Button>
            </Box>
        </div >
    )

}

export default JobDetail