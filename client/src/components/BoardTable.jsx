import React from 'react'
import TableNew from './TableNew'
import TableDelete from './TableDelete'
import JobNew from './JobNew'
import JobDelete from './JobDelete'

const BoardTable = (props) => {
    const user = props.user
    const setUser = props.setUser
    // const loaded = props.loaded
    const boardIndex = props.boardIndex
    const tableIndex = props.tableIndex
    const setTableIndex = props.setTableIndex

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
                                    <span className='inline' key={j}>{val[0]}  <JobDelete
                                        tableIndex={i}
                                        jobIndex={j}
                                        user={user}
                                        setUser={setUser}
                                        setRerender={props.setRerender}
                                        boardIndex={boardIndex}
                                    /></span>
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