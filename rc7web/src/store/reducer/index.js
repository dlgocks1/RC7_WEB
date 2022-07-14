// reducer들을 하나로 묶어서 관리
import loginReducer from "./login";
import favoriteDataReducer from "./favoriteData";
import episodeModalReducer from "./episodemodal";
import previewModalReducer from "./previewModal";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    loginReducer,
    favoriteDataReducer,
    episodeModalReducer,
    previewModalReducer,
})

export default rootReducer;