import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const BoardDelete = (props) => {
    const { id } = useParams()
    const user = props.user
    const boardIndex = props.boardIndex
    const setRerender = props.setRerender
    const setBoardIndex = props.setBoardIndex



    const onSubmitHandler = () => {
        let arr = user.board
        let newArr = arr
        newArr.splice(boardIndex, 1)
        console.log(newArr)
        axios.put('http://localhost:8000/api/users/' + id, {
            board: arr
        }, { withCredentials: true })
            .then(res => {
                setBoardIndex(0)
                setRerender(true)
                console.log(res)
                console.log(user.board.boardName)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
            <Button disabled={user.board.length===1? true : false} variant='outlined' color='error' onClick={() => {
                        onSubmitHandler()
                      }}>Delete</Button>
    )

}

export default BoardDelete