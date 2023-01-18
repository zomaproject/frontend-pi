import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDiets } from '../redux/actions/getTypeDietsAction'
import { loadOrder,  setOrdenState } from '../redux/actions/OrderAction'
import { searchRecipeAction } from '../redux/actions/searchAction'
import { Select } from './Select'

export default function FiltersBar({orden, setOrden, optionsOrden, diets, setDiets, optionsDiets}) {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(searchRecipeAction(search))
  }

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
          onChange={(o) => setDiets(o)}
          options={optionsDiets}
          value={diets}
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
