import React from 'react';

const button =(props)=>(
    <input type="button" value={props.value} onClick={props.clicked}/>
);

export default button;