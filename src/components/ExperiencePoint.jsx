import React, { useEffect, useRef } from "react";

function ExperiencePoint({periodDate, company, postTitle, postText}) {
    const refBox = useRef({});

    useEffect(() => {
        window.addEventListener("scroll", slideBox)
        return () => {
            window.removeEventListener("scroll", slideBox)
        }
    })

    function slideBox() {
        if (document.documentElement.clientHeight > refBox.current.getBoundingClientRect().y) {
            refBox.current.firstElementChild.classList.add("transform");
            refBox.current.lastElementChild.classList.add("transform");
            // console.log(refBox.current)
        };
        if (window.pageYOffset + document.documentElement.clientHeight < refBox.current.offsetTop) {
            refBox.current.firstElementChild.classList.remove("transform");
            refBox.current.lastElementChild.classList.remove("transform");
        };
    }

    return (
        <div className="section__box">
            <div className="section__experience trans" ref={refBox}>
                <div className="experience__period">
                    <div className="period__date">
                        <p>{periodDate}</p>
                    </div>
                    <div className="company">
                        <p>{company}</p>
                    </div>
                </div>

                <div className="experience__post">
                    <div className="post__title">
                        <h2>{postTitle}</h2>
                    </div>
                    <div className="post__text">
                        <p>{postText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePoint;