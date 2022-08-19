import './Button.css';
import React from "react";

const defaultFunction = props => {
    return (
        <button className='button'>
            {props.label}
        </button>
    );
}

export default defaultFunction;