import React, { useEffect, useRef } from "react";
import SlideList from "./SlideList";

function Slider({ person, setIntroElem, setIdPerson, idPerson, persons }) {
    const refIntro = useRef({});

    useEffect(() => {
        setIntroElem(refIntro.current)
    }, [])

    const changeIdPerson = (direction = 1, e) => {
        e.preventDefault();
        let localIdPerson = 0;

        if (idPerson + direction < 0) {
            localIdPerson = persons.length - 1;
        } else if (idPerson + direction == persons.length) {
            localIdPerson = 0;
        } else {
            localIdPerson = idPerson + direction;
        }
        // localIdPerson = (idPerson + direction) % persons.length;
        setIdPerson(localIdPerson);
    };

    return (
        <div className="intro__person" ref={refIntro} >
            <a className="person__btn person__btn--prev" href="#" onClick={(e) => changeIdPerson(-1, e)}></a>
            <a className="person__btn person__btn--next" href="#" onClick={(e) => changeIdPerson(1, e)}></a>
            {persons.map((prop) =>
                <SlideList key={prop.id} person={prop} idPerson={idPerson} />
            )}
        </div>
    )
}

export default Slider;