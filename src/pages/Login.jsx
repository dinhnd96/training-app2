import "../App.css";
import Validation from "../component/ValidationLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import CardHomePage from "../component/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormExample from "../component/ValidationForm";

function Login() {
  return (
    <div>
      <Row>
        <Col className="login-left p-0 vh-100">
          <CardHomePage />
        </Col>
        <Col className="d-flex login-right bg-info-main p-0 vh-100">
          {/* <Validation /> */}
          <FormExample />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
