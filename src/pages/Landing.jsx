import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Landing() {

  return (
    <StyledLanding className="landing">
      <Link to={'/home'}>Go to Home</Link>
    </StyledLanding>
  )
}


const StyledLanding = styled.div`
  height: 85vh;
  width: 100vw;
  position: relative;
  background-image: url('../../public/tomato-1862857.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  & a {
    position: absolute;
    top: 30%;
    left: 70%;
    cursor: pointer;
    padding: 1rem;
    background-color: aquamarine;
    border-radius: 1rem;
    font-weight: 900;
    &:hover {
      background-color: darksalmon;
    }
  }
`
