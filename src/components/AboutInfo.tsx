import React from "react";
import { useMemo } from "react";
import { IPersonInfo } from "../types/interface";
import MainInfoItem from "./MainInfoItem";
import countAge from "./SupportFunction/countAge";

interface IAboutInfo {
    person: IPersonInfo
}

function AboutInfo({ person }: IAboutInfo) {

    let age = useMemo(() => {
        if (person.birthDay === undefined) return
        return countAge(person.birthDay)
    }, [person.birthDay])

    let address = useMemo(() => {
        return Object.values(person.address).filter(item => item.trim().length).map(item => item.trim()).join(", ");
    }, [person.address])

    if (person.aboutMe === "") {
        person.aboutMe = "\u2013"
    }

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
                            <MainInfoItem infoTitle="Возраст" infoText={age} />
                            <MainInfoItem infoTitle="E-mail" infoText={person.eMail} />
                            <MainInfoItem infoTitle="Телефон" infoText={person.numberTelephone} />
                            <MainInfoItem infoTitle="Адрес" infoText={address} />
                            <MainInfoItem infoTitle="Языки" infoText={person.language} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutInfo;