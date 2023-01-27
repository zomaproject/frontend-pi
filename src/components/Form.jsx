import useForm from "../hooks/useForm";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import MultiSelect from "./MultiSelect";
import useDiets from "../hooks/useDiets";
import { StyleForm } from "../styles/Form";
import { generarId } from "../helpers/generarId";
import { useEffect } from "react";
import { updateRecipes } from "../redux/actions/recipesActions";
import { cleanRecipe, createRecipeFailure } from "../redux/actions/createRecipeActions";
export default function Form() {
	const INITIAL_STATE = {
		title: "",
		healthScore: "",
		summary: "",
		image: "",
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

	const addStep = () => {
		setSteps([
			...steps,
			{
				id: steps.at(-1).id + 1,
				step: "",
			},
		]);
	};

	const eliminarPaso = () => {
		if (steps.length <= 2) {
			return alert("El mínimo de pasos es 2");
		}
		if (confirm("Desea Eliminar el último paso")) {
			setSteps(steps.slice(0, -1));
		}
	};

	const addStepState = (e) => {
		const { id, value } = e.target;
		const newSteps = steps.map((s) => {
			if (s.id === parseInt(id)) {
				return { ...s, step: value };
			}
			return s;
		});
		setSteps(newSteps);
	};

	const [selectedDiets, setSelectedDiets] = useState([]);
	// Llamar el hook

	const { values, errores, handleValues, handleSubmit, validForm, setValues } = useForm(
		INITIAL_STATE,
		steps,
		selectedDiets,
	);

	const { msg, error } = useSelector((state) => state.createRecipe.msg);
	const { recipe } = useSelector(state => state.createRecipe)
	const dispatch = useDispatch()
	useEffect(() => {
		if (error) {
			setTimeout(() => {
				dispatch(createRecipeFailure(''))
			}, 3000)
			return
		} else {
			setSteps([
				{
					id: 1,
					step: "",
				},
				{
					id: 2,
					step: "",
				},
			]);
			setValues(INITIAL_STATE);
			setSelectedDiets([]);
			if (recipe?.id) {
				dispatch(updateRecipes(recipe))
			}
			setTimeout(() => {
				dispatch(createRecipeFailure(''))
			}, 3000)

		}
	}, [error, msg])

	const optionsDiets = useDiets();
	return (
		<StyleForm>
			<form onSubmit={handleSubmit}>
				{msg && <Alert error={error}>{msg}</Alert>}
				<label htmlFor="title">Nombre de la receta</label>
				<input
					type="text"
					id="title"
					name="title"
					value={values.title}
					autoComplete='off'
					onChange={(e) => {
						handleValues(e);
						validForm(e);
					}}
				/>
				{errores.title && <p>{errores.title}</p>}
				<label htmlFor="healthScore">HealthScore</label>
				<input
					type="text"
					autoComplete='off'
					name='healthScore'
					value={values.healthScore}
					onChange={(e) => {
						handleValues(e);
						validForm(e);
					}}
				/>
				{errores.healthScore && <p>{errores.healthScore}</p>}
				<label htmlFor="image">Image</label>
				<input
					type='text'
					autoComplete="off"
					name='image'
					value={values.image}
					onChange={(e) => handleValues(e)}
				/>

				<MultiSelect
					optionsLabel={optionsDiets}
					options={selectedDiets}
					setOptions={setSelectedDiets}
				/>

				{selectedDiets.length === 0 && (
					<p>Debe seleccionar al menos una dieta</p>
				)}

				<label htmlFor="summary">Summary</label>

				<textarea
					name='summary'
					value={values.summary}
					onChange={(e) => {
						handleValues(e);
						validForm(e);
					}}
				/>
				{errores.summary && <p>{errores.summary}</p>}
				<label htmlFor="stepByStep">Instruccions</label>
				{steps.map((s) => (
					<div key={s.id}>
						<textarea id={s.id} value={s.step} onChange={addStepState} />

						<p>
							{s.step.length >= 1 && s.step.length < 20 || s.step.length > 200 ? 'El paso debe tener entre 20 y 200 caracteres' : ''}
						</p>
					</div>
				))}

				{/* <p>hola</p> */}

				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<span className="addStep" onClick={() => addStep()}>
					Agrega Paso{" "}
				</span>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<span className="delStep" onClick={() => eliminarPaso()}>
					Eliminar Último Paso
				</span>
				<input type='submit' value='Guardar receta' />
			</form>
		</StyleForm>
	);
}
