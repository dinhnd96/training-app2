import '../App.css';
import Validation1 from '../component/ValidationRegister'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHomePage from '../component/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Login() {
  return (
    <div>
      <Row>
        <Col>
          <CardHomePage/>
        </Col>
        <Col className="d-flex bg-info">
          <Validation1/>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

