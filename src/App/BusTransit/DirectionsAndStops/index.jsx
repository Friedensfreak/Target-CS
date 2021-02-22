import React, { useEffect, memo } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, CircularProgress, Typography } from "@material-ui/core"
import { DirectionsOutlined as DirectionsOutlinedIcon } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from 'react-redux'
import { withRouter} from 'react-router-dom'

import StopsTimeline from "./StopsTimeline"
import { appInstance } from 'configurations/axios-config'
import * as types from "./store/types"
import {getParameterByName} from 'helpers/utils'

const useStyles = makeStyles(() => ({
    routesHeader: {
        background: "linear-gradient(60deg, #26c6da, #00acc1)",
        boxShadow: "0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 172 193 / 40%)"
    },
    routeLists:{
        float: "left"
    }
}))

const DirectionsWithStops = ({agency, match, history}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let currentRoute = getParameterByName("routeParam");
    const {stopsState, routesState} = useSelector(state => ({stopsState: state.stops, routesState: state.routes}))

    useEffect(() => {
        if(agency){
            // Ajax call for the list of stops in a route
            if(currentRoute) {
                dispatch({type: types.FETCH_ROUTE_STOPS_START})

                const route = currentRoute && currentRoute.split('/').length > 1 ? 
                    currentRoute.split('/')[0] : currentRoute
                appInstance.get(`${agency}/routes/${route}/stops/`)
                    .then(res => dispatch({type: types.FETCH_ROUTE_STOPS_SUCCESS, stopsList: res.data.items}))
                    .catch( err => console.log(err))
            }
        } else dispatch({type: types.STOP_LOADER});

        return () => {
            dispatch({type: types.CLEAR_STATE})
        }
    }, [ agency, currentRoute])

    let stopsTemplate = null;
    console.log(currentRoute, stopsState)
    
    if(stopsState.loading && currentRoute)
        stopsTemplate = <CircularProgress />
    else if(currentRoute === null && !routesState.loading)
        stopsTemplate = <Typography>Select a route from agency "{agency}"</Typography>
    else 
        stopsTemplate = <StopsTimeline />
    
    return (
        <React.Fragment>
            <List component="nav" aria-label="metro bus stops" className={classes.routesHeader}>
                <ListItem>
                    <ListItemIcon>
                        <DirectionsOutlinedIcon fontSize="large" color="inherit" />
                    </ListItemIcon>

                    <ListItemText primary="Directions &amp; Stops" />
                </ListItem>
            </List>

            {stopsTemplate}
        </React.Fragment> 
    );
}

export default withRouter(memo(DirectionsWithStops));