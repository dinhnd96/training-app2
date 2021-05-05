import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


function NavBarPage() {
    return (
        <Container className="nav-bar  justify-content-between ">
            <Navbar className="Navbar-Page " expand="lg">
                <Navbar.Brand href="#home">WELCOME TO MY HOME</Navbar.Brand>
                
                    <Form inline >
                        <FormControl width="48"  type="text" placeholder="Search" className="mr-sm-2" />
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