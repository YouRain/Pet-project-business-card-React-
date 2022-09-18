import React from "react";
import { useMemo } from "react";

function AboutInfo({ person }) {

    let age = useMemo(() => {
        if (person.birthDay === undefined) return
        const dateSplit = person.birthDay.split(".").reverse().join("-");
        const age = new Date().getFullYear() - new Date(dateSplit).getFullYear();
        return age;
    }, [person.birthDay])

    let address = useMemo(() => {
        return Object.values(person.address).filter(item => item.trim().length).map(item => item.trim()).join(", ");
    }, [person.address])

    return (
        <section className="section">
            <div className="container">
                <div className="section__box section__box--about">

                    <div className="section__about">
                        <div className="section__header">
                            <h3 className="section__title">Обо мне</h3>
                        </div>
                        <div className="about">
                            <p>{person.aboutMe}</p>
                        </div>
                    </div>

                    <div className="section__info">
                        <div className="section__header">
                            <h3 className="section__title">Основная информация</h3>
                        </div>
                        <div className="info">
                            <div className="info__item">
                                <div className="info__title">
                                    <h4>Возраст:</h4>
                                </div>
                                <div className="info__text">
                                    {/* <p>{solveAge(person.birthDay)}</p> */}
                                    <p>{age}</p>
                                </div>
                            </div>
                            <div className="info__item">
                                <div className="info__title">
                                    <h4>E-mail:</h4>
                                </div>
                                <div className="info__text">
                                    <p>{person.eMail}</p>
                                </div>
                            </div>
                            <div className="info__item">
                                <div className="info__title">
                                    <h4>Телефон:</h4>
                                </div>
                                <div className="info__text">
                                    <p>{person.numberTelephone}</p>
                                </div>
                            </div>
                            <div className="info__item">
                                <div className="info__title">
                                    <h4>Адрес:</h4>
                                </div>
                                <div className="info__text">
                                    <p>{address}</p>
                                </div>
                            </div>
                            <div className="info__item">
                                <div className="info__title">
                                    <h4>Языки:</h4>
                                </div>
                                <div className="info__text">
                                    <p>{person.language}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutInfo;