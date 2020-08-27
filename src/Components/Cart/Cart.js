import React from 'react';
import "./Cart.css"
import { Button } from 'react-bootstrap';
import AddedCourses from "../AddedCourses/AddedCourses";

const Cart = (props) => {
    const cart = props.cart;
    let grandTotal = cart.reduce((sum,course) => sum + course.price ,0);
    grandTotal = grandTotal.toFixed(2);
        return (
        <div>
            <div className = "header">
                <h4>Added Courses : {cart.length}</h4>
                <br/> <br/>
                <h5>Total Price: ${grandTotal}</h5>
            </div>
            <div>
                {cart.map(course=><AddedCourses course={course}></AddedCourses>)}
            </div>
            <div className = "text-center">
                <Button variant="success btn-lg m-2 px-5" >Done</Button>
            </div>
        </div>
    );
};

export default Cart;