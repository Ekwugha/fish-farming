import React from 'react';
import Cart from '../../component/cart/cart.component';
import Header from '../../component/header/header.component';
import Footer from '../../component/footer/footer.component';


function CartPage() {
    return (
        <div>
            <Header title="cart"/>
             <Cart />
             <Footer />
        </div>
    )
}

export default CartPage
