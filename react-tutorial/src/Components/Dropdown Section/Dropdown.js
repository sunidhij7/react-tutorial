// import React, { useState, useEffect } from "react";
// import "./Dropdown.css";

// function DropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   // Use effect to handle clicks outside of the dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (event.target.closest(".dropdown")) {
//         return; // Clicked inside the dropdown, do nothing
//       }
//       closeDropdown(); // Clicked outside the dropdown, close it
//     };

//     // Attach the event listener to the document
//     document.addEventListener("click", handleClickOutside);

//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="dropdown">
//       <h2 className="dropdown__heading section-heading">Dropdown</h2>
//       <button onClick={toggleDropdown} className="dropdown__trigger-button">
//         Select an Option
//       </button>
//       {isOpen && (
//         <ul className="dropdown__panel">
//           <li className="dropdown__panel__option">Option 1</li>
//           <li className="dropdown__panel__option">Option 2</li>
//           <li className="dropdown__panel__option">Option 3</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DropdownMenu;


import React, { useState, useEffect } from "react";
import "./Dropdown.css";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an Option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    closeDropdown(); // Close the dropdown after selecting an option
  };

  // Use effect to handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".dropdown")) {
        return; // Clicked inside the dropdown, do nothing
      }
      closeDropdown(); // Clicked outside the dropdown, close it
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <h2 className="dropdown__heading section-heading">Dropdown</h2>
      <button onClick={toggleDropdown} className="dropdown__trigger-button">
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdown__panel">
          <li
            className="dropdown__panel__option"
            onClick={() => handleOptionClick("Option 1")}
          >
            Option 1
          </li>
          <li
            className="dropdown__panel__option"
            onClick={() => handleOptionClick("Option 2")}
          >
            Option 2
          </li>
          <li
            className="dropdown__panel__option"
            onClick={() => handleOptionClick("Option 3")}
          >
            Option 3
          </li>
          <li
            className="dropdown__panel__option"
            onClick={() => handleOptionClick("Option 4")}
          >
            Option 4
          </li>
          <li
            className="dropdown__panel__option"
            onClick={() => handleOptionClick("Option 5")}
          >
            Option 5
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
