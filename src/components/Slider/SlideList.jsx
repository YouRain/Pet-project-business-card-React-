import React from "react";

function SlideList({person, idPerson}) {
    return (
        <div className="person__item" style={{ transform: `translateX(-${idPerson * 100}%)` }}>
            <img className="intro__img scale" src={person.imageFace} alt="#" />
            <h1 className="intro__title">{person.name} {person.surname}</h1>
            <h2 className="intro__subtitle">{person.currentJobTitle} </h2>
        </div>
    )
}

export default SlideList;