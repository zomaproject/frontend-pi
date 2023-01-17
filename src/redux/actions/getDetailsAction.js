import clienteAxios from "../../config/clienteAxios"
import { GET_DETAILS } from "../types"


const getDetails = (details) => ({ type: 'GET_DETAILS' , payload:  details})


export  const loadDetail = (id) => {
    return async ( dispatch ) => {
      try{
        const { data }  = await clienteAxios(`/recipes/${id}`)
        dispatch(getDetails(data))
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
}