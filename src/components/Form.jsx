import useForm from "../hooks/useForm";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import MultiSelect from "./MultiSelect";
import useDiets from "../hooks/useDiets";
import { StyleForm } from "../styles/Form";
import { useEffect } from "react";


export default function Form() {

	const dispatch = useDispatch()
	const { msg , error} = useSelector(state => state.recipes.msg)
	const optionsDiets = useDiets(); // load diets from state

	const [selectedDiets, setSelectedDiets] = useState([]);

	const [inputImage, setInputImage] = useState(null);

	const [errors, setErrors] = useState({});


	const { title, image, instructions, summary, healthScore, Diets, id } = useSelector(state => state.recipes.recipeToEdit)
	const validate = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "title":
				if (value.length < 4 || value.length > 80) {
					setErrors({
						...errors,
						[name]: "The name must have between 4 and 80 characters",
					});
				} else {
					setErrors({
						...errors,
						[name]: "",
					});
				}
				break;

			case "healthScore":
				if (value < 0 || (value > 100 && !isNaN(value))) {
					setErrors({
						...errors,
						[name]: "The score must be between 0 and 100",
					});
				} else if (isNaN(value)) {
					setErrors({
						...errors,
						[name]: "The score must be a number",
					});
				} else {
					setErrors({
						...errors,
						[name]: "",
					});
				}
				break;
			case "summary":
				if ((name === "summary" && value.length < 100) || value.length > 400) {
					setErrors({
						...errors,
						[name]: "The summary must have between 100 and 400 characters",
					});
				} else {
					setErrors({
						...errors,
						[name]: "",
					});
				}
				break;
			case "image":
				if (e.target.files[0] && /\.(jpe?g|png)$/i.test(e.target.files[0].name)) {
					setErrors({
						...errors,
						[name]: "",
					});
				} else {
					setErrors({
						...errors,
						[name]: "Please select a valid image file",
					});
				}
				break;
			default:
				break;
		}
	}

	const INITIAL_STATE = {
		// idDB: id,
		title: title || '',
		healthScore:  healthScore || "",
		summary: summary || "",
	};
	useEffect(()=> {
		if(id){
			setSelectedDiets(Diets.map(e => e.name))
			setSteps(instructions.map((e, i) => ({ id: i, step: e })))
		}
	},[id])

	const { handleSubmit, handleValues, values, setValues } = useForm(INITIAL_STATE, errors)

	const handleFileChange = event => {
		const file = event.target.files[0];
		setInputImage(file);
	};



	const [steps, setSteps] = useState(
		[
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

	const deleteStep = () => {
		if (steps.length <= 2) {
			return alert("The recipe must have at least 2 steps");
		}
		if (confirm("Are you sure you want to delete the last step? ")) {
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












	const handleClick = (e) => {
		e.preventDefault()
		// setData( { ...values, instructions: steps.map(e => e.step), diets: selectedDiets, image: inputImage })
		handleSubmit({ ...values, instructions: steps.map(e => e.step), diets: selectedDiets, image: inputImage || image },id)

	}

	useEffect(()=> {
		if(!error && msg){
			setValues(INITIAL_STATE)
			setSteps([
				{
					id: 1,
					step: "",
				},
				{
					id: 2,
					step: "",
				},
			])
			setSelectedDiets([])
			setInputImage(null)
		}
	},[error])

	return (
		<StyleForm>
			<form onSubmit={handleClick}>
				{msg && <Alert error={error}>{msg}</Alert>}
				<label htmlFor="title">Name</label>
				<input
					type="text"
					id="title"
					name="title"
					value={values.title}
					autoComplete='off'
					onChange={(e) => {
						handleValues(e);
						validate(e);
					}}
				/>
				{errors.title && <p>{errors.title}</p>}
				<label htmlFor="healthScore">HealthScore</label>
				<input
					type="text"
					autoComplete='off'
					name='healthScore'
					value={values.healthScore}
					onChange={(e) => {
						handleValues(e);
						validate(e);
					}}
				/>
				{errors.healthScore && <p>{errors.healthScore}</p>}

				<label htmlFor="image">Image</label>
				<input
					type='file'
					// autoComplete="off"

					name='image'
					// value={values.image}
					onChange={(e) => { handleFileChange(e); validate(e) }}
				/>
				{errors.image && <p>{errors.image}</p>}
				<img src={inputImage ? URL.createObjectURL(inputImage) : image} alt="" />

				<MultiSelect
					optionsLabel={optionsDiets}
					options={selectedDiets}
					setOptions={setSelectedDiets}
				/>

				{selectedDiets.length >= 1 && selectedDiets.length < 2 ? <p> Select at least 2 diets  </p> : null}

				<label htmlFor="summary">Summary</label>

				<textarea
					name='summary'
					value={values.summary}
					onChange={(e) => {
						handleValues(e);
						validate(e);
					}}
				/>
				{errors.summary && <p>{errors.summary}</p>}

				<label htmlFor="stepByStep">Instructions</label>
				{steps.map((s) => (
					<div key={s.id}>
						<textarea id={s.id} value={s.step} onChange={addStepState} />

						<p>
							{s.step.length >= 1 && s.step.length < 20 || s.step.length > 200 ? 'Each step need between 20 and 200 characters  ' : ''}
						</p>
					</div>
				))}


				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<span className="addStep" onClick={() => addStep()}>
					Add Step {" "}
				</span>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<span className="delStep" onClick={() => deleteStep()}>
					Delete Step {" "}
				</span>
				<input type='submit' value={id ? 'Save Changes' : 'Create Recipe'} />
			</form>
		</StyleForm>
	);
}
