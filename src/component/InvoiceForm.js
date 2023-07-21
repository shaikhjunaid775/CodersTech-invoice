import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./InvoiceForm.css";
import Header from "../component/Header";
import ProductDetail from "./ProductDetail";
import { Card } from "react-bootstrap";
import PaymentDetail from "./PaymentDetail";
import InvoiceModal from "./InvoiceModal"

function InvoiceForm() {
  const [validated, setValidated] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    }
    
    setValidated(true);
  };
  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
    // console.log("openned")
  }
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="p-3">
        <Header />
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Company name"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mt-3"
              as={Col}
              md="12"
              controlId="validationCustom02"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Address"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group> */}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Location / Landmark</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location / Landmark"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Location / Landmark.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid City.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="number" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="">
              <Form.Label>Website</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Website"
                // defaultValue="Otto"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Label>Contact Person</Form.Label>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Person's Name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Mobile" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Mobile Number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email Address.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <ProductDetail />

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="I certify that i have read & accept Package details sheet with term & conditions started overleaf"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          

          <hr />
          
          <PaymentDetail />
          <Button type="submit" onClick={handleOpen}>Review Invoice</Button>

          <InvoiceModal 
            open={open}
            onClose={handleClose}
          />
        </Form>
      </Card>
    </>
  );
}

export default InvoiceForm;
