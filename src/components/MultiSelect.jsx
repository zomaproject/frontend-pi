import React, { useState } from "react";
import { generarId } from "../helpers/generarId";

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
		<div className="dropdown-list-multiselect">
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="dropdown-list-multiselect__selected-options"
				onClick={() => setIsOpen(!isOpen)}
			>
				Selected options:
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
							className={`dropdown-list-multiselect__option ${
								options.includes(option) ? "selected" : ""
							}`}
							onClick={() => handleClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default MultiSelect;
