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
                {board.table.list.map((list, i) =>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th key={i}>{list.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td key={i}>{list.value.length > 0? list.value : "‎  " }</td>
                        </tr>
                    </tbody>
                </table>
                )}
            </div>
            )}
            </div>
    )
}

export default BoardTable