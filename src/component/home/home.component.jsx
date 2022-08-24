import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import Aos from 'aos';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.styles.css';

const Home = () => {
    useEffect(() => { 
        Aos.init({ duration: 2000});
    }, []);
    return (
        <header className="img" style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.9)) ,url('assest/home2.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover' 
        }}>
            <Container>
                <Row className="height align-items-center py-5 text-center">
                    <Col>
                        {/* <h1 data-aos='slide-right' className="intro-title text-light text-center mb-5 title">Fish Farming</h1> */}
                        <h1 className="intro-subtitle text-white mb-2">
                            <span  className="text-white font">
                                <strong>
                                    <Typewriter options={{
                                        strings: ['Fish Farming', 'e-skill Acquisition on Fish Farming', 'Vital Fish Farming Process Calendar', 'Instant Feedback Via Emails'],
                                        autoStart: true,
                                        loop: true,
                                    }}/>
                                </strong>
                            </span>
                        </h1>
                        <Link to='/calendar' bsstyle="primary" data-aos='fade-up' className="font btn-color textlight nounderline btn btn-outline-light btn-lg mt-4 text-capitalize">
                            view calender
                        </Link>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Home;