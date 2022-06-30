// reducer들을 하나로 묶어서 관리
import loginReducer from "./loginReducer";
import favoriteDataReducer from "./favoriteReducer";
import episodeModalReducer from "./episodemodalReducer";
import previewModalReducer from "./previewModalReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    loginReducer,
    favoriteDataReducer,
    episodeModalReducer,
    previewModalReducer,
})

export default rootReducer;