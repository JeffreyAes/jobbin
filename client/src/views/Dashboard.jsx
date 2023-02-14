import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BoardTable from '../components/BoardTable'
import BoardList from '../components/BoardList'
import AddBoard from '../components/AddBoard'



const Dashboard = (props) => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [loaded, setLoaded] = useState(false);
    const [boardIndex, setBoardIndex] = useState(0)
    const [rerender, setRerender] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id, { withCredentials: true })
            .then(res => {
                setUser(res.data);
                setLoaded(true);
                setRerender(false)
            })
            .catch(err => console.error(err));
    }, [rerender]);

    
    return (
        <div>
        <BoardList user={user} setUser={setUser} loaded={loaded} boardIndex={boardIndex} setBoardIndex={setBoardIndex} />
        <h1>{user?.username} <AddBoard user={user}/></h1>
        <BoardTable user={user} setRerender={setRerender} setUser={setUser} loaded={loaded } boardIndex={boardIndex} setBoardIndex={setBoardIndex} />
        
        </div>
    )
}

export default Dashboard