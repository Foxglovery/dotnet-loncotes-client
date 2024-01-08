import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { DeactivatePatron, GetPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function PatronList() {
  const [patrons, setPatrons] = useState([]);

  useEffect(() => {
    GetPatrons().then(setPatrons);
  }, []);
  //FInd out how tables work and fix this
  const handleDeactivate = (id) => {
    DeactivatePatron(id).then(() => {
        GetPatrons().then(setPatrons);
    })
    .catch (error => {
        console.error("Ooof, that didn't go as planned", error)
    })
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Active Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {patrons.map((p) => (
            <tr key={`patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.address}</td>
              <td>{p.email}</td>
              <td>{p.isActive ? "Active" : "Not Active"}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
              <td>{p.isActive ? 
              <Button
              onClick={() => handleDeactivate(p.id)}
              >Deactivate</Button> : ""}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
