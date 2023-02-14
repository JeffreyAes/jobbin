import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TableDelete = (props) => {
    const { id } = useParams()
    const user = props.user
    const setUser = props.setUser
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
        <div>
            <button className='btn btn-danger' onClick={() => {
                onSubmitHandler()
            }}>delete</button>
        </div>
    )
}


export default TableDelete