import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
// import alertaReducer from './alertaReducer';

export default combineReducers({
    recipes: recipesReducer
});