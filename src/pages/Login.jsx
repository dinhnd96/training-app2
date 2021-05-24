import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import CardHomePage from "../component/Card";
// import FormExample from "../component/ValidationForm";
import BG from "../assets/welcome_bg.png";
import LoginForm from "../component/LoginForm";

function Login() {
  return (
    <Row className="vh-100 w-100">
      <Col className="login-left p-0 vh-100 " style={{ backgoundImage: BG }}>
        <CardHomePage />
      </Col>
      <Col className="d-flex login-right bg-info-main p-0 vh-100">
        {/* <FormExample /> */}
        <LoginForm />
      </Col>
    </Row>
  );
}

export default Login;
