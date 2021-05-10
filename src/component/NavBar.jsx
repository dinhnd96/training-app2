import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import SideBar from "../component/SideBar";
import IconDropDown from "../component/Dropdown";

function NavBarPage() {
  return (
    <Container className="d-flex justify-content-between ">
      <SideBar />
      <Navbar className="Navbar-Page " bg="light" expand="lg">
        <Navbar.Brand href="#home" className="Navbar-Brand text-primary">
          WELCOME TO MY HOME
        </Navbar.Brand>
        <Form className="input-icon" inline>
          <label for="inputState" class="form-label"></label>
          <select id="inputState" class="form-select">
            <option selected>Search...</option>
            <option>Sen Đá</option>
            <option>Ghế tựa</option>
            <option>Bàn tựa</option>
            <option>Sen Đá</option>
          </select>
        </Form>
      </Navbar>

      <div className="navbar-right-icon ">
        <IconDropDown />
      </div>
    </Container>
  );
}
export default NavBarPage;
