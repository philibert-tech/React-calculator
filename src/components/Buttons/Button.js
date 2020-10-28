import React from 'react';

const button =(props)=>(
    <input  type="button" className={props.styling} value={props.value} onClick={props.clicked}/>
);

export default button;