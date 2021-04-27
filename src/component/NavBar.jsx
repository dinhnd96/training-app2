import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


function NavBarPage() {
    return (
        <Container className="d-flex justify-content-between ">
            <Navbar className="Navbar-Page " bg="light" expand="lg">
                <Navbar.Brand href="#home" className="text-primary">WELCOME TO MY HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                    <Form inline  >
                        <input className="mw-300 br-20 fst-italic" type="text" placeholder="Search..." ></input>
                    </Form>

            </Navbar>
            <div className="d-flex"> 
                <img className="NavBar-icon mr-10" src="https://www.nintendoenthusiast.com/wp-content/uploads/2019/07/Psyduck.jpg" width="50"></img>
                <p className="m-auto">Vịt Bối Dối</p>
            </div>
        </Container>
    );
}
export default NavBarPage;