import styled from "styled-components";

export const Container = styled.div`
h2,p {
	text-transform: capitalize;

}
margin-top: 100rem;
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 50rem;
    
  }
  max-width: 120rem;
  margin: 0 auto;
  h2,h3,h4{
    text-align: center;
  }
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  .diet {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  span {
    text-align: center;
  }
	& button {
 background-color: red; /* color de fondo */
  color: white; /* color de letra */
  padding: 5px 10px; /* margen */
  border-radius: 5px; /* bordes redondos */
  border: none; /* sin bordes */
  cursor: pointer; /* cursor cambia a "mano" al pasar por encima */
	}
	&  button:hover {
		background-color:  darkred;
	} 
& .delete {
	width: 3rem;
	height: 3rem;
}
.steps {
	justify-content: flex-start;
}
`;
