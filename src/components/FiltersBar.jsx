import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchRecipeAction } from '../redux/actions/searchAction'

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

  return (
    <div>
      <label htmlFor='search'>Buscar</label>
      <input onChange={handleChange} type='search' name='search' id='search' />
      <button onClick={handleClick}>dame</button>
    </div>
  )
}
