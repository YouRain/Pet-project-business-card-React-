import React, { CSSProperties, ReactNode } from "react";

interface ITextModal {
    classNameInput: string
    classNameWrapper: string
    placeholder: string
    style: CSSProperties
    value: string
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
    props?: object
}

function TextModal({ classNameInput, classNameWrapper, placeholder, style, value, onChange, ...props }: ITextModal) {
    return (
        <div className={classNameWrapper}>
            <textarea
                value={value}
                onChange={onChange}
                className={classNameInput}
                placeholder={placeholder}
                style={style}
                {...props}
            />
        </div>
    )
}

export default TextModal;