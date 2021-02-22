import initState from './initState'
import * as types from "App/BusTransit/store/types"
import { updateObject } from 'helpers/utils'

function fetchRoutesSuccess(state, action){
    const newRoutesList = []

    action.routesList.forEach(route => {
        // Split & trim the Array and its values
        const displayNameSplit = route.display_name.split(" ");
        const busNum = displayNameSplit.shift() || route.id 
        const displayName = displayNameSplit.join(" ").split("-").map(val => val.trim()).join(" - ")
        const createdRoute = {id: busNum, displayName}

        // Filter the already existing duplicates
        const duplicateRoutes = newRoutesList.filter(newRoute => newRoute.displayName === displayName)
        if(duplicateRoutes.length > 0) {
            const duplicateRoute = duplicateRoutes[0]
            duplicateRoute.id = duplicateRoute.id + '/' + createdRoute.id;
            newRoutesList.splice(newRoutesList.indexOf(duplicateRoute), 1, duplicateRoute)
        } else newRoutesList.push(createdRoute)
    })

    return updateObject(state, {
        loading: false,
        list: newRoutesList
    })
}

function fetchRoutesStart(state, action){
    return updateObject(state, {
        loading: true
    })
}

function reducer(state = initState, action) {
    switch (action.type) {
        case types.FETCH_ROUTES_START:
            return fetchRoutesStart(state, action);
        case types.FETCH_ROUTES_SUCCESS:
            return fetchRoutesSuccess(state, action);
        default:
            return state;
    }
}

export default reducer