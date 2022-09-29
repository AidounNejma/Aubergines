import React from "react";

const Field = ({
    name,
    value,
    onChange,
    placeholder = "",
    type,
    error = "", 
    className
}) => (
    <div className="input-wrapper">
        <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={className + (error && " is-invalid")}
        />
        {error && <p className="invalid-feedback">{error}</p>}
    </div>
);

export default Field;