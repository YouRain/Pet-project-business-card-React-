import React, { useEffect, useRef } from "react";
import { IPersonInfo } from "~/types/interface";
import SlideList from "./SlideList";

interface ISlider {
    setIntroElem: (value: HTMLDivElement) => void
    setIdPerson: (value: (number) | ((value: number) => void)) => void
    idPerson: number
    persons: IPersonInfo[]
}

function Slider({ setIntroElem, setIdPerson, idPerson, persons }: ISlider) {
    const refIntro = useRef<HTMLDivElement>(null);

    useEffect(() => {
        refIntro && setIntroElem(refIntro.current)
    }, [])

    function changeIdPerson (e: React.MouseEvent<HTMLAnchorElement>, direction: number = 1) {
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
            <a className="person__btn person__btn--prev" href="#" onClick={(e) => changeIdPerson(e, -1)}></a>
            <a className="person__btn person__btn--next" href="#" onClick={(e) => changeIdPerson(e, 1)}></a>
            {persons.map((prop) =>
                <SlideList key={prop.id} person={prop} idPerson={idPerson} />
            )}
        </div>
    )
}

export default Slider;