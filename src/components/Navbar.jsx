import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand><h1>BMI Calculator</h1></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
