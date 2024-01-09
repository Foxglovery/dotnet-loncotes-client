import { useState } from "react";

export default function AreaDropdown({
  genres,
  materials,
  setFilteredMaterials,
}) {
  const [selectedGenre, SetSelectedGenre] = useState(0);

  const handleInputChange = (e) => {
    const selectedGenreId = e.target.value;

    SetSelectedGenre(selectedGenreId);
    if (materials) {
      if (selectedGenreId === "") {
        setFilteredMaterials(materials);
      } else {
        setFilteredMaterials(
          materials.filter((m) => m.genreId === parseInt(selectedGenreId))
        );
      }
    }
  };
  return <div className="dropdown_container">
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
  </div>;
}
