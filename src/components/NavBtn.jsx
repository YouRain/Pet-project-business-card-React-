import React from "react";

function NavBtn({ children, dataSet, btnBurger }) {
    function navigation(event) {
        let link = event.target.dataset.link;
        let elemLink = document.querySelector("." + link);
        elemLink.scrollIntoView({ block: "start", behavior: "smooth" });
        btnBurger();
    }

    return (
        <div className="nav__item" data-link={dataSet} onClick={navigation}>
            <a href="#" className="nav__link">{children}</a>
        </div>
    )
}

export default NavBtn;