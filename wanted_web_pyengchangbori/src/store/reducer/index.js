import LoginReducer from './LoginReducer';
import JobCategoryReducer from './JobCategoryReducer';
import WdListReducer from './WdListReducer';
import ToastModalReducer from './ToastModalReducer';
import UserDataReducer from './UserDataReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
	LoginReducer,
	JobCategoryReducer,
	WdListReducer,
	ToastModalReducer,
	UserDataReducer,
});

export default rootReducer;
