import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { GetPatrons } from "../../data/patronsData";


export default function PatronList() {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        GetPatrons().then(setPatrons)
    }, [])
//FInd out how tables work and fix this
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

                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    )
}
