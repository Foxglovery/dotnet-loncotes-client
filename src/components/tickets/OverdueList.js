import { useEffect, useState } from "react";
import { GetOverdue } from "../../data/checkoutData";
import { Table } from "reactstrap";

export default function OverdueList() {
  const [overdue, setOverdue] = useState([]);

  useEffect(() => {
    GetOverdue().then(setOverdue);
  }, []);
  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Overdue Materials</h4>
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
            <th>Late Fees</th>
          </tr>
        </thead>
        <tbody>
            {overdue.map((o) => (
                <tr key={`overdue-${o.id}`}>
                    <th scope="row">{o.id}</th>
                    <th>{o.patron.firstName}</th>
                    <th>{o.patron.lastName}</th>
                    <th>{o.material.materialName}</th>
                    <th>{o.material.materialType.name}</th>
                    <th>{o.checkoutDate?.split("T")[0]}</th>
                    <th>{o.lateFee}</th>
                </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
