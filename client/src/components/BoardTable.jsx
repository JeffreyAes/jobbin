import React from 'react'
import TableNew from './TableNew'
import TableDelete from './TableDelete'
import JobNew from './JobNew'
import JobDelete from './JobDelete'


const BoardTable = (props) => {
    const user = props.user
    const setUser = props.setUser
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const setTableIndex = props.setTableIndex


    const onSubmitHandler = (jobIndex, tableIndex) => {
        props.setRerender(true)
        props.setJobIndex(jobIndex)
        setTableIndex(tableIndex)
        props.setShowDetail(true)

    }






    return (
        <div className="">


            <div className="d-flex justify-content-center">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            {user?.board[boardIndex].table.list.map((list, i) =>

                                <th key={i} >{list.name} <TableDelete
                                    tableIndex={i}
                                    user={user}
                                    setUser={setUser}
                                    setRerender={props.setRerender}
                                    boardIndex={boardIndex} /> </th>
                            )}
                            <td ><TableNew user={user} setUser={setUser} setRerender={props.setRerender} boardIndex={boardIndex} /></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {user?.board[boardIndex].table.list.map((list, i) =>
                                <td key={i}><JobNew
                                    setRerender={props.setRerender}
                                    user={user}
                                    boardIndex={boardIndex}
                                    tableIndex={tableIndex}
                                    setTableIndex={setTableIndex}
                                    index={i}
                                    setShowJobForm={props.setShowJobForm} /></td>
                            )}
                            <td></td>
                        </tr>
                        <tr>
                            {user?.board[boardIndex].table.list.map((list, i) =>
                                <td key={i}>{list.value.map((val, j) =>
                                    <div  key={j} className="d-flex justify-content-center">

                                        <span className='inline' onClick={() => {
                                            onSubmitHandler(j, i)
                                        }}>  {val[0]}  </span>
                                        <span className='inline'>

                                            <JobDelete
                                                tableIndex={i}
                                                jobIndex={j}
                                                user={user}
                                                setUser={setUser}
                                                setRerender={props.setRerender}
                                                boardIndex={boardIndex}
                                            />
                                        </span>
                                    </div>
                                )} </td>
                            )}
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BoardTable