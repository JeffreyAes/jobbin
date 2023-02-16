import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BoardTable from '../components/BoardTable'
import BoardList from '../components/BoardList'
import BoardNew from '../components/BoardNew'
import JobForm from '../components/JobForm'
import NavBar from '../components/NavBar'



const Dashboard = (props) => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [loaded, setLoaded] = useState(false);
    const [boardIndex, setBoardIndex] = useState(0)
    const [tableIndex, setTableIndex] = useState()
    const [rerender, setRerender] = useState(false)
    const [showJobForm, setShowJobForm] = useState(false)

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
            <NavBar loaded={loaded} user={user} boardIndex={boardIndex} setBoardIndex={setBoardIndex} tableIndex={tableIndex} setTableIndex={setTableIndex} setRerender={setRerender} />
            <div className='mt-3'>
               

                {showJobForm === false ?
                    <BoardTable setShowJobForm={setShowJobForm} tableIndex={tableIndex} setTableIndex={setTableIndex} user={user} setRerender={setRerender} setUser={setUser} loaded={loaded} boardIndex={boardIndex} setBoardIndex={setBoardIndex} />
                    : <JobForm setShowJobForm={setShowJobForm} user={user} boardIndex={boardIndex} setBoardIndex={setBoardIndex} setTableIndex={setTableIndex} tableIndex={tableIndex} setRerender={setRerender} />
                }
            </div>
        </div>
    )
}

export default Dashboard