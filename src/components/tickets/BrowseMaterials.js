import { useEffect, useState } from "react";
import { GetAvailable } from "../../data/materialsData";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function BrowseMaterials() {
    const navigate = useNavigate()
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        GetAvailable().then(setMaterials);
    }, [])
    return (
        <div className="container">
            <div className="sub-menu bg-light">
            <h4>Available Materials</h4>
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
                        <tr key={`available-${m.id}`}>
                            <th scope="row">{m.id}</th>
                            <td>{m.materialName}</td>
                            <td>{m.materialType.name}</td>
                            <td>{m.genre.name}</td>
                            <td>
                                <Button
                                onClick={() => navigate(`create/${m.id}`)}
                                >Check Out</Button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}