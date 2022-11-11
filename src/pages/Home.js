import {Footer} from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  return(
  <>
  <header>
		<div style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
		<h1 style={{padding:"1rem"}}>Soft Bank Private Ltd.</h1>
		<i style={{fontSize:"3rem", width:"auto"}}className="fa-solid fa-building-columns"/>
		</div>
    <p style={{textAlign:"center"}}>Banking before is never this easier !!</p>
  </header>
	<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id=" basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#login">Login</Nav.Link>
						<Nav.Link href="#register">Register</Nav.Link> */}
						<Link to="/Login" className="HomeNavBar" ><h3>Login</h3></Link>
						<Link to="/UserRegistration" className="HomeNavBar" ><h3>Register</h3></Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
		<img src={require("../wellsfargo.jpg")} 
		style={{width:"55%",alignSelf:"center"}}
		alt="image not found" />
		<Footer/>
		</>
  );
}
