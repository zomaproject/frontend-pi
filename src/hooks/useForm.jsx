import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../redux/actions/loadingAction";
import { cleanMsg, createRecipe, setEdit, setMsg, updateRecipe } from "../redux/actions/recipesActions";

const useForm = (INITIAL_STATE,errors) => {

	const [values, setValues] = useState(INITIAL_STATE);
	const dispatch = useDispatch();

	const handleValues = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (data, id) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });

		if(Object.values(data).includes('') || data.image === undefined || data.diets.length === 0 || data.instructions.includes('') ){
			dispatch(setMsg({msg: 'Please fill all the fields', error: true}))
			setTimeout(() => {
				dispatch(cleanMsg())
			}, 5000)
			return 
		}

		if(Object.values(errors).some( e => e !== '') || data.diets.length  === 0 || data.diets.length < 2  || data.instructions.some( e => e.length < 20 || e.length > 200)){
			dispatch(setMsg({msg: 'Verify the fields', error: true}))
			setTimeout(() => {
				dispatch(cleanMsg())
			}, 5000)
			return 
		}
		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("summary", data.summary);
		formData.append("healthScore", data.healthScore);
		data.diets.forEach(diet => {
			formData.append("Diets", diet)
		});
		data.instructions.forEach(s => {
			formData.append("instructions", s)
		});
		formData.append('image', data.image)
		console.log(formData.get('Diets'))
		if (id) {
			dispatch(loading(true))
			dispatch(updateRecipe(formData, id))
				.then(()=>dispatch(setEdit({})))
				.then(()=>dispatch(loading(false)))
			return
		}

		dispatch(loading(true))
		dispatch(createRecipe(formData)).then(()=>dispatch(loading(false)))
	};


	return {
		values,
		handleSubmit,
		setValues,
		handleValues,
	};
};

export default useForm;
