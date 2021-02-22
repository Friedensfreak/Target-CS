import React, {memo,} from 'react';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { withRouter  } from 'react-router-dom'

import { getParameterByName } from 'helpers/utils'

const Route = ({route, history, match, location, }) => {
    return (
        <ListItem key={route.id} button selected={route.id === getParameterByName("routeParam")} 
            onClick={(e) => {
                history.push(location.pathname + "?routeParam=" + route.id)
            }} >
                
            <ListItemIcon>
                {route.id}
            </ListItemIcon>

            <ListItemText primary={route.displayName} />
        </ListItem>
    );
}

export default withRouter(memo(Route))