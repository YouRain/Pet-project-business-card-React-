import React from "react";

interface Icl {
    [key: string]: string
}

interface IInputLogin {
    cl: Icl
    placeholder: string
    type: string
}

function InputLogin({ cl, placeholder, type, ...props }: IInputLogin) {
    return (
        <div className={cl.loginModalItem}>
            <input
                className={cl.loginModalInput}
                type={type}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default InputLogin;