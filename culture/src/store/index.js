import GeoLocationReducer from './GeoLocationReducer';
import PreViewReducer from './PreViewReducer';
import LoginReducer from './LoginReducer';

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    GeoLocationReducer,
    PreViewReducer,
    LoginReducer,
})

export default rootReducer;