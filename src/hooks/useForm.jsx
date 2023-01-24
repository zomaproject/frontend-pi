import { useState } from "react";
import {useDispatch} from 'react-redux'
import { createRecipeFailure } from "../redux/actions/createRecipeActions";

const useForm = (INITIAL_STATE,  steps, Diets) => {
	const [values, setValues] = useState(INITIAL_STATE);
  const dispatch = useDispatch() 

	const handleValues = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

  const handleSubmit  = (e) => {
    e.preventDefault()
		values.instruccions = Object.values(steps)
		values.Diets = Diets 
		console.log(values)
    if(Object.values(values).includes('') || values.instruccions.includes('')){
      dispatch(createRecipeFailure('Todos los campos son obligatorios'))
      return
    }
  }

	return {
		values,
		handleValues,
    handleSubmit,
	};
};

export default useForm;
