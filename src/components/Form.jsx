import useDiets from "../hooks/useDiets";
import styles from "../styles/Form.module.css";
import useForm from "../hooks/useForm";
import { useState } from "react";
export default function Form() {
	const optionsDiets = useDiets();

	const INITIAL_STATE = {
		title: "",
		healthScore: "",
		summary: "",
		steps: [],
		diets: [],
	};

	const [id, setId] = useState(1);
	const generaId = () => {
		 return setId(id + 1);
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

	const { values, handleChange, handleSubmit } = useForm(INITIAL_STATE, steps);

	return (
		<div className={styles.contenedor}>
			<form onSubmit={handleSubmit} className={`${styles.formulario}`}>
				<label htmlFor="title">Nombre de la receta</label>
				<input
					id='title'
					onChange={handleChange}
					type="text"
					name="title"
					placeholder="Nombre de la receta"
				/>

				<label htmlFor="title">Health Score</label>
				<input
					type={"text"}
					onChange={handleChange}
					name='healthScore'
					placeholder={"Health Score"}
				/>

				<label htmlFor="title">Nombre de la receta</label>
				<textarea
					onChange={handleChange}
					name={"summary"}
					placeholder={"Resumen de la receta"}
				/>
				{/* Paso a paso */}

				<label>Nombre de la receta</label>
				{steps.map((step) => (
					<div key={step.id}>
						<input

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
							placeholder={`Paso ${step.id}`}
						/>
					</div>
				))}


				<button type="button" onClick={agregarPaso}>
					Agregar paso
				</button>
				<button type='submit'>Crear receta</button>
			</form>
		</div>
	);
}
