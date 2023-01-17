import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { loadDetail } from '../redux/actions/getDetailsAction'
export default function Details() {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadDetail(id))
  }, [])
  const detailRecipe = useSelector((state) => state.details.details)
  const { summary, title, image, Diets, healthScore } = detailRecipe
  return (
    <Container >
      <div className='card'>
        <img src={image} alt='Avatar' />
        <div className='container'>
          <h4>{title}</h4>
          <h5>Diets</h5>
          <div className='flex'>
            {Diets?.map((type) => (
              <span key={type.name}>{type.name}</span>
            ))}
          </div>
          <h5>Health Score</h5>
          <div className='flex'>
           <p>Healt Score <span>{healthScore}</span></p> 
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 40rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
