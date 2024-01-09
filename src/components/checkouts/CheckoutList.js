import { useEffect, useState } from "react"
import { GetCheckouts, ReturnCheckout } from "../../data/checkoutData";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";


export default function CheckoutList() {
     const [checkouts, setCheckouts] = useState([]);
    
     useEffect(() => {
        GetCheckouts().then(setCheckouts);
     }, []);

     const handleReturn = (id) => {
        ReturnCheckout(id).then(() => {
            GetCheckouts().then(setCheckouts);
        });
     };

    return (
        <div className="container">
        <div className="sub-menu bg-light">
            <h4>Checkouts</h4>
        </div>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Material</th>
                    <th>Type</th>
                    <th>Checkout Date</th>
                    <th>Return Date</th>
                    <th>Late Fees</th>
                </tr>
            </thead>
            <tbody>
                {checkouts.map((c) => (
                    <tr key={`checkouts-${c.id}`}>
                        <th scope="row">{c.id}</th>
                        <td>{c.patron.firstName}</td>
                        <td>{c.patron.lastName}</td>
                        <td>{c.material.materialName}</td>
                        <td>{c.material.materialType.name}</td>
                        {/* format this to be nice looking */}
                        <td>{c.checkoutDate.split("T")[0]}</td>
                        <td>{c.returnDate == null ? "In Use" : c.returnDate.split("T")[0]}</td>
                        <td>{c.lateFee == null ? "N/A" : c.lateFee}</td>
                        <td>{!c.returnDate ?
                        <Button
                        onClick={() => handleReturn(c.id)}
                        >Return</Button> : ""}
                            
                        </td>

                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    )
}