// import React from 'react';
import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar-styles.css';

export default function CustomNavbar() {
    const [navbar, setNavbar] = useState(false);
    const [navbarbrand, setColor] = useState(false);
    const [expanded, setExpanded] = useState(false);    

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
            
        } else {
            setNavbar(false);
        }
    };

    const changeColor = () => {
        if(window.scrollY >= 80){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeColor);
        

    return (
        <Navbar expanded={expanded} scrolling='true' light="true" expand="md" fixed="top" variant="dark" bg="transparent" className={navbar ? 'navbar active' : 'navbar'}>
            <Container className='font'>
                <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text-bold py-3' : 'text-light  text-bold py-3'}>
                    FISH FARM
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className={navbarbrand ? 'color' : 'text-light text'}>
                        {/* <FontAwesomeIcon icon={faBars}  size="lg"/> */}
                </Navbar.Toggle  >
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Home </Nav.Link>
                        <Nav.Link as={Link} to="/calendar" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} >Calendar</Nav.Link>
                        <Nav.Link as={Link} to="/quiz" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} >Quiz</Nav.Link>
                        <Nav.Link as={Link} to="/pdf" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} >Pdf</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} >Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
