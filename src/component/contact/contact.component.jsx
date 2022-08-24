import React from 'react';
// import AboutHeader from '../about-header/about-header.component';
// import CustomButton from '../button/button.component'; 
import { Container, Col, Row } from 'react-bootstrap';
// import emailjs from 'emailjs-com';
import './contact.styles.css'

function Contact() {
    // function sendEmail(e) {
    //     e.preventDefault();

    //     emailjs.sendForm();
    // }
    return (
        <div>
            {/* <AboutHeader> Contact Us </AboutHeader> */}
            <section className="py-5 g">
            <Container>
                <Row>
                    <Col>
                    {/* <form action="https://formspree.io/f/{form_id}" method="post">
  <label for="email">Your Email</label>
  <input name="Email" id="email" type="email">
  <button type="submit">Submit</button>
</form> */}
                        <div className="box-shadow-full">
                            <Row>
                                <h3 className="text-dark"> Reach out to us. </h3>
                                <div className="title-underline"></div>
                                <form action="https://formspree.io/f/mlevdnrj" method="post" >
                                <Row>
                                    <Col md={6} className="form-group py-2">
                                        <input type="name" name="name" id="name" className="form-control p" placeholder="Your Name" required />
                                    </Col>
                                    <Col md={6} className="form-group py-2">
                                        <input type="subject"  name="subject" id="subject" className="form-control" placeholder="Subject" required />
                                    </Col>
                                    <div className="form-group py-2">
                                        <textarea type="message"  name="message" id="message" cols="120" rows="5" className="form-control" placeholder="Your Message"
                                            required></textarea>
                                    </div>
                                    <button> Send </button>
                                </Row>
                                </form>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    )
}

export default Contact
