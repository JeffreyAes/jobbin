import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TableDelete = (props) => {
    const { id } = useParams()
    const user = props.user
    // const setUser = props.setUser
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex

    const onSubmitHandler = () => {
        let arr = user.board

        let newArr = arr[boardIndex].table.list
        newArr.splice(tableIndex, 1)
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

        <IconButton variant="outlined" color='error' size='small' onClick={() => {
            onSubmitHandler()
        }}><DeleteIcon fontSize='medium' /></IconButton>

    )
}


export default TableDelete