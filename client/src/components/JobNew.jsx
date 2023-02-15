import React from 'react'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Button from '@mui/material/Button';
const JobNew = (props) => {
    const setTableIndex = props.setTableIndex



    const onSubmitHandler = () => {
        setTableIndex(props.index)
        props.setShowJobForm(true)
        
    }

    return (
            <Button variant='text' color='primary' size='medium'   onClick={() => {
                onSubmitHandler()
            }}><AddCircleOutlineSharpIcon fontSize='large' /></Button>
        
    )

}

export default JobNew