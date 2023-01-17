import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDiets } from '../redux/actions/getTypeDietsAction'
import { searchRecipeAction } from '../redux/actions/searchAction'
import { Select } from './Select'

export default function FiltersBar() {
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
  const [orden, setOrden] = useState('')
  const options2 = [
    { label: 'A-Z (Title)', value: 'A-Z' },
    { label: 'Z-A (Title)', value: 'Z-A' },
    { label: '0-9 (score)', value: '0-9' },
    { label: '9-0 (score)', value: '9-0' }
  ]
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
          onChange={(o) => setOrden(o)}
          options={options2}
          value={orden}
        />
      </aside>
    </>
  )
}
