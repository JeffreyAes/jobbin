import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const TableNew = (props) => {
    const { id } = useParams()
    const user = props.user
    const setUser = props.setUser
    const boardIndex = props.boardIndex



    const onSubmitHandler = () => {
        let arr = user.board
        arr[boardIndex].table.list.push(

            { name: "New table", value: [] }

        )
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

            <Button variant='outlined' color='primary'  onClick={() => {
                onSubmitHandler()
            }}>Add Table</Button>

    )

}

export default TableNew