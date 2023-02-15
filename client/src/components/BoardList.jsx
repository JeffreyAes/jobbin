import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import BoardDelete from './BoardDelete';

const BoardList = (props) => {
    const user = props.user
    const loaded = props.loaded
    // const boardIndex = props.boardIndex
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
                    <ListItem key={index}  disablePadding>
                        <ListItemButton >
                        <Button variant='text' color='inherit' size='small'  onClick={() => {
                            selectBoard(index)
                          }}>     
                            <ListItemText    primary={text.boardName} />
                    </Button>
                            <BoardDelete user={user} boardIndex={index} setBoardIndex={setBoardIndex} setRerender={props.setRerender} />
                        </ListItemButton>
                    </ListItem>
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