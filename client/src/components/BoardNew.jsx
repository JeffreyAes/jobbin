import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const BoardNew = (props) => {
    const { id } = useParams()
    const user = props.user



    const onSubmitHandler = () => {
        props.setRerender(true)
        let arr = user.board
        let today = new Date().getFullYear()
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
            <Button variant='outlined' color='info' size='large'  onClick={() => {
                onSubmitHandler()
            }}>Add Board</Button>
            </div>
    )

}

export default BoardNew