import React, { ReactNode } from "react";

interface INavBtn {
    children: ReactNode
    dataSet: string
    btnBurger: () => void
}

const NavBtn = ({ children, dataSet, btnBurger }: INavBtn) => {

    const navigation: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target instanceof HTMLElement) {
        let link = event.target.dataset.link;
        let elemLink = document.querySelector("." + link);
        elemLink.scrollIntoView({ block: "start", behavior: "smooth" });
        btnBurger();
    }}
    
    return (
        <div className="nav__item" data-link={dataSet} onClick={navigation}>
            <a href="#" className="nav__link">{children}</a>
        </div>
    )
}

export default NavBtn;