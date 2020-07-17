import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [redirect, setRedirect] = useState(null)
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
      setRedirect(null);
      setRedirect(<Redirect to = '/' />)
    }).catch(function (error) {
      console.log(error.message);
    });
  }



  return (
    <React.Fragment>
      {redirect}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Portfoliomega</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link className="homeLink" to="/">Home</Link></Nav.Link>
            {/* <Nav.Link><Link className="signInLink" to="/signIn">Sign In</Link></Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>Project List</NavDropdown.Item>
              <NavDropdown.Item>Add Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={doSignOut}>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav.Link>{props.auth.currentUser.id}</Nav.Link> */}
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className='searchButton' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* {props.auth.currentUser.name} */}
      {/* <h1>Portfolioh-No-You-Di'int</h1>
        <Link className='homeLink' to='/'>Home</Link><br></br>
        <Link className='signInLink' to='/signIn'>Sign In</Link>
        <button onClick={doSignOut}>Sign Out</button> */}
      {/* <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/signIn">Sign In</Nav.Link> */}
    </React.Fragment>
  );
}

export default Header;