import React, { Component } from 'react'
import "../App.css"

const Form = (props) => (
    <div className="form__container">
        <form className="form" onSubmit={props.getData}>
            <input className="form__input" type='text' name='name' placehold="Type In Character.." />
            <button className="form__button"> Search ..</button>
        </form>

    </div>
);

export default Form
