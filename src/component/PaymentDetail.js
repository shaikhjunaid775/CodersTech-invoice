import React from "react";
import Row from "react-bootstrap/Row";
import { Form, Col } from "react-bootstrap";

function PaymentDetail() {
  return (
    <>
      <nav>
        <div
          className="nav nav-tabs justify-content-around"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="Cheque-tab"
            data-bs-toggle="tab"
            data-bs-target="#Cheque"
            type="button"
            role="tab"
            aria-controls="Cheque"
            aria-selected="true"
          >
            Cheque/DD
          </button>
          <button
            className="nav-link"
            id="NTFS-tab"
            data-bs-toggle="tab"
            data-bs-target="#NTFS"
            type="button"
            role="tab"
            aria-controls="NTFS"
            aria-selected="false"
          >
            NTFS/RTGS
          </button>
          <button
            className="nav-link"
            id="CreditCard-tab"
            data-bs-toggle="tab"
            data-bs-target="#CreditCard"
            type="button"
            role="tab"
            aria-controls="CreditCard"
            aria-selected="false"
          >
            Credit Card
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="Cheque"
          role="tabpanel"
          aria-labelledby="Cheque-tab"
        >
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Cheque/CC No.</Form.Label>
                <Form.Control type="text" placeholder="Cheque/CC No." />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Cheque/CC No.</Form.Label>
                <Form.Control type="text" placeholder="Cheque/CC No." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control type="text" placeholder="Bank Name" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control type="text" placeholder="Bank Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Date</Form.Label>
                <Form.Control type="Date" placeholder="Date" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Date</Form.Label>
                <Form.Control type="Date" placeholder="Date" />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div
          className="tab-pane fade"
          id="NTFS"
          role="tabpanel"
          aria-labelledby="NTFS-tab"
        >
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Account No.</Form.Label>
                <Form.Control type="text" placeholder="Account No." />
              </Form.Group>
            </Col>
          </Row>
          <Row>

            <Col lg={6}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Transaction Number</Form.Label>
                <Form.Control type="text" placeholder="Transaction Number" />
              </Form.Group>
            </Col>
          </Row>
          
          
        </div>
        <div
          className="tab-pane fade"
          id="CreditCard"
          role="tabpanel"
          aria-labelledby="CreditCard-tab"
        >
          ...
        </div>
      </div>
      <h6 className="my-3">
        Note: Cheque / DD to be issued in favour of{" "}
        <span className="fw-bold">"SPOTPIXEL."</span>
      </h6>
    </>
  );
}

export default PaymentDetail;
