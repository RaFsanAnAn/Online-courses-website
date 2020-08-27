import React from 'react';
import "./Courses.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Courses = (props) => {
    const {name, instructor, price, img} = props.course;
    return (
        <div className="course">
            <div >
                <img className = "img" src={img} alt="" />
            </div>
            <div className = "details">
                <h2 className="course-name">{name} </h2>
                <h4>Instructed By : {instructor} </h4>
                <p>Price : $ {price}</p>
                <Button variant ="success" onClick={()=>props.updateCart(props.course)}>
               <FontAwesomeIcon icon={faPlusSquare}/> Enroll Now</Button>
            </div>
        </div>

    );
};

export default Courses;