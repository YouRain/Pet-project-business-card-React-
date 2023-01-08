import React, { useEffect, useRef, useState } from "react";
import { IEducation } from "../types/interface";
import BoxContent from "./BoxContent";
import slideEffectWrapper from "./SupportFunction/slideEffect";

function EducationBox({ periodDate, educationPost, educationPostTitle, institution, educationText }: IEducation) {
    const refBox = useRef<HTMLDivElement>(null);
    const [firstChildClass, setFirstChildClass] = useState("education__period")
    const [lastChildClass, setLastChildClass] = useState("education__post")

    useEffect(() => {
        window.addEventListener("scroll", slideEffectWrapper(refBox, setFirstChildClass, setLastChildClass, firstChildClass, lastChildClass))
        return () => {
            window.removeEventListener("scroll", slideEffectWrapper(refBox, setFirstChildClass, setLastChildClass, firstChildClass, lastChildClass))
        }
    }, []);

    return (
        <div className="section__box">
            <div className="section__education trans" id="target" ref={refBox}>

                <div className={firstChildClass}>
                    <BoxContent class_div="education__date" content_p={periodDate} />
                    <BoxContent class_div="education__date" content_p={educationPost} />
                </div>

                <div className={lastChildClass}>
                    <BoxContent class_div="education__post__title" content_h2={educationPostTitle} content_h3={institution} />
                    <BoxContent class_div="education__post__text" content_p={educationText} />
                </div>

            </div>
        </div>
    )
}

export default EducationBox;