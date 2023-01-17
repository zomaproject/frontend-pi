import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarsRecipe from '../components/CarsRecipe'
import FiltersBar from '../components/FiltersBar'
import Pagination from '../components/Pagination'
import { renderPage } from '../redux/actions/paginationActons'
import styles from '../styles/displayHome.module.css'
export default function Home() {
  const allRecipes = useSelector((state) => state.recipes.recipes)
  const searchRecipe = useSelector((state) => state.search.searchRecipe)
  const pageCurrent = useSelector((state) => state.pagination.pageCurrent)
  console.log(pageCurrent)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(renderPage(allRecipes))
  }, [allRecipes, pageCurrent])
  const recipesRender = useSelector((state) => state.pagination.recipesRender)
  return (
    <>
      <div className={`container ${styles.layout}`}>
        <FiltersBar />
        <CarsRecipe recipes={recipesRender} />
      </div>

      <Pagination />
    </>
  )
}
