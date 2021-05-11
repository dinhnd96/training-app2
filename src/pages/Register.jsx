import "../App.css";
import Validation1 from "../component/ValidationRegister";
import "bootstrap/dist/css/bootstrap.min.css";
import CardHomePage from "../component/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormExampleR from "../component/ValidationFromR";

function Login() {
  return (
    <div>
      <Row>
        <Col className="login-left p-0 vh-100">
          <CardHomePage />
        </Col>
        <Col className="login-right d-flex bg-info-main">
          {/* <Validation1 /> */}
          <FormExampleR />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
