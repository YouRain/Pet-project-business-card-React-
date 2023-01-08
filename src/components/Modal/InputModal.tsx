import React, { CSSProperties } from "react";

interface IInputModal {
    classNameInput: string
    classNameWrapper: string
    placeholder: string
    styleWrapper?: CSSProperties
    value: string | number
    onChange: React.ChangeEventHandler<HTMLInputElement>
    props?: object
}

function InputModal({ classNameInput, classNameWrapper, placeholder, styleWrapper, value, onChange, ...props }: IInputModal) {
    return (
        <div className={classNameWrapper} style={styleWrapper}>
            <input
                value={value}
                onChange={onChange}
                className={classNameInput}
                type="text"
                placeholder={placeholder}
                {...props}
                required
            />
        </div>
    )
}

export default InputModal;