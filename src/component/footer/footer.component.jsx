import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './footer.styles.css';

const Footer = () => (
        <footer className="py-5 bgdark footer">
            <Container>
                <Row>
                    <Col>
                        <p className="copyright text-center">Made with &#10084; by Uche Emodi </p>
                    </Col>
                </Row>
            </Container>
        </footer>
);
  
export default Footer;