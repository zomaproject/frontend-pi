import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import recipesReducer from './recipesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    recipes: recipesReducer,
    loading: loadingReducer,
    search: searchReducer
});