import React from 'react';
import Button from '../Buttons/Button';
import classes from './Operators.module.css';

/**
 * Operator component
 * @param props props are a symbol as value and a function to append in displayer
 * @returns returns a Component named Operator
 */
const operator = (props) => (
    <Button styling={classes.Operator} value={props.value} clicked={props.clicked} />
);

export default operator;