import React from 'react';

/**
 * Button component
 * @param props props are a symbol or button as value a classname and a function
 * @returns returns a Component named Button
 */

const button = (props) => (
    <input type="button" className={props.styling} value={props.value} onClick={props.clicked} />
);

export default button;