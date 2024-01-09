import { useState } from "react";

export default function GenreDropdown({
  genres,
  materials,
  setFilteredMaterials,
  setGenreIdToPass,
  setTypeIdToPass,
}) {
  const [selectedGenre, SetSelectedGenre] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    SetSelectedGenre(value); // Keep track of the selected genre in state
  
    // Check if a genre is selected or if the "--Select A Genre--" option is chosen
    if (value) {
      setGenreIdToPass(parseInt(value));
    } else {
      setGenreIdToPass(null); // Set to null when no specific genre is selected
    }
  };
  
  
  return (
    <div className="dropdown_container">
      <select
        id="genre"
        name="selectedGenre"
        value={selectedGenre}
        onChange={handleInputChange}
      >
        <option value={""}>--Select A Genre--</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
