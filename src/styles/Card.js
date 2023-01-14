import styled from 'styled-components'

export const Card = styled.div`
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
  }
  h4{
    margin-top: 0;
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
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  & .flex > span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.fg};
    background-color: ${({ theme }) => theme.diets};
    border-radius: 0.3rem;
    padding: 0.01rem 0.2rem;
  }
`

export const Grid = styled.div`
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`