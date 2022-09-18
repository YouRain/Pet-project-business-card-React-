import React, { useEffect, useLayoutEffect, useRef } from "react";
import Slider from "./Slider/Slider";

function MyIntro({ person, setIntroElem, setIdPerson, idPerson, setVisible, persons, setPersons, emptyPerson, setNewPerson, setToggleBtn }) {

    function removePerson(e) {
        e.preventDefault();
        if (persons.length == 1) return;
        // let localPersons = persons.slice();
        // localPersons.splice(idPerson, 1);
        if (idPerson == persons.length - 1) {
            setIdPerson(idPerson => idPerson - 1)
        }
        setPersons(persons.filter((item, index) => index !== idPerson))
        // setPersons(localPersons);
    }

    function addPerson(e) {
        e.preventDefault();
        setNewPerson(emptyPerson);
        setVisible(true);
        setToggleBtn(true)
    }

    function changePerson(e) {
        e.preventDefault();
        setNewPerson(person);
        setVisible(true);
        setToggleBtn(false)
    }

    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">

                    <Slider persons={persons} person={person} setIntroElem={setIntroElem} setIdPerson={setIdPerson} idPerson={idPerson} />

                    <div className="btn">
                        <div>
                            <a href="#" className="btn__item" onClick={addPerson} >Добавить пользователя</a>
                            <a href="#" className="btn__item" onClick={changePerson} style={{marginTop: 10}}>Изменить данные</a>
                            <a href="#" className="btn__item" onClick={removePerson} style={{marginTop: 10}}>Удалить пользователя</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyIntro;

{/* <div className="intro__person">
<div className="person__item">
    <img className="intro__img scale" ref={refIntro} src={person.imageFace} alt="#" />
    <h1 className="intro__title">{person.name} {person.surname}</h1>
    <h2 className="intro__subtitle">{person.currentJobTitle}</h2>
</div>
<div className="person__item">
    <img className="intro__img" src="./image/Face_Ri.jpg" alt="#" />
    <h1 className="intro__title">Ринат Юсупов</h1>
    <h2 className="intro__subtitle">QA automation engineer</h2>
</div>
</div> */}