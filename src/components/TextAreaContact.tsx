import React, { useState } from "react";

interface ITextAreaContact {
    value: string
    setValue: (value: string) => void
    name: string
    placeholder: string
}

export function TextAreaContact({ value, setValue, name, placeholder }: ITextAreaContact) {
    const [isBlur, setIsBlur] = useState(false);

    let cl = "you__message";

    if (isBlur) {
        cl = "you__message borderParentText"
    }

    return (
        <div className={cl}>
            <textarea value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => setIsBlur(false)} onFocus={() => setIsBlur(true)} className="input" name={name} placeholder={placeholder} required />
        </div>
    )
}