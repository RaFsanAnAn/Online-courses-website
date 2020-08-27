import React from 'react';
import "./AddedCourses.css"

const AddedCourses = (props) => {
    const {name, instructor, price} = props.course;
    return (
        <div className="bg-dark added-course">
            <h3>{name}</h3>
            <h5>Instructed by : {instructor}</h5>
            <h5>Price : {price} </h5>
        </div>
    );
};

export default AddedCourses;