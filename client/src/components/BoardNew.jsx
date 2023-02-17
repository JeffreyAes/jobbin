import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const BoardNew = (props) => {
    const { id } = useParams()
    const user = props.user



    const submitHandler = () => {
        props.setShowBoardForm(true)
        props.setRerender(true)
    }

        return (
            <div>
                <Button variant='outlined' color='primary' size='large' onClick={() => {
                    submitHandler()
                }}>Add Board</Button>
            </div>
        )

    }

    export default BoardNew