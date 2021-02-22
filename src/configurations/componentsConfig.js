import {
    BusTransit,
    TrainTransit
} from 'helpers/ReactLazy'

import { DirectionsBus as DirectionsBusIcon, DirectionsTransit as DirectionsTransitIcon, } from '@material-ui/icons'

export const TRANSITS_LIST = [
    { icon: DirectionsBusIcon, title: "Bus Lines", path:'/bus', component: BusTransit }, 
    { icon: DirectionsTransitIcon, title: 'Train Lines', path:"/train", component: TrainTransit}
]
export const AGENCIES_LIST = [
    {name: 'lametro', available: true, path:"/lametro"}, 
    {name: 'lvmetro', available: false, path:"/lvmetro"}, 
    {name: 'sfmetro', available: false, path:"/sfmetro"}, 
    {name: 'sjmetro', available: false, path:"/sjmetro"},
]