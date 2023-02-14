import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddBoard = (props) => {
    const { id } = useParams()
    const user = props.user



    const onSubmitHandler = () => {
        let arr = user.board
        let date = new Date();
        let today = new Date(date.getFullYear(), 1).toLocaleDateString()
        arr.push({
            boardName: `${today}'s job search`,
            table: {
                list:
                    [
                        { name: "wishlist", value: [] }, { name: "applied", value: [] },
                        { name: "interview", value: [] }, { name: "offer", value: [] }, { name: "denied", value: [] }
                    ]
            }
        })
        axios.put('http://localhost:8000/api/users/' + id, {
            board: arr
        }, { withCredentials: true })
            .then(res => {
                console.log(res)
                console.log(user.board.boardName)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <button className='btn btn-info'  onClick={() => {
                        onSubmitHandler()
                      }}>Add Board</button>
        </div>
    )

}

export default AddBoard