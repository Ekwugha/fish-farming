import React from 'react';
import Menu from '../../component/menu/menu.component';
import Header from '../../component/header/header.component';
import Footer from '../../component/footer/footer.component';

export default function MenuPage() {
    return (
        <div>
            <Header title="menu"/>
            <Menu />
            <Footer />
        </div>
    )
}