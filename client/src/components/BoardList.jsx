import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DehazeIcon from '@mui/icons-material/Dehaze';

const BoardList = (props) => {
    const user = props.user
    const setUser = props.user
    const loaded = props.loaded
    const boardIndex = props.boardIndex
    const setBoardIndex = props.setBoardIndex

    const [state, setState] = React.useState({
        left: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const selectBoard = ( index) => {
        setBoardIndex(index)
        console.log(index)

    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {loaded && user.board.map((text, index) => (
                    <button key={index} onClick={() => {
                        selectBoard(index)
                      }}>
                    <ListItem   disablePadding>
                        <ListItemButton >
                            
                            <ListItemText    primary={text.boardName} />
                        </ListItemButton>
                    </ListItem>
                    </button>
                ))}
            </List>
            
        </Box>
    );

    return (
        <div className='d-flex flex-start'>
            <React.Fragment>
                <Button onClick={toggleDrawer('left', true)} >{<DehazeIcon />}</Button>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}



export default BoardList