import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import LogoApp from "./logo";
import ProgressBar from "react-bootstrap/ProgressBar";
function Validation1() {
  return (
    <Container className="d-flex m-auto justify-content-center h-80">
      <Form className="validation-from">
        <LogoApp />
        <div className="input-icon">
          <Form.Group className="pb-10 " controlId="formBasicEmail">
            <i class="fa fa-user icon"></i>
            <Form.Control
              className="form-email"
              type="email"
              placeholder="Tên tài khoản"
            />
          </Form.Group>

          <Form.Group className="pb-10" controlId="formBasicPassword">
            <i class="fas fa-key icon "></i>
            <Form.Control
              className="form-password"
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Group>

          <Form.Group className="pb-10" controlId="formBasicPassword">
            <i class="fas fa-key icon "></i>
            <Form.Control
              className="form-password-confimation"
              type="password"
              placeholder="Xác nhận mật khẩu"
            />
          </Form.Group>
        </div>

        <div className="password-progess-bar d-flex justify-content-between align-items-baseline pb-10">
          <div>
            <p>Mật khẩu đặt chuẩn</p>
          </div>
          <ProgressBar className="progess-bar">
            <ProgressBar striped variant="success" now={33} key={1} />
            <ProgressBar variant="warning" now={33} key={2} />
            <ProgressBar striped variant="danger" now={34} key={3} />
          </ProgressBar>
        </div>
        <div className="password-progess-bar-input d-flex justify-content-between ">
          <Button
            className="fw-bold"
            variant="outline-warning"
            type="submit"
            href="/login"
          >
            TẠO TÀI KHOẢN
          </Button>
          <Button
            className="fw-bold"
            variant="outline-warning"
            type="submit"
            href="/"
          >
            ĐĂNG NHẬP
          </Button>
        </div>
        <div class="ml-60 position-absolute bottom-0">
          <p>Một sản phẩm của New Product Team</p>
        </div>
      </Form>
    </Container>
  );
}
export default Validation1;
