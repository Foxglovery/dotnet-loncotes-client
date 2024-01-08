import { useEffect, useState } from "react";
import { GetPatronById, GetPatrons } from "../../data/patronsData";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function PatronDetails() {
    const { id } = useParams();
    const [patron, setPatron] = useState([]);

    useEffect(() => {
        GetPatronById(id).then(setPatron)
    },[])

    if (!patron) {
        return null;
    }

    return (
        <div className="container">
            <h2>{patron.firstName} {patron.lastName}</h2>
            <Link to={`/patrons/edit/${id}`}>Edit</Link>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{patron.address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{patron.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{patron.isActive ? "Active" : "Inactive"}</td>
                    </tr>
                    <tr>
                        <th scope="row">Balance Due</th>
                        <td>{patron.balance}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}