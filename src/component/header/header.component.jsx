import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HeaderTitle from './header.title'
import './header.styles.css';

export default function Header(props) {
    return (
        <div className="img" style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7)) ,url('assest/home2.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <Container>
                <Row className="vheight font align-items-center">
                    <Col>
                        <HeaderTitle> {props.title} </HeaderTitle>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
