import {Nav, Navbar, Form, Container} from 'react-bootstrap';
import React from 'react';

function App() {
  return (
    <div >
      <header className="App-header">
        <Navbar  bg="dark" variant="dark" expand ={false}>
         <Container >
         
         
          <Navbar.Brand href='/'> The Store</Navbar.Brand>
          <Nav >
          <Nav.Item>
        <Nav.Link href="/signin">Sign in</Nav.Link>
      </Nav.Item>
      </Nav>
        <Form>
          <Form.Control
          className='d-flex'
          placeholder='search'/>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
          </Container>
        </Navbar>

        </header>
    </div>
  );
}

export default App;
