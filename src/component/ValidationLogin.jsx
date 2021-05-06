import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import LogoApp from './logo'

function Validation() {
    return (
        <Container className="d-flex m-auto justify-content-center h-80">
            <Form className="validation-from ">
                <LogoApp />
                <div className="pb-10 input-icon">
                    <Form.Group controlId="formBasicEmail">
                    <i class="fa fa-user icon"></i>
                        <Form.Control className="form-email " type="email" placeholder="Tên tài khoản" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <i class="fas fa-key icon"></i>
                        <Form.Control className="form-password" type="password" placeholder="Mật khẩu" />
                    </Form.Group>

                </div>
                <div className="d-flex justify-content-between">
                    <Button className="mw-150" variant="primary" type="submit">
                        TẠO TÀI KHOẢN
                </Button>
                    <Button className="mw-150" variant="primary" type="submit">
                        ĐĂNG NHẬP
                </Button>
                
                </div>
            </Form>
            <div class="position-absolute bottom-0">Một sản phẩm của New Product Team</div>
        </Container>

    );
}
export default Validation;