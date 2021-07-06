import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import CardHomePage from "../component/Card";
import RegisterForm from "../component/RegisterForm";
import BG from "../assets/welcome_bg.png";

function Login() {
  const style = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <Row className="vh-100 w-100 ml-0">
      <Col className="login-left p-0" style={style}>
        <CardHomePage />
      </Col>
      <Col className="login-right d-flex bg-info-main">
        <RegisterForm />
      </Col>
    </Row>
  );
}

export default Login;
