import React, {useState, useCallback, useEffect, memo} from 'react';
import { Grid, Paper,Tabs,Tab, Container, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import RoutesList from './Routes'
import DirectionsAndStops from "./DirectionsAndStops"
import {AGENCIES_LIST} from 'configurations/componentsConfig'
import {withRouter} from "react-router-dom"
import {getParameterByName} from 'helpers/utils'

const useStyles = makeStyles((theme) => ({
    girdContainer: {
        height: "calc(100vh - 70px)",
    },
    paper: {
        height: "100%",
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
    },
    progress: {
        position: "absolute",
        margin: "0 auto"
    },
    tabs: {
        flex: 1,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const BusTransit = ({name, history, match, location, ...rest}) => {
    const classes = useStyles();

    // Get and Set of Agencies
    let initAgencyIndex = 0
    if(location.pathname.split('/').length > 2){
        if (location.pathname.split('/')[2] !== ""){
            initAgencyIndex = AGENCIES_LIST.map(agency => agency.name).indexOf(location.pathname.split('/')[2]);
        }
    }
 
    const [currentAgencyIndex, setCurrentAgencyIndex] = useState(initAgencyIndex)
    const setCurrentAgency = useCallback((e, index) => {
        setCurrentAgencyIndex(index);
    }, [])

    useEffect(() => {
        let routeNum = getParameterByName("routeParam");
        let routeParam = ""
        if(routeNum)
            routeParam = "?routeParam=" + routeNum
        
        history.push(match.path + AGENCIES_LIST[initAgencyIndex].path + 
            (routeNum ? routeParam : ""))
    }, [])

    const currentAgency = AGENCIES_LIST[currentAgencyIndex].name

    return (
        <Container>
            <Toolbar />
        {/* {console.log(rest, match, history)} */}
            <Paper square className={classes.tabs}>
                <Tabs
                    value={currentAgencyIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={setCurrentAgency}
                    aria-label="disabled tabs example"
                    centered
                >
                    {AGENCIES_LIST.map((agency, index) => <Tab key={index} label={agency.name} 
                        onClick={() => history.push(match.path + agency.path)} {...a11yProps(index)}
                    />)}
                </Tabs>
            </Paper>
            
            <Grid container justify="center" spacing={3} className={classes.girdContainer}>
                <Grid item xs={6} >
                    <Paper className={classes.paper}>
                        <RoutesList {...{agency: currentAgency}} />
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paper}>
                        <DirectionsAndStops {...{agency: currentAgency} }/>
                    </Paper>
                </Grid> 
            </Grid>
        </Container>
        
    );
}

export default withRouter(memo(BusTransit));