import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarsRecipe from '../components/CarsRecipe'
import FiltersBar from '../components/FiltersBar'
import Pagination from '../components/Pagination'
import { loadOrder } from '../redux/actions/OrderAction'
import { renderPage } from '../redux/actions/paginationActons'
import styles from '../styles/displayHome.module.css'
export default function Home() {
  const allRecipes = useSelector((state) => state.recipes.recipes)

  const searchRecipe = useSelector((state) => state.search.searchRecipe)

  const pageCurrent = useSelector((state) => state.pagination.pageCurrent)

  const dispatch = useDispatch()

  const [orden, setOrden] = useState({})
  const optionsOrden = [
    { label: 'A-Z (Title)', value: 'A-Z' },
    { label: 'Z-A (Title)', value: 'Z-A' },
    { label: '0-9 (score)', value: '0-9' },
    { label: '9-0 (score)', value: '9-0' }
  ]
  const stateOrder = useSelector((state) => state.orden.typeOrden)
  const recipesRender = useSelector((state) => state.pagination.recipesRender)
  const recipesOrden = useSelector((state) => state.orden.recipesOrder)

  useEffect(() => {
    if (stateOrder) {
      dispatch(loadOrder(allRecipes))
    } else {
      dispatch(renderPage(allRecipes))
    }
  }, [stateOrder, pageCurrent, allRecipes])

  useEffect(() => {
    if (recipesOrden.length > 0) {pageCurrent
      dispatch(renderPage(recipesOrden))
    }
  }, [stateOrder, pageCurrent, recipesOrden])

  return (
    <>
      <div className={`container ${styles.layout}`}>
        <FiltersBar
          orden={orden}
          setOrden={setOrden}
          optionsOrden={optionsOrden}
        />
        <CarsRecipe recipes={recipesRender} />
      </div>

      <Pagination />
    </>
  )
}
