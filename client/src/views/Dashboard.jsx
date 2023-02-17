import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BoardTable from '../components/BoardTable'
import JobForm from '../components/JobForm'
import NavBar from '../components/NavBar'
import BoardForm from '../components/BoardForm'
import JobDetail from '../components/JobDetail'
import Box from '@mui/material/Box';
import TableForm from '../components/TableForm'
import { Typography } from '@mui/material'


const Dashboard = (props) => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [loaded, setLoaded] = useState(false);
    const [boardIndex, setBoardIndex] = useState(0)
    const [tableIndex, setTableIndex] = useState()
    const [jobIndex, setJobIndex] = useState()
    const [rerender, setRerender] = useState(false)
    const [showJobForm, setShowJobForm] = useState(false)
    const [showBoardForm, setShowBoardForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [showTableEdit, setShowTableEdit] = useState(false)
    const [oldTableName, setOldTableName] = useState()

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
        <Box>

            <NavBar setShowBoardForm={setShowBoardForm} loaded={loaded} user={user} boardIndex={boardIndex} setBoardIndex={setBoardIndex} tableIndex={tableIndex} setTableIndex={setTableIndex} setRerender={setRerender} />
            <Typography sx={{m:2, display: 'flex', justifyContent: 'flex-start', marginLeft:8}} variant="h5" component="div"  >
                        {user?.board[boardIndex].boardName}
                    </Typography>
            <div className='mt-3'>

                {
                    showJobForm === false && showBoardForm === false && showDetail === false && showTableEdit=== false?
                    <BoardTable  setOldTableName={setOldTableName} setShowTableEdit={setShowTableEdit}  setJobIndex={setJobIndex} setShowDetail={setShowDetail} setShowJobForm={setShowJobForm} tableIndex={tableIndex} setTableIndex={setTableIndex} user={user} setRerender={setRerender} loaded={loaded} boardIndex={boardIndex} setBoardIndex={setBoardIndex} />
                    : showJobForm === true ? <JobForm setShowJobForm={setShowJobForm} user={user} boardIndex={boardIndex} setBoardIndex={setBoardIndex} setTableIndex={setTableIndex} tableIndex={tableIndex} setRerender={setRerender} />
                    : showBoardForm === true ? <BoardForm setShowBoardForm={setShowBoardForm} user={user} setRerender={setRerender} />
                    :showDetail === true? <JobDetail jobIndex={jobIndex} setShowDetail={setShowDetail} tableIndex={tableIndex}  user={user} setRerender={setRerender} boardIndex={boardIndex}  />
                    :showTableEdit === true? <TableForm boardIndex={boardIndex} tableIndex={tableIndex} oldTableName={oldTableName} user={user} setRerender={setRerender} setShowTableEdit={setShowTableEdit} />
                    :""
                }

            </div>
                </Box>
    )
}

export default Dashboard