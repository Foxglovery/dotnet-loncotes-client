import { useState } from "react";

export default function TypeDropdown({ materialTypes, setTypeIdToPass }) {
  const [selectedType, SetSelectedType] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    SetSelectedType(value); //track change in state
    if (value) {
      setTypeIdToPass(parseInt(value));
    } else {
      setTypeIdToPass(null); //set it to null if not selected
    }
  };

  return (
    <div className="dropdown_container">
      <select
        id="type"
        name="selectedType"
        value={selectedType}
        onChange={handleInputChange}
      >
        <option value={""}>--Select A Material--</option>
        {materialTypes.map((type, index) => (
          <option key={index} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}
