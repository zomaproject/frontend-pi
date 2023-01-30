import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../redux/actions/loadingAction";
import { createRecipe } from "../redux/actions/recipesActions";

const useForm = (INITIAL_STATE) => {

	const [values, setValues] = useState(INITIAL_STATE);
	const dispatch = useDispatch();

	const handleValues = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (data) => {
		// e.preventDefault();
		// window.scrollTo({ top: 0, behavior: 'smooth' });
		// values.instructions = steps.map((s) => s.step);
		// values.Diets = Diets;
		// // validar longitud de los pasos
		// const stepsLentgtValidate = values.instructions.every(
		// 	(s) => s.length > 20 && s.length < 200,
		// );
		// if (!stepsLentgtValidate) {
		// 	setErrors({
		// 		...errors,
		// 		["steps"]: "Los pasos deben tener entre 10 y 200 caracteres",
		// 	});
		// } else {
		// 	setErrors({
		// 		...errors,
		// 		["steps"]: "",
		// 	});
		// }

		// if (
		// 	Object.values(values).includes("") ||
		// 	values.instructions.includes("") ||
		// 	values.Diets.length === 0
		// ) {
		// 	dispatch(createRecipeFailure("Todos los campos son obligatorios"));
		// 	return;
		// }
		// if (Object.values(errors).some((e) => e !== "")) {
		// 	dispatch(createRecipeFailure("Verifique los datos ingresados"));
		// 	return;
		// }
		// const formData = new FormData();
		// formData.append("title", values.title);
		// formData.append("summary", values.summary);
		// formData.append("healthScore", values.healthScore);
		// formData.append("Diets", values.Diets);
		// formData.append('image', imagex || values.image)
		// values.instructions.forEach((s) => formData.append("instructions", s));
		// if (values.idDB) {
		// 	// formData.append('id', values.idDB)
		// 	dispatch(updateRecipe(formData,values.idDB))

		// } else {
		// 	dispatch(createRecipe(formData)).then()
		// }
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


		dispatch(loading(true))
		dispatch(createRecipe(formData)).then(dispatch(loading(false)))
	};


	return {
		values,
		handleSubmit,
		setValues,
		handleValues,
	};
};

export default useForm;
