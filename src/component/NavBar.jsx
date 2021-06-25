import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import SideBar from "./SideBar";
import IconDropDown from "./Dropdown";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function NavBarPage(props) {
  const { onSearch } = props;
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <Container className="d-flex justify-content-between ">
      <SideBar />
      <Navbar className="Navbar-Page " expand="lg">
        <Navbar.Brand href="#home" className="Navbar-Brand text-primary">
          WELCOME TO MY HOME
        </Navbar.Brand>
        <Form className="input-icon" inline onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="mw-300 br-20 fst-italic tit-10"
              placeholder="Search..."
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Group>
          <i className="fas fa-search icon-navbar"></i>
        </Form>
      </Navbar>

      <div className="navbar-right-icon ">
        <IconDropDown />
      </div>
    </Container>
  );
}
export default NavBarPage;
