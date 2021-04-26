import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import LogoApp from './logo'
function Validation() {
    return (
            <Container className="d-flex m-auto justify-content-center">
            <Form className="validation-from">
                <LogoApp/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Tên tài khoản" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Mật khẩu" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" type="submit">
                            TẠO TÀI KHOẢN
                </Button>
                        <Button variant="primary" type="submit">
                            ĐĂNG NHẬP
                </Button>
                    </div>
            </Form>
            <div class="position-absolute bottom-0">Một sản phẩm của New Product Team</div>
        </Container>
        
    );
}
export default Validation;