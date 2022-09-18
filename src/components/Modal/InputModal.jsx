import React from "react";

function InputModal({ classNameInput, classNameWrapper, placeholder, styleWrapper, styleInput, ...props }) {
    return (
        <div className={classNameWrapper} style={styleWrapper}>
            <input
                className={classNameInput}
                type="text"
                placeholder={placeholder}
                style={styleInput}
                {...props}
                required
            />
        </div>
    )
}

export default InputModal;