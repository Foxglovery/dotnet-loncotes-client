import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { Decirculate, getMaterials } from "../../data/materialsData";
import { Link } from "react-router-dom";
import GenreDropdown from "../filter/GenreDropdown.js"
import { getGenres } from "../../data/genresData.js"
import { getMaterialTypes } from "../../data/materialTypesData.js"
import TypeDropdown from "../filter/TypeDropdown.js";


export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const [filteredMaterials, setFilteredMaterials] = useState([])
  const [genres, setGenres] = useState([])
  const [genreIdToPass, setGenreIdToPass] = useState();
  const [typeIdToPass, setTypeIdToPass] = useState();
  const [materialTypes, setMaterialTypes] = useState([]);

  useEffect(() => {
    getMaterials().then(setMaterials);
    getGenres().then(setGenres);
    getMaterialTypes().then(setMaterialTypes)
  }, []);

  useEffect(() => {
    getMaterials(genreIdToPass,typeIdToPass).then(setMaterials);
  },[genreIdToPass,typeIdToPass])

  //place button
  //define function
  //ensure fetch
  //src\components\filter\GenreDropdown.js
  //src\components\checkouts\CheckoutList.js
  const handleDecirculate = (id) => {
    Decirculate(id).then(() => {
      getMaterials().then(setMaterials);
    });
  };
  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Link to="/materials/create">Add</Link>
      </div>
      <div className="genre_dropdown_container">
        <GenreDropdown 
        genres={genres}
        
        
        setGenreIdToPass={setGenreIdToPass}
        
        />
      </div>
      <div className="type_dropdown_container">
      <TypeDropdown 
      setTypeIdToPass={setTypeIdToPass}
      materialTypes={materialTypes}
      />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td>
                <Button onClick={() => handleDecirculate(m.id)}>
                  De-circulate
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
