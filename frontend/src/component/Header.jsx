import {Container, Navbar} from 'react-bootstrap/';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('token')){
     
    }
}, [])

const [name, setName] = useState([]);
useEffect(() => {
  // Retrieve the name from localStorage on component mount
  const storedName = sessionStorage.getItem('name');
  if (storedName) {
    setName(storedName);
  }
}, []);

const handleSubmit = () => {
localStorage.removeItem('token')
sessionStorage.removeItem('token')
navigate('/')
}
  return (
    <Navbar className="bg-body-tertiary" bg="primary" data-bs-theme="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Check out all the upcoming event with FlapLive</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{name}</a>
          </Navbar.Text>
        
        </Navbar.Collapse>
        <NavDropdown  id="navbarScrollingDropdown" style={{marginLeft:"10px" ,color:'#fff', marginTop:'5px'}}>
              <NavDropdown.Item href="#action3" onClick={handleSubmit} style={{marginTop:'0px'}}>LogOut</NavDropdown.Item>
              
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default Header;