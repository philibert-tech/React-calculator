import React from 'react';
import Button from '../Buttons/Button';
import classes from './Numbers.module.css';

const number =(props)=>(
    <Button styling={classes.Numbers} value={props.value} clicked={props.clicked}/>
);

export default number;