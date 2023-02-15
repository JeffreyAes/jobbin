import React from 'react'

const JobNew = (props) => {
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