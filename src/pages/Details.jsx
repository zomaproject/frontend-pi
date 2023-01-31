import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadDetail } from "../redux/actions/getDetailsAction";
import Loading from "../components/Loading";
import { loading } from "../redux/actions/loadingAction";
import { Container } from "../styles/Details";
import { deleteRecipe, setEdit } from "../redux/actions/recipesActions";
export default function Details() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(loading(true));
		dispatch(loadDetail(id)).then(() => dispatch(loading(false)));
	}, [id]);
	const detailRecipe = useSelector((state) => state.details.details);
	const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
	const { summary, title, image, Diets, healthScore, instructions } =
		detailRecipe;
	const isLoading = useSelector((state) => state.loading.loading);
	if (isLoading) return <Loading />;


	const handleDelete = () => {
		if (confirm('Are you sure you want to delete this recipe?')) {
			dispatch(deleteRecipe(id))
			navigate('/home')
		}
	}

	const handleEditar = () => {
		dispatch(setEdit(detailRecipe))
		navigate('/create-recipe')
	}
	return (
		<Container>
			<div className='flex'>
				<img src={image} alt={title} />
				<div className='container'>
					<h2>{title}</h2>
					<h3>Diets</h3>
					{Diets?.map((type) => (
						<p className='diet' key={type.name}>
							{type.name}
						</p>
					))}
					<h4>
						Health Score: <span>{healthScore}</span>
					</h4>
					<p>{summary}</p>
				</div>
			</div>

			<details className="steps">
				<summary>Step By Step</summary>
				<ol>
					{instructions?.map((step, id) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={id}>{step}</li>
					))}
				</ol>
			</details>

			{
				regexExp.test(id) &&
				(
					<div className="absolute">
						{/* <div> */}

						<button className="delete-btn" onClick={handleDelete} type="button">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="delete">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
							</svg> Delete Recipe
						</button>
						{/* </div> */}
						<button className="edit-btn" onClick={handleEditar} type="button" >
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="edit">
								<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
							</svg>

							Edit Recipe </button>
					</div>
				)
			}
		</Container>
	);
}

