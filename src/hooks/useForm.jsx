import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../redux/actions/createRecipeActions";

export default function UseForm(INITIAL_STATE, steps, diets) {
	const dispatch = useDispatch();
	const [values, setValues] = useState(INITIAL_STATE);
	const [errores, setErrores] = useState({});
	const handleChange = (e) => {
		e.preventDefault();
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	values["analyzedInstructions"] = steps;
	values["Diets"] = diets;

	const validate = (ev) => {
		const { name, value } = ev.target;
		if (value.length === 0) {
			setErrores({
				...errores,
				[name]: "El campo es obligatorio",
			});
		} else {
			setErrores({
				...errores,
				[name]: "",
			});
		}
		if (name === "title" && value.length >= 1 && value.length < 5) {
			setErrores({
				...errores,
				[name]: "El campo debe tener entre 1 y 5 caracteres",
			});
		}
		if (name === "healthScore" && value.length >= 1 && isNaN(value)) {
			setErrores({
				...errores,
				[name]: "El campo debe ser un número",
			});
		}

		if (
			name === "healthScore" &&
			value.length >= 1  &&
			value > 0 &&
			value > 100
		) {
			setErrores({
				...errores,
				[name]: "El score debe ser entre  0 100",
			});
	};
}

		console.log(errores)
	const handleSubmit = (e) => {
		e.preventDefault();
		// valiar que no haya errores

		// values.Diets = diets;
		// values.analyzedInstructions = steps.map((step) => step.step);
		// if (Object.values(values).includes("")) {
		// 	return alert("Todos los campos son obligatorios");
		// }
		// if (
		// 	Object.values(errores).some((error) => error !== "") ||
		// 	diets.length === 0 ||
		// 	Object.values(steps).some((step) => step.step.length < 50)
		// ) {
		// 	return alert("Hay errores en el formulario");
		// }

		// // console.log(values);
		// dispatch(createRecipe(values));
		// setValues(INITIAL_STATE);
	};

	return {
		values,
		errores,
		handleChange,
		validate,
		handleSubmit,
	};
}
