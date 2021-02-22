import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { Menu as MenuIcon, Commute as CommuteIcon, } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#4a4a4a', 
        position: "sticky",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginRight: 36,
    },
    transitIcon: {
        flexGrow: 1,
        marginRight: theme.spacing(-1)
    },
    tabs: { 
        flexGrow: 1, 
        marginLeft: theme.spacing(2)
    }, 
    title: {
        flexGrow: 1,
    },   
}))

const ToolbarComp = ({toggleDrawer, handleDrawerClose, handleDrawerOpen, tabValue, handleTabChange}) => {
    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={ toggleDrawer ? handleDrawerClose : handleDrawerOpen }>
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
                <IconButton edge="start" className={classes.transitIcon} color="inherit" aria-label="icon">
                    <CommuteIcon fontSize="large" />
                </IconButton>
                MTNT
            </Typography>

            <Button color="inherit">Login</Button>
        </Toolbar>
    );
}

export default memo(ToolbarComp)