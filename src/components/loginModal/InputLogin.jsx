import React from "react";

function InputLogin({ cl, placeholder, type, styleInput, ...props }) {
    return (
        <div className={cl.loginModalItem}>
            <input
                className={cl.loginModalInput}
                type={type}
                placeholder={placeholder}
                style={styleInput}
                {...props}
            />
        </div>
    )
}

export default InputLogin;