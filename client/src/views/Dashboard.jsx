import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BoardTable from '../components/BoardTable'



const Dashboard = (props) => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id, { withCredentials: true })
            .then(res => {
                setUser(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    
    return (
        <div>
        <h1>{user?.username}</h1>
        <BoardTable user={user} setUser={setUser} loaded={loaded} />
        
        </div>
    )
}

export default Dashboard