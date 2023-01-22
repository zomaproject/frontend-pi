import React, { useState } from "react";
import useDiets from "../hooks/useDiets";
import "../styles/MultiSelect.css";

const MultiSelect = ( {optionsLabel,  options,setOptions}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = (e) => {
		const selectedOption = e.target.value;
		if (options.includes(selectedOption)) {
			setOptions(options.filter((o) => o !== selectedOption));
		} else {
			setOptions([...options, selectedOption]);
		}
	};


	const handleClearAll = () => {
		setOptions([]);
	};

	const toggleOptions = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div  className='pos-absolute'>
			<div>
				<button
					onClick={toggleOptions}
					className={`multi-select-button ${isOpen ? "open" : ""}`}
				>
					{options?.length === 0
						? "Seleccione las Dietas que desa Ver"
						: options.join(", ")}
				</button>
				<div
					className={`options-container ${isOpen ? "open" : ""} pos-absolute`}
				>
					<button onClick={handleClearAll}>Clear All</button>
					{optionsLabel.map((option) => (
						<label key={option.id}>
							<input
								type="checkbox"
								value={option.value}
								checked={options.includes(option.value)}
								onChange={handleChange}
							/>
							{option.label}
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default MultiSelect;
