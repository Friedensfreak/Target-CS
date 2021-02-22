import React, { memo} from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import {withRouter} from 'react-router-dom'

import { DRAWER_WIDTH } from "helpers/consts"
import { TRANSITS_LIST } from 'configurations/componentsConfig'

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}))

const DrawerComp = ({ toggleDrawer, history, location, ...rest}) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                    [classes.drawerOpen]: toggleDrawer,
                    [classes.drawerClose]: !toggleDrawer,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: toggleDrawer,
                    [classes.drawerClose]: !toggleDrawer,
                }),
            }}
        >
            <Toolbar />
            
            <List>
                {TRANSITS_LIST.map((transit, index) => (
                    <ListItem button key={index} selected={location.pathname.includes(transit.path)} 
                        onClick={(e) => history.push(transit.path)}>
                        <ListItemIcon className={classes.transitIcons}>{React.createElement(transit.icon)}</ListItemIcon>
                        <ListItemText primary={transit.title} />
                    </ListItem>
                ))}
            </List>

        </Drawer>
    );
}

export default withRouter(memo(DrawerComp))