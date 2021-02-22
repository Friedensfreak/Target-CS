import React, {memo} from 'react';
import { Timeline,  TimelineItem,  TimelineSeparator, 
    TimelineDot, TimelineContent, TimelineConnector,
       } from "@material-ui/lab"
import {  useSelector } from 'react-redux'
import { Grid, Card,CardContent, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    timelineItem: {
        "&::before": {
            display:"none"
        }
    },
    card: {
        flex: 1,

    }
}))

const StopsTimeline = () => {
    const classes = useStyles();
    const stopsList = useSelector((state) => state.stops.list)

    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <Timeline align="left">
                    {stopsList.map((stop, index) => (
                        <TimelineItem key={index} className={classes.timelineItem} >
                            <TimelineSeparator >
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                {stop.display_name}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>
            
            <Grid item xs>
                <Card className={classes.card} py={20}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {stopsList.length + " Stops"}
                        </Typography>
                    </CardContent>
                </Card>
                    
            </Grid>
        </Grid>
        
    );
}

export default memo(StopsTimeline);