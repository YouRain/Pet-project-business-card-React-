import React, { useEffect, useRef, useState } from "react";
import NavBtn from "./NavBtn";

interface IMyHeaders {
    introElem: null | HTMLElement
}

function MyHeaders({ introElem }: IMyHeaders) {
    //Фон Header
    const header = useRef<HTMLElement>(null);
    const [classHeader, setClassHeader] = useState("header");

    function bgHeader() {
        if (window.pageYOffset + header.current.offsetHeight > introElem.offsetTop) {
            setClassHeader("header headermodif");
        };
        if (window.pageYOffset + header.current.offsetHeight < introElem.offsetTop) {
            setClassHeader("header");
        };
        if (refBurger.current.classList.contains("active")) {
            refBurger.current.classList.remove("active");
            refBurger.current.previousSibling.classList.remove("burger");
            refBurger.current.previousSibling.previousSibling.classList.remove("header__logo-trans");
        }
    }

    useEffect(() => {
        if (introElem === null) return
        window.addEventListener("scroll", bgHeader)
        if (window.pageYOffset + header.current.offsetHeight > introElem.offsetTop) {
            setClassHeader("header headermodif");
        };
        return () => {
            window.removeEventListener("scroll", bgHeader)
        }
    }, [introElem])

    //Кнопки навигации
    const nameNavBtn = [
        { name: "Обо мне", dataSet: "link__about" },
        { name: "Умения", dataSet: "link__skills" },
        { name: "Опыт", dataSet: "link__experience" },
        { name: "Связь", dataSet: "section__connect" },
    ]

    //Бургер меню
    const refBurger = useRef(null)

    function btnBurger() {
        refBurger.current.classList.toggle("active");
        refBurger.current.previousSibling.classList.toggle("burger");
        refBurger.current.previousSibling.previousSibling.classList.toggle("header__logo-trans");
    }

    return (
        <header className={classHeader} ref={header}>
            <div className="container">
                <div className="header__inner" >

                    <div className="header__logo">
                        Pet проект: сайт-визитка
                    </div>

                    <div className="nav-wrapper">
                        <nav className="nav">

                            {nameNavBtn.map((prop) =>
                                <NavBtn key={prop.name} btnBurger={btnBurger} dataSet={prop.dataSet}>{prop.name}</NavBtn>
                            )}

                        </nav>
                    </div>

                    <button className="nav-toggle" type="button" onClick={btnBurger} ref={refBurger}>
                        <span className="nav-toggle__item">Menu</span>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default MyHeaders;