import React from "react";

function TextModal({ classNameInput, classNameWrapper, placeholder, style, ...props }) {
    return (
        <div className={classNameWrapper}>
            <textarea
                className={classNameInput}
                type="text"
                placeholder={placeholder}
                style={style}
                {...props}
            />
        </div>
    )
}

export default TextModal;