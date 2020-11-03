import React from 'react';
import classes from './InputField.module.css';

/**
 * InputField component
 * @param props props are a symbol as value and a classname
 * @returns returns a Component named Input
 */
const input =(props)=>(
    <input  type="text" value={props.value} readOnly className={classes.Input} pattern="[0-9]"/>
);

export default input;