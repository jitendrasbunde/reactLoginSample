
import React from "react";
import {Nav,Navbar,Form,FormControl,Button,} from 'react-bootstrap'

function NavBarComponent() {
  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Peerly</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/allUsers">All Users</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      </>
  );
}
export default NavBarComponent;



 