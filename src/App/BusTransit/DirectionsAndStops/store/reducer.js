import initState from './initState'
import * as types from "App/BusTransit/store/types"
import { updateObject } from 'helpers/utils'

function fetchRoutesStopsStart(state, action){
    return updateObject(state, {
        loading: true
    })
}

function fetchRoutesStopsSuccess(state, action){
    return updateObject(state, {
        loading: false,
        list: action.stopsList
    })
}

function stopLoader(state, action){
    return updateObject(state, {
        loading: false
    })
}

function clearState(state){
    return updateObject(state, JSON.parse(JSON.stringify(initState)))
}

function reducer(state = JSON.parse(JSON.stringify(initState)), action) {
    switch (action.type) {
        case types.FETCH_ROUTE_STOPS_START:
            return fetchRoutesStopsStart(state, action)
        case types.FETCH_ROUTE_STOPS_SUCCESS:
            return fetchRoutesStopsSuccess(state, action)
        case types.STOP_LOADER:
            return stopLoader(state, action);
        case types.CLEAR_STATE:
            return clearState(state)
        default:
            return state;
    }
}

export default reducer