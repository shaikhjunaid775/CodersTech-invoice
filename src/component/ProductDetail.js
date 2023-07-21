import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  return (
    <>
      <div className="bg-dark p-3 r-3">
        <h5 className="text-white text-center">PRODUCT & SERVICE DETAILS</h5>
      </div>
      <Row className="mb-3 mt-3">
        <Form.Group as={Col} md="3" controlId="">
          <Form.Check
            inline
            label="Website"
            name="group1"
            type="checkbox"
            id=""
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="">
          <Form.Check inline label="TV" name="group1" type="checkbox" id="" />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="">
          <Form.Check inline label="SEO" name="group1" type="checkbox" id="" />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="">
          <Form.Check
            inline
            label="Others"
            name="group1"
            type="checkbox"
            id=""
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Pakage Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Row className="mb-3 mt-3">
        <Col lg={6}>
          <Form.Group controlId="">
            <Form.Label>Billing / Payment Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Billing / Payment Details"
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId=""
          >
            <Form.Label column sm="3">
              SubTotal
            </Form.Label>
            <Col sm="9">
              <Form.Control type="Number" placeholder="Subtotal" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId=""
          >
            <Form.Label column sm="3">
            GST 18.5%
            </Form.Label>
            <Col sm="9">
              <Form.Control type="Number" placeholder="GST 18.5%" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId=""
          >
            <Form.Label column sm="3">
              Total
            </Form.Label>
            <Col sm="9">
              <Form.Control type="Number" placeholder="Total" />
            </Col>
          </Form.Group>
        </Col>
        
      </Row>
    </>
  );
}

export default ProductDetail;
