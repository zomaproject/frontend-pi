import { useState } from "react";
import { useSelector } from "react-redux";
import UseForm from "../hooks/useForm";
import FormInput from "./FormInput";
import { Select } from "./Select";
import { inputs, textareas } from "../data/inputForm";
import styles from "../styles/Form.module.css";

const Form = () => {
	const INITIAL_STATE = {
		title: "",
		image: "",
		healthScore: "",
		summary: "",
		analyzedInstructions: "",
	};

	const typesOfDiets = useSelector((state) => state.typesDiets.diets);
	const optionsDiets = typesOfDiets.map((diet) => ({
		label: diet.name,
		value: diet.name,
	}));

	const [diets, setDiets] = useState([]);

	const { handleChange, values, handleSubmit } = UseForm(INITIAL_STATE, diets);

	const validate = (values) => {
		let errors = {};
		if (!values.title) {
			errors.title = "Required";
		} else if (values.title.length < 3) {
			errors.title = "Must be 3 characters or more";
		}
		if (!values.healthScore) {
			errors.healthScore = "Required";
		} else if (values.healthScore < 0 || values.healthScore > 100) {
			errors.healthScore = "Must be between 0 and 100";
		}
		if (!values.summary) {
			errors.summary = "Required";
		} else if (values.summary.length < 10) {
			errors.summary = "Must be 10 characters or more";
		}
		if (!values.analyzedInstructions) {
			errors.analyzedInstructions = "Required";
		} else if (values.analyzedInstructions.length < 10) {
			errors.analyzedInstructions = "Must be 10 characters or more";
		}
		return errors;
	};

	const [steps, setSteps] = useState([]);
	const [step, setStep] = useState("");
	return (
		<div className={`${styles.flex} container`}>
			<form
				onSubmit={handleSubmit}
				className={`${styles.flex} ${styles.formulario}`}
			>
				<h1>Register Ricipe</h1>
				{/* Inputs */}

				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={handleChange}
					/>
				))}

				<span>Tipo de Dieta</span>

				{/* Select Diets */}
				<Select
					multiple
					onChange={(o) => setDiets(o)}
					options={optionsDiets}
					value={diets}
				/>
				{/* TextAreas */}

				{textareas.map((textarea) => (
					<textarea
						key={textarea.id}
						name={textarea.name}
						value={values[textarea.name]}
						onChange={handleChange}
					/>
				))}
				<ol>
					{steps.map((step) => (
						<li key={step}>{step}</li>
					))}
				</ol>
				<input
					type="text"
					value={step}
					onChange={(e) => setStep(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setSteps([...steps, step]);
							setStep("");
						}
					}}
				/>
				<input type="submit" value={"Guardar Recetea"} />
			</form>
		</div>
	);
};

export default Form;
