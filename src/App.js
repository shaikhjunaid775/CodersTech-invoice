import "./App.css";
import { Container } from "react-bootstrap";
import InvoiceForm from "./component/InvoiceForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
         
          <InvoiceForm />
        </Container>
      </div>
    </div>
  );
}

export default App;
