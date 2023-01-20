import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { loadDetail } from "../redux/actions/getDetailsAction";
import Loading from "../components/Loading";
import { loading } from "../redux/actions/loadingAction";
export default function Details() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loading(true));
		dispatch(loadDetail(id)).then(() => dispatch(loading(false)));
	}, [id]);
	const detailRecipe = useSelector((state) => state.details.details);
	const { summary, title, image, Diets, healthScore, analyzedInstructions } =
		detailRecipe;
	const isLoading = useSelector((state) => state.loading.loading);
	if (isLoading) return <Loading />;
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
					{analyzedInstructions?.map((step) => (
						<li key={step[0]}>{step}</li>
					))}
				</ol>
			</details>
		</Container>
	);
}

const Container = styled.div`
h2,p {
	text-transform: capitalize;

}
margin-top: 100rem;
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 50rem;
    
  }
  max-width: 120rem;
  margin: 0 auto;
  h2,h3,h4{
    text-align: center;
  }
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  .diet {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  span {
    text-align: center;
  }

.steps {
	justify-content: flex-start;
}
`;
