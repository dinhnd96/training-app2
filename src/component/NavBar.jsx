import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import SideBar from '../component/SideBar'
import Key from '../assets/key.png'
import IconDropDown from '../component/Dropdown'

function NavBarPage() {
    return (
        <Container className="d-flex justify-content-between ">
            <SideBar/>
            <Navbar className="Navbar-Page " bg="light" expand="lg">
                <Navbar.Brand href="#home" className="Navbar-Brand text-primary">WELCOME TO MY HOME</Navbar.Brand>
                    <Form className="input-icon" inline  >
                    <i class="fas fa-search icon-navbar"></i>
                        <input className="mw-300 br-20 fst-italic tit-10" type="text" placeholder="Search..." ></input>
                    </Form>

            </Navbar>
            <div className="navbar-right-icon "> 
                {/* <img className="NavBar-icon mr-10" src="https://www.nintendoenthusiast.com/wp-content/uploads/2019/07/Psyduck.jpg" width="50"></img>
                <p className="m-auto">Vịt Bối Dối</p> */}
                <IconDropDown/>
            </div>
        </Container>
    );
}
export default NavBarPage;