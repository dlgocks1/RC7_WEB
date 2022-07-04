import GeoLocationReducer from './GeoLocationReducer';
import PreViewReducer from './PreViewReducer';

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    GeoLocationReducer,
    PreViewReducer,
})

export default rootReducer;