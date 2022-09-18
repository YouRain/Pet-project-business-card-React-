import React, { useEffect, useRef, useState } from "react";
import MapYandex from "./Maps/MapYandex";

function Contact({ person, idPerson }) {
    const refBox = useRef({});
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        window.addEventListener("scroll", slideBox)
        return () => {
            window.removeEventListener("scroll", slideBox)
        }
    }, [])

    function slideBox() {
        if (document.documentElement.clientHeight > refBox.current.getBoundingClientRect().y) {
            refBox.current.firstElementChild.classList.add("transform");
            refBox.current.lastElementChild.classList.add("transform");
        };
        if (window.pageYOffset + document.documentElement.clientHeight < refBox.current.offsetTop) {
            refBox.current.firstElementChild.classList.remove("transform");
            refBox.current.lastElementChild.classList.remove("transform");
        };
    }

    const tel = "tel:" + person.numberTelefone;
    const eMail = "mailto:" + person.eMail;

    function lightBorder(event) {
        let target = event.target.tagName;
        switch (target) {
            case "INPUT":
                event.target.closest("div").classList.add("borderParentInput");
                break;
            case "TEXTAREA":
                event.target.closest("div").classList.add("borderParentText");
                break;
            default:
                return;
        }
    }
    function defaultBorder(event) {
        let target = event.target.tagName;
        switch (target) {
            case "INPUT":
                event.target.closest("div").classList.remove("borderParentInput");
                break;
            case "TEXTAREA":
                event.target.closest("div").classList.remove("borderParentText");
                break;
            default:
                return;
        }
    }
    
    return (
        <section className="section">
            <div className="container">
                <div className="section__connect trans" ref={refBox}>

                    <div className="section__contact">
                        <div className="contact__header">
                            <h3>Свяжись со мной</h3>
                        </div>

                        <div className="contact__body">
                            <form onSubmit={(e) => e.preventDefault()} onBlur={defaultBorder} onFocus={lightBorder} action="/" method="post" className="contact__you">
                                <div className="you__title">
                                    <h4>Не стесняйтесь обращаться</h4>
                                </div>
                                <div className="you__input">
                                    <label className="name__icon">
                                        <i className="fa-solid fa-circle-user"></i>
                                    </label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="input" name="name" placeholder="Имя" type="text" required />
                                </div>
                                <div className="you__input">
                                    <label className="name__icon">
                                        <i className="fa-solid fa-tablet"></i>
                                    </label>
                                    <input value={subject} onChange={(e) => setSubject(e.target.value)} className="input" name="subject" placeholder="Тема" type="text" required />
                                </div>
                                <div className="you__input">
                                    <label className="name__icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" name="email" placeholder="E-mail" type="text" required />
                                </div>
                                <div className="you__message">
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="input" name="message" placeholder="Твоё сообщение" required></textarea>
                                </div>

                                <div className="contact__footer">
                                    <div className="contact__btn">
                                        <button className="submit" name="submit" type="Submit">Отправить</button>
                                    </div>
                                </div>
                            </form>

                            <div className="contact__me">
                                <div className="me__title">
                                    <h4>Адрес</h4>
                                </div>
                                <div className="me__text">
                                    <p>{person.address.country}, {person.address.city}, {person.address.street}, {person.address.flat}</p>
                                </div>
                                <div className="me__title">
                                    <h4>Телефон</h4>
                                </div>
                                <div className="me__text">
                                    <a href={tel}>{person.numberTelephone}</a>
                                </div>
                                <div className="me__title">
                                    <h4>E-mail</h4>
                                </div>
                                <div className="me__text">
                                    <a href={eMail}>{person.eMail}</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <MapYandex person={person} idPerson={idPerson}/>

                    {/* <div className="section__map">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15c7b9b7d5ff989befa89c24f2764a3a38bb4e6f9c2d0f08a895be3cb1fb1373&amp;source=constructor" frameBorder="0"></iframe>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default Contact;