import React, { useState } from "react";

interface IInputContact {
    clIcon: string
    value: string
    setValue: (value: string) => void
    name: string
    placeholder: string
}

export function InputContact({ clIcon, value, setValue, name, placeholder }: IInputContact) {
    const [isBlur, setIsBlur] = useState(false);

    let cl = "you__input";

    if (isBlur) {
        cl = "you__input borderParentInput"
    }

    return (
        <div className={cl}>
            <label className="name__icon">
                <i className={clIcon}></i>
            </label>
            <input value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => setIsBlur(false)} onFocus={() => setIsBlur(true)} className="input" name={name} placeholder={placeholder} type="text" required />
        </div>
    )
}