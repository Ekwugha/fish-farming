import React from 'react';
import Contact from '../../component/contact/contact.component';
import Header from '../../component/header/header.component';
import Footer from '../../component/footer/footer.component';


function ContactPage() {
    return (
        <div>
            <Header title="contact"/>
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage;