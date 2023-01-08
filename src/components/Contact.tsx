import React, { useEffect, useRef, useState, useMemo } from "react";
import { IPersonInfo } from "../types/interface";
import { InputContact } from "./InputContact";
import MapYandex from "./Maps/MapYandex";
import { TextAreaContact } from "./TextAreaContact";
import slideEffectWrapper from "./SupportFunction/slideEffect";

interface IContact {
    person: IPersonInfo
    idPerson: number
}

function Contact({ person, idPerson }: IContact) {
    const refBox = useRef<HTMLDivElement>(null);
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [firstChildClass, setFirstChildClass] = useState("section__contact")
    const [lastChildClass, setLastChildClass] = useState("section__map")

    useEffect(() => {
        window.addEventListener("scroll", slideEffectWrapper(refBox, setFirstChildClass, setLastChildClass, firstChildClass, lastChildClass))
        return () => {
            window.removeEventListener("scroll", slideEffectWrapper(refBox, setFirstChildClass, setLastChildClass, firstChildClass, lastChildClass))
        }
    }, []);

    let address = useMemo(() => {
        return Object.values(person.address).filter(item => item.trim().length).map(item => item.trim()).join(", ");
    }, [person.address])

    const tel = "tel:" + person.numberTelephone;
    const eMail = "mailto:" + person.eMail;

    return (
        <section className="section">
            <div className="container">
                <div className="section__connect trans" ref={refBox}>

                    <div className={firstChildClass}>
                        <div className="contact__header">
                            <h3>Свяжись со мной</h3>
                        </div>

                        <div className="contact__body">
                            <form onSubmit={(e) => e.preventDefault()} action="/" method="post" className="contact__you">
                                <div className="you__title">
                                    <h4>Не стесняйтесь обращаться</h4>
                                </div>
                                <InputContact clIcon="fa-solid fa-circle-user" value={name} setValue={setName} name="name" placeholder="Имя" />
                                <InputContact clIcon="fa-solid fa-tablet" value={subject} setValue={setSubject} name="subject" placeholder="Тема" />
                                <InputContact clIcon="fa-solid fa-envelope" value={email} setValue={setEmail} name="email" placeholder="E-mail" />
                                <TextAreaContact value={message} setValue={setMessage} name="message" placeholder="Твоё сообщение" />

                                <div className="contact__footer">
                                    <div className="contact__btn">
                                        <button className="submit" name="submit" type="submit">Отправить</button>
                                    </div>
                                </div>
                            </form>

                            <div className="contact__me">
                                <div className="me__title">
                                    <h4>Адрес</h4>
                                </div>
                                <div className="me__text">
                                    <p>{address}</p>
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

                    <MapYandex person={person} idPerson={idPerson} cl={lastChildClass}/>

                    {/* <div className="section__map">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15c7b9b7d5ff989befa89c24f2764a3a38bb4e6f9c2d0f08a895be3cb1fb1373&amp;source=constructor" frameBorder="0"></iframe>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default Contact;