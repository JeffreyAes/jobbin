import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Routes, Route, useNavigate } from 'react-router-dom'
import JobForm from './JobForm'

const JobNew = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const user = props.user
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const setTableIndex = props.setTableIndex



    const onSubmitHandler = () => {
        setTableIndex(props.index)
        props.setShowJobForm(true)
        
    }

    return (
        <div>
            <button className='btn btn-info' onClick={() => {
                onSubmitHandler()
            }}>+</button>
        </div>
        
    )

}

export default JobNew