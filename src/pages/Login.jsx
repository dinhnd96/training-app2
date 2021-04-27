import '../App.css';
import Validation from '../component/ValidationLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHomePage from '../component/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Login() {
  return (
    <div>
      <Row>
        <Col className="p-0 vh-100">
          <CardHomePage/>
        </Col>
        <Col className="d-flex bg-info p-0 vh-100">
          <Validation/>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

