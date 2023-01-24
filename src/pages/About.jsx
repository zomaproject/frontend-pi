import React, { useState } from "react";

const About = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((val) => val !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemove = (option) => {
    setSelectedOptions(selectedOptions.filter((val) => val !== option));
  };

  return (
    <div className="dropdown-list-multiselect">
      {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className="dropdown-list-multiselect__selected-options"
        onClick={() => setIsOpen(!isOpen)}
      >
        Selected options:
        {selectedOptions.map((option) => (
          <span key={option} className="dropdown-list-multiselect__selected-option">
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
          {options.map((option) => (
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<li
              key={option}
              className={`dropdown-list-multiselect__option ${
                selectedOptions.includes(option) ? "selected" : ""
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

export default About;