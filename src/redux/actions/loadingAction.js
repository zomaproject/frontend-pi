import { LOADING } from "../types"

export const  loading = (bool) => {
  return {
    type: LOADING ,
    payload: bool
  }
}