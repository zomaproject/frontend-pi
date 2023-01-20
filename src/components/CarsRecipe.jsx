import CardRecipe from "./CardRecipe";
import { Grid } from "../styles/Card";
import { useSelector } from "react-redux";
import Loading from "./Loading";
export default function CarsRecipe({ recipes }) {
	const loading = useSelector((state) => state.loading.loading);
	if (loading) return <Loading />;
	return (
		<>
			<Grid>
				{recipes?.map((recipes) => (
					<CardRecipe key={recipes.id} recipe={recipes} />
				))}
			</Grid>
		</>
	);
}
