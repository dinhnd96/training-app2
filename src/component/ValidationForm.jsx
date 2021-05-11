import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import LogoApp from "./logo";
import Container from "react-bootstrap/Container";
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex m-auto justify-content-center h-80">
      <Form
        className=" validation-from"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <LogoApp />
        <Form.Row className="d-flex flex-column">
          <Form.Group className="" controlId="validationCustom06">
            <i class="fa fa-user icon position-absolute"></i>
            <Form.Control
              className="mw-150 tid-15"
              type="text"
              placeholder=" Tên tài khoản"
              required
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập tên của bạn vào đây
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="" controlId="validationCustom04">
            <i class="fas fa-key icon position-absolute"></i>
            <Form.Control
              className="mw-150 tid-15"
              type="text"
              placeholder="Mật khẩu"
              required
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập mật khẩu của bạn vào đây
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <div className="password-progess-bar-input d-flex justify-content-between">
          <Button type="submit">TẠO TÀI KHOẢN</Button>
          <Button type="submit">ĐĂNG NHẬP</Button>
        </div>
        <div class="position-absolute bottom-0 ml-60">
          <p>Một sản phẩm của New Product Team</p>
        </div>
      </Form>
    </Container>
  );
}

export default FormExample;
