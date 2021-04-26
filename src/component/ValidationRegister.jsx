import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import LogoApp from './logo'
import ProgressBar from 'react-bootstrap/ProgressBar'
function Validation1() {
    return (
        <Container className="d-flex m-auto justify-content-center">
            <Form className="validation-from">
                <LogoApp />
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Tên tài khoản" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Mật khẩu" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Xác nhận mật khẩu" />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-baseline">
                    <div>
                        <p>Mật khẩu đặt chuẩn</p>
                    </div>
                    <ProgressBar className="progess-bar">
                        <ProgressBar striped variant="success" now={33} key={1} />
                        <ProgressBar variant="warning" now={33} key={2} />
                        <ProgressBar striped variant="danger" now={34} key={3} />
                    </ProgressBar>
                </div>
                <div className="d-flex justify-content-between">
                    <Button variant="primary" type="submit">
                        TẠO TÀI KHOẢN
                </Button>
                    <Button variant="primary" type="submit">
                        ĐĂNG NHẬP
                </Button>

                </div>

            </Form>
            <div class="position-absolute bottom-0 fs-6 fst-italic">Một sản phẩm của New Product Team</div>


        </Container>

    );
}
export default Validation1;