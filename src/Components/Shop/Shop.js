import React, { useState } from 'react';
import fakeData from "../../fakeData/fakeData";
import Courses from '../Courses/Courses'
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [course, setCourse] = useState(fakeData);
    const [cart, setcart] = useState([]);
    function updateCart(course) {
        let newCart = [...cart, course];
        setcart(newCart);
    }

    return (
        <div className="body">
            <div className="courses-area bg-dark text-white">
                {
                    course.map(cr => <Courses updateCart={updateCart} course={cr}>
                    </Courses>)
                }
            </div>

            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;