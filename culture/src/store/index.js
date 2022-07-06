import GeoLocationReducer from './GeoLocationReducer';
import PreViewReducer from './PreViewReducer';
import LoginReducer from './LoginReducer';
import BookmarkReducer from './BookmarkReducer';

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    GeoLocationReducer,
    PreViewReducer,
    LoginReducer,
    BookmarkReducer,
})

export default rootReducer;