import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../redux/actions/createRecipeActions";

export default function UseForm(INITIAL_STATE,  steps, diets,) {
	const [values, setValues] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		e.preventDefault();
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		values['steps'] = Object.values(steps) 
		console.log(values)
	};
	return {
		values,
		handleChange,
		handleSubmit,
	};
}
