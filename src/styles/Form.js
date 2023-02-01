import styled from "styled-components";

export  const StyleForm = styled.div`
p {
	color: red;
}
.addStep{
	background-color: green;
}
.addStep, .delStep {
	padding:  0.4rem 0.5rem;
	border-radius: 1rem;
	margin-right: 2rem;
	margin-bottom: 1rem;
	cursor: pointer;
}

.delStep {
	background-color: red;
}

	max-width: 50rem;
	margin: 0 auto;
	label {
		display: block;
		margin-top: 1rem;
	}
	
	form {
		display: block;
	}

input {
			width: 100%;
			margin-bottom: 1rem;
			padding: 1rem;
			border: 2px solid white;
		
		}
input[type=text]:focus {
  border: 2px solid #6dc30a;
}
textarea{
	display: block;
	width: 100%;
	resize: none;
	height: 8rem;
	margin-bottom: 1rem;
	padding: 1rem;
}
textarea:focus{
	border: 2px solid #6dc30a;
}
input[type=submit]{
	margin-top: 2rem;
  background-color: #2e3192;
  color: #fff;
  border-radius: 1rem;
  font-size: 1.8rem;
  height: 5rem;
  &:hover {
    background-color: #3b48cc;
    cursor: pointer;
  }

}
label:nth-child(1) {
	margin-top: 5rem;
}
`;