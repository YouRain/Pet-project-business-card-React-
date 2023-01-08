import React, { ReactNode } from "react";

interface IButtonModal {
    children: ReactNode
    className: string
    onClick: () => void
    props?: Array<any>
}

function ButtonModal({ className, children, onClick, ...props }: IButtonModal) {
    return (
        <button
            className={className}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default ButtonModal;