import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const Dashboard = (props) => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id, { withCredentials: true })
            .then(res => {
                setUser(res.data);
                setLoaded(true);
                defaultBoard()
            })
            .catch(err => console.error(err));
    }, []);

    const defaultBoard = () => {
        if (user?.board.length === 0) {
            let arr = []
            let date = new Date();
            let today = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString()
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
                    console.log(user.board[0])
                })
                .catch(err => {
                    console.log(err)
                
                })
        }
    }
    return (
        <div>
        <h1>{user?.username}</h1>
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
                        <td key={i}>{list.value}</td>
                    </tr>
                </tbody>
            </table>
            )}
        </div>
        )}
        
        </div>
    )
}

export default Dashboard