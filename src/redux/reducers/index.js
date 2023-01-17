import { combineReducers } from 'redux';
import detailReducer from './detailReducer';
import loadingReducer from './loadingReducer';
import paginationReducer from './paginationReducer';
import recipesReducer from './recipesReducer';
import searchReducer from './searchReducer';
import typesDietsReducer from './typesDietsReducer';

export default combineReducers({
    recipes: recipesReducer,
    loading: loadingReducer,
    search: searchReducer,
    typesDiets: typesDietsReducer,
    details: detailReducer,
    pagination: paginationReducer
});