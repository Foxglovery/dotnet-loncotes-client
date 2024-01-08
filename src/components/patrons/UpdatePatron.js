import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useEffect, useState } from "react";
import { GetPatronById, updatePatron } from "../../data/patronsData";



export default function UpdatePatron() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [patron, setPatron] = useState({})
    const [userAddress, setUserAddress] = useState("")
    const [userEmail, setUserEmail] = useState("")

    useEffect(() => {
    GetPatronById(id).then((fetchedPatron) => {
        setPatron(fetchedPatron);
        setUserAddress(fetchedPatron.address || "");
        setUserEmail(fetchedPatron.email || "");
    });
}, [id]);


    const submit = () => {
        const updatedPatron = {
            userAddress,
            userEmail
        };
    updatePatron( id, updatedPatron ).then(() => {
        navigate("/patrons");
    });
    }

    return (
        <div className="container">
            <h4>Update Patron Details</h4>
            <Form>
                <FormGroup>
                    <Label htmlFor="address">Address</Label>
                    <Input 
                    type="text"
                    placeholder={patron.address}
                    name="address"
                    value={userAddress}
                    onChange={(e) => {
                        setUserAddress(e.target.value)
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                    type="text"
                    placeholder={patron.email}
                    name="email"
                    value={userEmail}
                    onChange={(e) => {
                        setUserEmail(e.target.value)
                    }}
                    />
                </FormGroup>
                <Button onClick={submit}>Submit</Button>
            </Form>

        </div>
    )
}