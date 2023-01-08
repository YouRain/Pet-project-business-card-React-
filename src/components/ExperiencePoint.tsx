import React, { useEffect, useRef, useState } from "react";
import { IExperience } from "../types/interface";
import BoxContent from "./BoxContent";
import slideEffectWrapper from "./SupportFunction/slideEffect";

function ExperiencePoint({ periodDate, company, postTitle, postText }: IExperience) {
    const refBox = useRef<HTMLDivElement>(null);
    const [firstChildClass, setFirstChildClass] = useState("experience__period")
    const [lastChildClass, setLastChildClass] = useState("experience__post")

    useEffect(() => {
        window.addEventListener("scroll", slideEffectWrapper(refBox, setFirstChildClass, setLastChildClass, firstChildClass, lastChildClass))
        return () => {
            window.removeEventListener("scroll", slideEffectWrapper(refBox, setFirstChildClass, setLastChildClass, firstChildClass, lastChildClass))
        }
    }, []);

    return (
        <div className="section__box">
            <div className="section__experience trans" ref={refBox}>

                <div className={firstChildClass}>
                    <BoxContent class_div="period__date" content_p={periodDate} />
                    <BoxContent class_div="company" content_p={company} />
                </div>

                <div className={lastChildClass}>
                    <BoxContent class_div="post__title" content_h2={postTitle} />
                    <BoxContent class_div="post__text" content_p={postText} />
                </div>
                
            </div>
        </div>
    )
}

export default ExperiencePoint;