import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BoardTable = (props) => {
    const user = props.user
    const setUser = props.user
    const loaded = props.loaded

    return (
        <div className="">

            {loaded && user.board.map((board, i) =>
                <div key={i} className="d-flex justify-content-center">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                {board.table.list.map((list, i) =>
                                    <th key={i} >{list.name} <button>delete</button></th>
                                )}
                                <td key={i}><button className='btn btn-info text-white'>Add List</button></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {board.table.list.map((list, i) =>
                                    <td key={i}><button className='btn btn-info text-white'>+</button></td>
                                )}
                                <td></td>
                            </tr>
                            <tr>
                                {board.table.list.map((list, i) =>
                                    <td key={i}>{list.value.length > 0 ? list.value  : "‎  "  } </td>
                                )}
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default BoardTable