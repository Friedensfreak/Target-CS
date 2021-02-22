import { configureStore } from '@reduxjs/toolkit';

import routesReducer from '../Routes/store/reducer'
import stopsReducer from '../DirectionsAndStops/store/reducer'

export default configureStore({
  reducer: {
    routes: routesReducer,
    stops: stopsReducer
  },
});