import React, { useEffect, useLayoutEffect, useRef } from "react";
import { IPersonInfo } from "~/types/interface";
import Slider from "./Slider/Slider";

interface IMyIntro {
    person: IPersonInfo
    setIntroElem: (value: HTMLDivElement) => void
    setIdPerson: (value: (number) | ((value: number) => void)) => void
    idPerson: number
    setVisible: (value: boolean) => void
    persons: IPersonInfo[]
    setPersons: (value: IPersonInfo[]) => void
    emptyPerson: IPersonInfo
    setNewPerson: (value: IPersonInfo) => void
    setToggleBtn: (value: boolean) => void
}

function MyIntro({ person, setIntroElem, setIdPerson, idPerson, setVisible, persons, setPersons, emptyPerson, setNewPerson, setToggleBtn }: IMyIntro) {

    const removePerson: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        if (persons.length == 1) return;
        if (idPerson == persons.length - 1) {
            setIdPerson(idPerson => idPerson - 1)
        }
        setPersons(persons.filter((item, index) => index !== idPerson))
    }

    const addPerson: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        setNewPerson(emptyPerson);
        setVisible(true);
        setToggleBtn(true)
    }

    const changePerson: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        setNewPerson(person);
        setVisible(true);
        setToggleBtn(false)
    }

    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">

                    <Slider persons={persons} setIntroElem={setIntroElem} setIdPerson={setIdPerson} idPerson={idPerson} />

                    <div className="btn">
                        <div>
                            <a href="#" className="btn__item" onClick={addPerson} >Добавить пользователя</a>
                            <a href="#" className="btn__item" onClick={changePerson} style={{ marginTop: 10 }}>Изменить данные</a>
                            <a href="#" className="btn__item" onClick={removePerson} style={{ marginTop: 10 }}>Удалить пользователя</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyIntro;