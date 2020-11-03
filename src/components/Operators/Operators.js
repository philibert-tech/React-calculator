import React from 'react';
import Button from '../Buttons/Button';
import classes from './Operators.module.css';

/**
 * Operator component
 * @param props props to be received by operator
 * @returns return a react component
 */
const operator =(props)=>(
    <Button styling={classes.Operator} value={props.value} clicked={props.clicked}/>
);

export default operator;