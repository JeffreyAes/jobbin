import React from 'react'
import BoardList from './BoardList'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BoardNew from './BoardNew';
import Logout from './Logout';

const NavBar = (props) => {
    const user = props.user
    const boardIndex = props.boardIndex
    const setBoardIndex = props.setBoardIndex
    const setRerender = props.setRerender
    const loaded = props.loaded


    return (
        <Box >
            <AppBar position="static" color='inherit'>
                <Toolbar >
                <BoardList  sx={{flex:1}}  loaded={loaded} user={user} setRerender={setRerender}  boardIndex={boardIndex} setBoardIndex={setBoardIndex} />
                    <Typography sx={{m:2}} variant="h4" component="div" >
                        Jobbin'  
                    </Typography>
                        <BoardNew setShowBoardForm={props.setShowBoardForm} user={user} setRerender={setRerender} />
                    <Typography variant="h4" component="div" sx={{flex:1, mr:25}}  >
                        {user?.username}
                    </Typography>
                    <Logout />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar