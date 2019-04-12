import React, { Component } from 'react'

const Display = props => (
    <div>
    <h3>{props.name}</h3>
        <img src={props.img_url}></img>
        <h4>{props.description}</h4>
    </div>
)

export default Display
