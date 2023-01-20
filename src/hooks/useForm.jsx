import { useState } from "react";

export default function UseForm(INITIAL_STATE, diets) {
	const [values, setValues] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		e.preventDefault();
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values, diets)
  }
	return {
		values,
		handleChange,
    handleSubmit
	};
}
