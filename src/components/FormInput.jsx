import styled from "styled-components";

const FormInput = (props) => {
	const { label,  onChange, id, ...inputProps } = props;

	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<StyleDiv className="formInput">
			<label>{label}</label>
			<input
				{...inputProps}
				onChange={onChange}
			/>
			{/* <span>{errorMessage}</span> */}
		</StyleDiv>
	);
};

export default FormInput;

const StyleDiv = styled.div`
 label {
		display: block;
 }
	min-width: 50%;
	display: flex;
	flex-direction: column;
`
