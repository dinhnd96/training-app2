import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import SideBar from "./SideBar";
import IconDropDown from "./Dropdown";

function NavBarPage() {
  return (
    <Container className="d-flex justify-content-between ">
      <SideBar />
      <Navbar className="Navbar-Page " bg="light" expand="lg">
        <Navbar.Brand href="#home" className="Navbar-Brand text-primary">
          WELCOME TO MY HOME
        </Navbar.Brand>
        <Form className="input-icon" inline>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="mw-300 br-20 fst-italic tit-10"
              placeholder="Search..."
            />
          </Form.Group>
          <i class="fas fa-search icon-navbar"></i>
        </Form>
      </Navbar>

      <div className="navbar-right-icon ">
        <IconDropDown />
      </div>
    </Container>
  );
}
export default NavBarPage;
