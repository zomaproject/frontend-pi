import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Card = styled(Link)`
  /* retirar estilos cuando es visitado */
  color: ${({ theme }) => theme.fg};
  text-decoration: none;
  &:visited {
    color: ${({ theme }) => theme.fg};
  }
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 ${({ theme }) => theme.hoverEnlace};
    transition: 0.3s;
    border-radius: 5px;
    width: 30rem;
    height: 45rem;
    display: flex;
    flex-direction: column;
  }
  .card__item {
    flex-grow: 1;
  }
  h4{
    line-height: 1.7rem;
  }
  h5{
    margin: 0;
  }
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 ${({ theme }) => theme.hoverEnlace};
    /* zoom */
    transform: translate(-5px, -5px);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    /* display: inline-block; */
    justify-content: center;
    gap: 1rem;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 0rem;
  }
  & .flex > span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.fg};
    background-color: ${({ theme }) => theme.diets};
    border-radius: 0.3rem;
    padding: 0.01rem 0.2rem;
    /* overflow-y: auto; */
  }
`

export const Grid = styled.main`
  margin-top: 2rem ;
  /* margin: auto auto; */
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  /* width: 120rem; */
  /* Agregarle escroll para no bajar en la pantalla */
  /* height: 80rem;  */
  /* width: 100%; */
  /* overflow-y: auto; */
  /* border: 1px solid ${({ theme }) => theme.border}; */
  /* padding-top: 2rem; */
  /* border-radius: 1rem; */
  min-height: 100vh;

`
