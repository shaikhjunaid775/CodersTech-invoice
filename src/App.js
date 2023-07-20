import './App.css';
import { Container } from 'react-bootstrap';
import InvoiceForm from './component/InvoiceForm';

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
