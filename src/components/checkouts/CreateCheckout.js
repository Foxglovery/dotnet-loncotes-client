import { useEffect, useState } from "react"
import { getMaterial } from "../../data/materialsData";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createCheckout } from "../../data/checkoutData";

export default function CreateCheckout() {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [material, setMaterial] = useState({});
    const [materialId, setMaterialId] = useState();
    const [patronId, setPatronId] = useState();

    useEffect(() => {
        //get material by id, then with material set the others
        getMaterial(id).then(material => {
            setMaterial(material);
            setMaterialId(material.id);
        })
    }, [id])

    const handleSubmit = () => {
        const newCheckout = {
            materialId,
            patronId
        };
        createCheckout(newCheckout).then(() => {
            navigate("/materials");
        })
    };
    return (
        <div className="container">
            <h4>Checkout</h4>
            <Form>
                <FormGroup>
                    <Label htmlFor="materialName">Title</Label>
                    <Input 
                    type="text"
                    name="materialName"
                    value={material.materialName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="patronId">Patron Id</Label>
                    <Input
                    name="patronId"
                    placeholder="Enter your Patron Id"
                    type="text"
                    value={patronId}
                    onChange={(e) => {
                        setPatronId(parseInt(e.target.value))
                    }}
                    />
                </FormGroup>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}