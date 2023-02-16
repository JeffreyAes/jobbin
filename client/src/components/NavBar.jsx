import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BoardList from './BoardList'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BoardNew from './BoardNew';
import Logout from './Logout';

const NavBar = (props) => {
    const { id } = useParams()
    const user = props.user
    const boardIndex = props.boardIndex
    const setBoardIndex = props.setBoardIndex
    const tableIndex = props.tableIndex
    const setTableIndex = props.setTableIndex
    const setRerender = props.setRerender
    const loaded = props.loaded


    return (
        <Box >
            <AppBar position="static" color='inherit'>
                <Toolbar >
                <BoardList  loaded={loaded} user={user} setRerender={setRerender}  boardIndex={boardIndex} setBoardIndex={setBoardIndex} />
                    <Typography sx={{m:2}} variant="h4" component="div" >
                        Jobbin'  
                    </Typography>
                        <BoardNew setShowBoardForm={props.setShowBoardForm} user={user} setRerender={setRerender} />
                    <Typography variant="h4" component="div" sx={{flexGrow:0.8}}  >
                        {user?.username}
                    </Typography>
                    <Logout sx={{flexGrow:1}}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar