import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createRecipeFailure,
	createRecipe,
} from "../redux/actions/createRecipeActions";
import { updateRecipe } from "../redux/actions/recipesActions";

const useForm = (INITIAL_STATE, steps, Diets, imagex) => {
	const [values, setValues] = useState(INITIAL_STATE);
	const [errores, setErrores] = useState({});
	const dispatch = useDispatch();

	const handleValues = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const validForm = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "title":
				if (value.length < 4 || value.length > 50) {
					setErrores({
						...errores,
						[name]: "El nombre debe tener entre 4 y 50 caracteres",
					});
				} else {
					setErrores({
						...errores,
						[name]: "",
					});
				}
				break;

			case "healthScore":
				if (value < 0 || (value > 100 && !isNaN(value))) {
					setErrores({
						...errores,
						[name]: "El puntaje debe estar entre 0 y 100",
					});
				} else if (isNaN(value)) {
					setErrores({
						...errores,
						[name]: "El puntaje debe ser un número",
					});
				} else {
					setErrores({
						...errores,
						[name]: "",
					});
				}
				break;
			case "summary":
				if ((name === "summary" && value.length < 100) || value.length > 700) {
					setErrores({
						...errores,
						[name]: "El resumen debe tener entre 100 y 700 caracteres",
					});
				} else {
					setErrores({
						...errores,
						[name]: "",
					});
				}
				break;

			default:
				break;
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		values.instructions = steps.map((s) => s.step);
		values.Diets = Diets;
		// validar longitud de los pasos
		const stepsLentgtValidate = values.instructions.every(
			(s) => s.length > 20 && s.length < 200,
		);
		if (!stepsLentgtValidate) {
			setErrores({
				...errores,
				["steps"]: "Los pasos deben tener entre 10 y 200 caracteres",
			});
		} else {
			setErrores({
				...errores,
				["steps"]: "",
			});
		}

		if (
			Object.values(values).includes("") ||
			values.instructions.includes("") ||
			values.Diets.length === 0
		) {
			dispatch(createRecipeFailure("Todos los campos son obligatorios"));
			return;
		}
		if (Object.values(errores).some((e) => e !== "")) {
			dispatch(createRecipeFailure("Verifique los datos ingresados"));
			return;
		}
		const formData = new FormData();
		formData.append("title", values.title);
		formData.append("summary", values.summary);
		formData.append("healthScore", values.healthScore);
		formData.append("Diets", values.Diets);
		formData.append('image', imagex || values.image)
		values.instructions.forEach((s) => formData.append("instructions", s));
		if (values.idDB) {
			// formData.append('id', values.idDB)
			dispatch(updateRecipe(formData,values.idDB))

		} else {
			dispatch(createRecipe(formData)).then()
		}
	};

	return {
		values,
		errores,
		handleValues,
		handleSubmit,
		validForm,
		setValues,
	};
};

export default useForm;
