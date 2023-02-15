import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const JobDelete = (props) => {
    const { id } = useParams()
    const user = props.user
    // const setUser = props.setUser
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const jobIndex = props.jobIndex

    const onSubmitHandler = () => {
        let arr = user.board

        let newArr = arr[boardIndex].table.list[tableIndex].value
        newArr.splice(jobIndex, 1)
        console.log(newArr)


        axios.put('http://localhost:8000/api/users/' + id, {
            board: arr
        }, { withCredentials: true })
            .then(res => {
                props.setRerender(true)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }




    return (
        // <div>
            <IconButton variant="text" color='error' size='small'  onClick={() => {
                onSubmitHandler()
            }}><DeleteIcon fontSize='small'/></IconButton>
        // </div>
    )
}


export default JobDelete