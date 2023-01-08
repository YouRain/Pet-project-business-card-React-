import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../App";
import { IPersonInfo } from "../types/interface";
import BoxContent from "./BoxContent";

interface IFooter {
    person: IPersonInfo
}

function Footer({person}: IFooter) {
    const {isAuth, setIsAuth} = useContext(Auth);

    const navigate = useNavigate();

    function logout() {
        setIsAuth(false);
        goToLogin();
        localStorage.removeItem("auth");
    }

    function goToLogin() {
        navigate("/login")
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__social">
                        <a className="footer__social__item" href={person.linkGitHub} target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a className="footer__social__item" href={person.linkLinkedIn} target="_blank">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a className="footer__social__item" href={person.linkTwitter} target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <BoxContent class_div="footer__title" content_h3="Рустам Юсупов"/>
                    <BoxContent class_div="footer__copyright">&copy; 2022 Сайт-визитка. Все права защищены.</BoxContent>
                </div>
            </div>
            <div style={{position: "absolute", top: 10, right: 10}}>
                <button onClick={logout} className="footer__btn">Выйти</button>
            </div>
        </footer>
    )
}

export default Footer;