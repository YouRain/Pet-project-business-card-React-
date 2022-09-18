import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Auth } from "../App";

function Footer({person}) {
    const {isAuth, setIsAuth} = useContext(Auth);

    const navigate = useNavigate();

    function logout() {
        setIsAuth(false);
        localStorage.removeItem("auth", false);
        navigate("/login");
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
                    <div className="footer__title">
                        <h3>Рустам Юсупов</h3>
                    </div>
                    <div className="footer__copyright">
                        &copy; 2022 Сайт-визитка. Все права защищены.
                    </div>
                </div>
            </div>
            <div style={{position: "absolute", top: 10, right: 10}}>
                <button onClick={logout} className="footer__btn">Выйти</button>
            </div>
        </footer>
    )
}

export default Footer;