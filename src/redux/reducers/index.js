import { combineReducers } from 'redux';
import createRecipeReducer from './createRecipeReducer';
import detailReducer from './detailReducer';
import filterReducer from './filterReducer';
import loadingReducer from './loadingReducer';
import orderReducer from './orderReducer';
import paginationReducer from './paginationReducer';
import recipesReducer from './recipesReducer';
import searchReducer from './searchReducer';
import typesDietsReducer from './typesDietsReducer';

export default combineReducers({
    recipes: recipesReducer,
    loading: loadingReducer,
    search: searchReducer,
    typesDiets: typesDietsReducer,
    pagination: paginationReducer ,
    details: detailReducer,
    orden: orderReducer,
    filter: filterReducer,
    createRecipe:   createRecipeReducer 
});