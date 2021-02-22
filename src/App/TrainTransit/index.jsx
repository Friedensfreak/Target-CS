import React from 'react';
import { Grid, Typography, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    girdContainer: {
        height: "calc(100vh - 70px)",
    },
}))

const TrainTransit = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center" spacing={3} className={classes.girdContainer}>
            <Toolbar />

            <Grid item xs={12} >
                    <Typography variant="h2"> Train transit comming soon!</Typography>
            </Grid> 
        </Grid>
    );
}

export default TrainTransit;