import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../App";
import ButtonLogin from "./ButtonLogin";
import InputLogin from "./InputLogin";
import cl from "./LoginModal.module.css";

function LoginModal() {
    const {isAuth, setIsAuth} = useContext(Auth);

    const navigate = useNavigate();

    function goToMainPage() {
        navigate("/mainpage")
    }

    // function login(e) {
    const login: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
        goToMainPage();
    }

    return (
        <div className={cl.loginModal}>
            <div className={cl.container}>
                <form className={cl.loginModalInner} onSubmit={login}>
                    <InputLogin cl={cl} type="text" placeholder="Введите логин" />
                    <InputLogin cl={cl} type="password" placeholder="Введите пароль" />
                    <div className={cl.buttonWrapper}>
                        <ButtonLogin cl={cl.buttonLogin}>Войти</ButtonLogin>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;