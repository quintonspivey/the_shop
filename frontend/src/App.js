import {Nav, Navbar, Form, Container} from 'react-bootstrap';
import React from 'react';
import SignInPage from './pages/SignInPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
          <Nav.Link href='sneakers'>Sneakers</Nav.Link>
          <Nav.Link href='jerserys'>Jerseys</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
          </Container>
        </Navbar>

        </header>
        <main>
        <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path='signin' element={<SignInPage/>}/>
          </Routes>

        </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
