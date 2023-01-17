import { SET_ORDEN, ORDER, ON_OFF } from '../types'

export const setOrdenState = orden =>{
return {
  type: SET_ORDEN,
  payload: orden
}
}



const recipesToOrder = (recipes) => {
  return {
    type: ORDER,
    payload: recipes
  }
}

export const loadOrder = ( recipes) => {
  return (dispatch) => {
    // dispatch(setOrder(order))
     dispatch(recipesToOrder(recipes))
  }
}

