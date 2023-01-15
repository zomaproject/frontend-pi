import { useSelector } from 'react-redux'
import CarsRecipe from '../components/CarsRecipe'
import FiltersBar from '../components/FiltersBar'

export default function Home() {
  const recipes = useSelector((state) => state.recipes.recipes)
  const searchRecipe = useSelector((state) => state.search.searchRecipe)
  console.log(searchRecipe)
  return (
    <div>
      <FiltersBar />
      {searchRecipe.length > 0 ? (
        <CarsRecipe recipes={searchRecipe} />
      ) : (
        <CarsRecipe recipes={recipes} />
      )}
    </div>
  )
}
