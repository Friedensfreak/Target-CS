import React, {useCallback, useState, memo} from 'react';
import {AppBar, CssBaseline, Container} from '@material-ui/core';

import ToolbarComp from './Toolbar'
import DrawerComp from './Drawer'
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from "helpers/consts"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  content: {
      flexGrow: 1,
      backgroundColor: "#fafafa"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

const Layout = (props) => {
    const classes = useStyles();

    const [toggleDrawer, setToggleDrawer] = useState(false);

    const handleDrawerOpen = useCallback(() => {
        setToggleDrawer(true);
    }, [])

    const handleDrawerClose = useCallback(() => {
        setToggleDrawer(false);
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar position="fixed" className={classes.appBar}>
                <ToolbarComp {...{
                toggleDrawer,
                handleDrawerOpen,
                handleDrawerClose,
                }}/>
            </AppBar>

            <DrawerComp {...{
                toggleDrawer,
            }}/>

            <main className={classes.content}>
                <Container>
                    {props.children}
                </Container>
            </main>
        </div>
    );
}

export default memo(Layout);