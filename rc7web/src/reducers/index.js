// reducer들을 하나로 묶어서 관리
import loginReducer from "./loginReducer";
import favoriteDataReducer from "./favoriteReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    loginReducer,
    favoriteDataReducer,
})

export default rootReducer;