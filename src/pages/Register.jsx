import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import CardHomePage from "../component/Card";
import FormExampleR from "../component/ValidationFromR";

function Login() {
  return (
    <div>
      <Row>
        <Col className="login-left p-0 vh-100">
          <CardHomePage />
        </Col>
        <Col className="login-right d-flex bg-info-main">
          <FormExampleR />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
