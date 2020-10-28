import React from 'react';
import Button from '../../components/Buttons/Button';
import classes from './Operators.module.css';

const operator =(props)=>(
    <Button styling={classes.Operator} value={props.value} clicked={props.clicked}/>
);

export default operator;