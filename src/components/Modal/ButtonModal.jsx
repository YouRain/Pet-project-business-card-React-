import React from "react";

function ButtonModal({ className, children, ...props }) {
    return (
        <button
            className={className}
            {...props} >
            {children}
        </button>
    )
}

export default ButtonModal;