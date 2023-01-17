import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {  setPage } from '../redux/actions/paginationActons'
export default function Pagination() {

  const numberPages = useSelector((state) => state.pagination.pagesTotal)

  const arrayPages = [...Array(numberPages).keys()].map((i) => i + 1)

  const [activo, setActivo] = useState(   +localStorage.getItem('page')  || 1)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    setActivo(+e.target.value)
    dispatch(setPage(+e.target.value))
    localStorage.setItem('page', +e.target.value)
  }
  useEffect(()=> {
    if(localStorage.getItem('page')) {
      dispatch(setPage(+localStorage.getItem('page')))
    }
  }, [])

  return (
    <Button>
      {arrayPages.map((page) => (
        <button
          onClick={handleClick}
          value={page}
          className={activo === page ? 'activo' : ''}
          key={page}
        >
          {page}
        </button>
      ))}
    </Button>
  )
}

const Button = styled.div`
  .activo {
    color: red;
  }
`
