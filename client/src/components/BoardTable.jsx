import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TableNew from './TableNew'

const BoardTable = (props) => {
    const user = props.user
    const setUser = props.setUser
    const loaded = props.loaded
    const boardIndex = props.boardIndex
    const [tableIndex, setTableIndex] = useState(0)

    return (
        <div className="">

         
                <div className="d-flex justify-content-center">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                {user?.board[boardIndex].table.list.map((list, i) =>
                                    <th key={i} >{list.name} <button>delete</button></th>
                                )}
                                <td ><TableNew user={user} setUser={setUser} setRerender={props.setRerender}  boardIndex={boardIndex}  /></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {user?.board[boardIndex].table.list.map((list, i) =>
                                    <td key={i}><button className='btn btn-info text-white'>+</button></td>
                                )}
                                <td></td>
                            </tr>
                            <tr>
                                {user?.board[boardIndex].table.list.map((list, i) =>
                                    <td key={i}>{list.value? list.value  : "‎  "  } </td>
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