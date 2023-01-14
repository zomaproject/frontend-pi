import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CarsRecipe from "../components/CarsRecipe"
import { dowloadData } from "../redux/actions"

export default function Home()  {
  
  const dispatch  = useDispatch()
  const recipes = useSelector(state => state.recipes.recipes)
  return (
    <div>
        <CarsRecipe recipes={recipes}/>
    </div>
  )
}
