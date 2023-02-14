import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddTable = (props) => {
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
        <div>
            <button className='btn btn-info' onClick={() => {
                onSubmitHandler()
            }}>Add Table</button>
        </div>
    )

}

export default AddTable