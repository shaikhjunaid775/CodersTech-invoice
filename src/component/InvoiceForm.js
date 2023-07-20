import React, { Component } from "react";
import Header from "./Header";
// import logo from "../assets/logo.png";
import { Row, Col, Form, Card } from "react-bootstrap";
import "./InvoiceForm.css";

export class InvoiceForm extends Component {
  render() {
    return (
      <div>
        <Card className="">
          <Header />
          <Form>
            <Row className="m-2">
              <Col lg={12}>
                <hr />
                <div className="mb-3">
                  <label
                    htmlFor="Company Name"
                    className="form-label"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="CompanyName"
                    placeholder="i.e Coderstechnology"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="Address"
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Address"
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
}

export default InvoiceForm;
