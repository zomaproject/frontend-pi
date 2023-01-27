import React, { useState } from "react";
import { generarId } from "../helpers/generarId";
import { StyleMultiSelect } from "../styles/MultiSelect";

const MultiSelect = ({ optionsLabel: opt, options, setOptions }) => {
	// const opt = optionsLabel.map((option) => option.value);
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = (option) => {
		if (options.includes(option)) {
			setOptions(options.filter((val) => val !== option));
		} else {
			setOptions([...options, option]);
		}
	};

	const handleRemove = (option) => {
		setOptions(options.filter((val) => val !== option));
	};

	return (
		<StyleMultiSelect className="dropdown-list-multiselect">
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="dropdown-list-multiselect__selected-options"
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-filter">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
				</svg>

				<span>  Diets</span>
				{options.map((option) => (
					<span
						key={generarId()}
						className="dropdown-list-multiselect__selected-option"
					>
						{option}
						<button
							className="dropdown-list-multiselect__remove-button"
							onClick={() => handleRemove(option)}
						>
							x
						</button>
					</span>
				))}
			</div>
			{isOpen && (
				<ul className="dropdown-list-multiselect__options">
					{opt.map((option) => (
						// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<li
							key={option}
							className={`dropdown-list-multiselect__option ${options.includes(option) ? "selected" : ""
								}`}
							onClick={() => handleClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</StyleMultiSelect>
	);
};

export default MultiSelect;
