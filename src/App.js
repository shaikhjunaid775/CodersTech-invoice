import "./App.css";
import { Container , Row, Col } from "react-bootstrap";

import InvoiceForm from "./component/InvoiceForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="App d-flex flex-column align-items-center my-4 justify-content-center w-100">
        <>
         <Row>
          <Col lg={8}>
          </Col>
         </Row>
          <InvoiceForm />
        </>
      </div>
    </div>
  );
}

export default App;
