import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
function App() {
  return (
    <>
      <h1>This is app component</h1>
      <Container>
        <Button variant="warning">Warning</Button>
      </Container>
    </>
  );
}

export default App;
