import React, { Component } from 'react'
import logo from '../assets/logo.png'
import {Row , Col, Form} from 'react-bootstrap'

export class InvoiceForm extends Component {
  render() {
    return (
      <div>
        <Form>
            <Row>
                <Col lg={8}>
                    <img src={logo} alt="Logo" />
                </Col>
            </Row>
        </Form>
      </div>
    )
  }
}

export default InvoiceForm
