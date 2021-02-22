import React, {  memo, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, CircularProgress, Typography } from "@material-ui/core"
import { FormatListNumberedOutlined as FormatListNumberedOutlinedIcon } from "@material-ui/icons"
import {makeStyles} from "@material-ui/core/styles"
import { useSelector, useDispatch } from 'react-redux'

import * as types from "./store/types"
import { appInstance } from 'configurations/axios-config'
import Route from './Route'

const useStyles = makeStyles((theme) => ({
    routesHeader: {
        background: "linear-gradient(60deg, #66bb6a, #43a047)",
        boxShadow: "0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(76 175 80 / 40%)" // TODO:: check the shadows 
    }
}))

const RoutesList = ({agency, selectedRoute, history, location}) => {
    const classes = useStyles()
    const routesList = useSelector(state => state.routes.list)
    const routes =  Object.values(routesList);
    const {routesState} = useSelector(state => ({routesState: state.routes}))
    const dispatch = useDispatch();

    // Ajax call for getting all the routes
    useEffect(() => {
        dispatch({type: types.FETCH_ROUTES_START})
        
        appInstance.get(`${agency}/routes/`)
            .then((res) => {
                dispatch({type: types.FETCH_ROUTES_SUCCESS, routesList: res.data.items});
            })
            .catch((err) => {
                console.log(err);
            })
    }, [agency])

    let availbaleRoutes = null;
    if(routesState.loading)
        availbaleRoutes = <CircularProgress />
    else if(routesState.list.length === 0)
        availbaleRoutes = <Typography>Routes are Empty for "{agency}"</Typography>
    else 
        availbaleRoutes = (<List component="nav" aria-label="metro bus routes list">
                    {routes.map((route, index) => (
                        <Route {...{route, selectedRoute}} key={index} />
                    ))}
                </List>)

    return (
         <React.Fragment>
            <List component="nav" aria-label="metro bus routes" className={classes.routesHeader}>
                <ListItem>
                    <ListItemIcon>
                        <FormatListNumberedOutlinedIcon fontSize="large" color="inherit" />
                    </ListItemIcon>

                    <ListItemText primary="Routes" />
                </ListItem>
            </List>

            {availbaleRoutes}
        </React.Fragment>
        
    );
}

export default memo(RoutesList);