import clienteAxios from "../../config/clienteAxios"
import { GET_DIETS } from "../types"

const getDiets = (diets) => {
  return {
    type: GET_DIETS,
    payload: diets
  }
}

export const loadDiets = () => {
  return async (dispatch) => {
    try {
      const { data } = await clienteAxios('/diets')
      dispatch(getDiets(data))
    } catch (error) {
      // dispatch(setAlerta(error.response.data.msg))
      console.log(error.message)
    }

  }
}