import useDiets from "../hooks/useDiets";
import styles from "../styles/Form.module.css";
import useForm from "../hooks/useForm";
import { useState } from "react";
import MultiSelect from "./MultiSelect";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Form() {
	const optionsDiets = useDiets();

	const INITIAL_STATE = {
		title: "",
		healthScore: "",
		summary: "",
		analyzedInstructions: [],
		Diets: [],
	};

	const [steps, setSteps] = useState([
		{
			id: 1,
			step: "",
		},
		{
			id: 2,
			step: "",
		},
	]);

	const agregarPaso = () => {
		setSteps([...steps, { id: steps.at(-1).id + 1, step: "" }]);
	};

	const [options, setOptions] = useState([]);

	const { errores, validate, handleChange, handleSubmit } = useForm(
		INITIAL_STATE,
		steps,
		options,
	);

	const eliminarPaso = (id) => {
		if (steps.length === 2) return alert("El mínimo de pasos es 2");

		const newSteps = steps.filter((step) => step.id !== id);
		setSteps(newSteps);
	};
	const errorMessage = useSelector((state) => state.search.alertSearch);
	return (
		<div className={styles.contenedor}>
			<form onSubmit={handleSubmit} className={`${styles.formulario}`}>
				<label htmlFor="title">Nombre de la receta</label>
				<input
					id='title'
					onChange={(e) => {
						handleChange(e);
						validate(e);
					}}
					type="text"
					name="title"
					placeholder="Nombre de la receta"
				/>

				{errores.title && <p>{errores.title}</p>}

				<label htmlFor="score">Health Score</label>
				<input
					type={"text"}
					autoComplete="off"
					onChange={(e) => {
						validate(e);
						handleChange(e);
					}}
					name='healthScore'
					placeholder={"Health Score"}
					id='score'
				/>
				{errores.healthScore && <p>{errores.healthScore}</p>}
				<label htmlFor="summary">Nombre de la receta</label>
				<textarea
					onChange={(e) => {
						handleChange(e);
						validate(e);
					}}
					name={"summary"}
					placeholder={"Resumen de la receta"}
					id='summary'
				/>

				{errores.summary && <p>{errores.summary}</p>}

				<div>
					<MultiSelect
						validate={validate}
						optionsLabel={optionsDiets}
						options={options}
						setOptions={setOptions}
					/>
					{options.length === 0 && <p>Debes seleccionar al menos una dieta</p>}
				</div>
				{errores.Diets && <p>{errores.Diets}</p>}

				<label>Nombre de la receta</label>
				{steps.map((step) => (
					<div key={step.id}>
						<textarea
							onChange={(e) => {
								const newSteps = steps.map((s) => {
									if (s.id === step.id) {
										return { ...s, step: e.target.value };
									}
									return s;
								});
								setSteps(newSteps);
							}}
							type="text"
							value={step.step}
							placeholder={"Escribe las instrucciones aquí"}
						/>

						{step.step.length >= 1 && step.step.length < 50 && (
							<p>El mínimo de caracteres es 50</p>
						)}
						<button type="button" onClick={() => eliminarPaso(step.id)}>
							Eliminar
						</button>
					</div>
				))}
				<button type="button" onClick={agregarPaso}>
					Agregar paso
				</button>
				<input type='submit' value={"Enviar"} />
			</form>
		</div>
	);
}
