import React from 'react';

const Input = ({ className, type, value, id, onChange, onInput }) => {
    return (
        <input className={className} type={type} value={value} id={id} onChange={onChange} onInput={onInput} autoComplete='off' />
    );
};

export default Input;