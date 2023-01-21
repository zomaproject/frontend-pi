import React, { useState } from "react";

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const toggleOption = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <button  onKeyDown={e => e.preventDefault()} onClick={toggleDropdown} style={{ padding: "10px" }}>
        Select Options
      </button>
      {dropdownOpen && (
        <div style={{ position: "absolute", top: "35px", left: "0" }}>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px #ccc",
            }}
          >
            {options.map((option) => (
              <div key={option.value}>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => toggleOption(option.value)}
									onKeyDown={(e) => { e.preventDefault(); }}
                  style={{ marginRight: "10px" }}
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
