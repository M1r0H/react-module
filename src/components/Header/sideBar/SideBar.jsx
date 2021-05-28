import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import { SpawnCategories } from '../../Categories/SpawnCategories/SpawnCategories.jsx';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './sideBar.css'

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export const SideBar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = (event) => {
        event.stopPropagation()
        setOpen(!open);
    };
    return (
        <div className={classes.myTheam}>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <Link to="/main" name="Home" className="link" >Home</Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingBasketIcon />
                </ListItemIcon>
                <Link to={{
                    pathname: "/main/busket",
                    state: {
                        name: "Busket"
                    }
                }}
                    name="Busket"
                    className="link"
                >Busket</Link>
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Category" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className={classes.nested}>
                    <SpawnCategories />
                </List>
            </Collapse>
        </div>
    )
}