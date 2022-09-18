import React, { createRef, useEffect, useRef, useState } from "react";

function EducationBox({ periodDate, educationPost, educationPostTitle, institution, educationText }) {
    const refBox = useRef({});

    useEffect(() => {
        window.addEventListener("scroll", slideBoxEducation)
        return () => {
            window.removeEventListener("scroll", slideBoxEducation)
        }
    }, [])

    function slideBoxEducation() {
        if (document.documentElement.clientHeight > refBox.current.getBoundingClientRect().top) {
            refBox.current.firstElementChild.classList.add("transform");
            refBox.current.lastElementChild.classList.add("transform");
        };
        if (window.pageYOffset + document.documentElement.clientHeight < refBox.current.offsetTop) {
            refBox.current.firstElementChild.classList.remove("transform");
            refBox.current.lastElementChild.classList.remove("transform");
        };
    }

    return (
        <div className="section__box">
            <div className="section__education trans" id="target" ref={refBox}>

                <div className="education__period">
                    <div className="education__date">
                        <p>{periodDate}</p>
                    </div>
                    <div className="education__date">
                        <p>{educationPost}</p>
                    </div>
                </div>

                <div className="education__post">
                    <div className="education__post__title">
                        <h2>{educationPostTitle}</h2>
                        <h3>{institution}</h3>
                    </div>
                    <div className="education__post__text">
                        <p>{educationText}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EducationBox;