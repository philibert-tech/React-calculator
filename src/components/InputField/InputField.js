import React from 'react';
import classes from './InputField.module.css';

const input =(props)=>(
    <input  type="text" value={props.value} readOnly className={classes.Input} pattern="[0-9]"/>
);

export default input;