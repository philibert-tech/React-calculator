import React from 'react';
import Button from '../Buttons/Button';
import classes from './Numbers.module.css';
/**
 * Number component
 * @param props props are a symbol as value and a function to append in displayer
 * @returns returns a Component named Number
 */
const number =(props)=>(
    <Button styling={classes.Numbers} value={props.value} clicked={props.clicked}/>
);

export default number;