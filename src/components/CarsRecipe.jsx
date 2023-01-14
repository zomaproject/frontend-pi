import CardRecipe from "./CardRecipe";
import { Grid} from '../styles/Card'
export default function CarsRecipe( { recipes})  {
  
  return (
    <Grid>
     {recipes?.map(recipe => (
        <CardRecipe key={recipe.id} recipe={recipe}/> 
     ))} 
    </Grid>
  )
}
