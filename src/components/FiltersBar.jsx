import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDiets } from '../redux/actions/getTypeDietsAction'
import { loadOrder,  setOrdenState } from '../redux/actions/OrderAction'
import { searchRecipeAction } from '../redux/actions/searchAction'
import { Select } from './Select'

export default function FiltersBar({orden, setOrden, optionsOrden}) {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(searchRecipeAction(search))
  }

  const typesDiets = useSelector((state) => state.typesDiets.diets)
  const options = typesDiets.map((diet) => ({
    label: diet.name,
    value: diet.name
  }))

  useEffect(() => {
    dispatch(loadDiets())
  }, [])

  const [value, setValue] = useState([])
  return (
    <>
      <aside>
        <div>
          <label htmlFor='search'>Buscar</label>
          <input
            onChange={handleChange}
            type='search'
            name='search'
            id='search'
          />
          <button onClick={handleClick}>dame</button>
        </div>
        <Select
          multiple
          onChange={(o) => setValue(o)}
          options={options}
          value={value}
        />
        <Select
          onChange={(o) => {setOrden(o)
          dispatch(setOrdenState(o.value))}}
          options={optionsOrden}
          value={orden}
        />
      </aside>
    </>
  )
}
