import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import jwt from 'jsonwebtoken';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { SideBar } from './sideBar/SideBar.jsx';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
        overflowY: 'overlay',
    },
    fullList: {
        width: 'auto',
    },
}));

export default function ButtonAppBar({ history, location: { pathname, state } }) {
    const classes = useStyles();
    const [states, setState] = React.useState({
        left: false
    });
    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/')
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...states, [anchor]: open });
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <SideBar />
            </List>
        </div>
    )
    const userName = () => {
        if (localStorage.getItem('token')) {
            const { sub: { login } } = jwt.decode(localStorage.getItem('token'))
            return login
        }
    }
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            {['left'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <MenuIcon onClick={toggleDrawer(anchor, true)}/>
                                    <Drawer anchor={anchor} open={states[anchor]} onClose={toggleDrawer(anchor, false)}>
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </IconButton>
                        {pathname === '/' || pathname === '/signup' ?
                            <Typography variant="h6" className={classes.title}>
                                My app
                            </Typography>
                            :
                            <Typography variant="h6" className={classes.title}>
                                {pathname === '/main' ? "Home Page" : `${state.name}`}
                            </Typography>}
                        <Typography className={classes.menuButton}>
                            {pathname === '/' || pathname === '/signup' ? 'User' : `User: ${userName()}`}
                        </Typography>
                        {pathname === '/' || pathname === '/signup' ? <></> : <Button color="inherit" onClick={logOut}>Log out</Button>}
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}





