import useForm from "../hooks/useForm";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import Alert from "./Alert";
import MultiSelect from "./MultiSelect";
import useDiets from "../hooks/useDiets";
export default function Form() {
	const INITIAL_STATE = {
		title: "",
		healthScore: "",
		summary: "",
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

	const [selectedDiets, setSelectedDiets] = useState([])
	// Llamar el hook

	const { values, handleValues, handleSubmit } = useForm(INITIAL_STATE, steps, selectedDiets);

	const validate = () => {
		let errores = {};
	};
	const { msg, error } = useSelector((state) => state.createRecipe.msg);

	const optionsDiets  = useDiets()
	return (
		<StyleDiv>
			<form onSubmit={handleSubmit}>
				{msg && <Alert error={error}>{msg}</Alert>}
				<label htmlFor="title">Nombre de la receta</label>
				<input
					type="text"
					id="title"
					name="title"
					value={values.title}
					autoComplete='off'
					onChange={(e) => handleValues(e)}
				/>
				<label htmlFor="healthScore">HealthScore</label>
				<input
					type="text"
					autoComplete='off'
					name='healthScore'
					value={values.healthScore}
					onChange={(e) => handleValues(e)}
				/>


					<MultiSelect optionsLabel={optionsDiets}  options={selectedDiets} setOptions={setSelectedDiets}/>


				<label htmlFor="summary">Summary</label>



				<textarea
					name='summary'
					value={values.summary}
					onChange={(e) => handleValues(e)}
				/>
				<label htmlFor="stepByStep">Instruccions</label>
				{steps.map((s) => (
					<textarea id={s.id} key={s.id} onChange={addStepState} />
				))}

					
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
		</StyleDiv>
	);
}

const StyleDiv = styled.div`
.addStep{
	background-color: green;
}
.addStep, .delStep {
	padding:  0.4rem 0.5rem;
	border-radius: 1rem;
	margin-right: 2rem;
	margin-bottom: 1rem;
	cursor: pointer;
}

.delStep {
	background-color: red;
}

	max-width: 50rem;
	margin: 0 auto;
	label {
		display: block;
		margin-top: 1rem;
	}
	
	form {
		display: block;
	}

input {
			width: 100%;
			margin-bottom: 3rem;
			padding: 1rem;
			border: 2px solid white;
		
		}
input[type=text]:focus {
  border: 2px solid #6dc30a;
}
textarea{
	display: block;
	width: 100%;
	resize: none;
	height: 8rem;
	margin-bottom: 1rem;
	padding: 1rem;
}
textarea:focus{
	border: 2px solid #6dc30a;
}
input[type=submit]{
	margin-top: 2rem;
  background-color: #2e3192;
  color: #fff;
  border-radius: 1rem;
  font-size: 1.8rem;
  height: 5rem;
  &:hover {
    background-color: #3b48cc;
    cursor: pointer;
  }
}
`;
