import React, { useRef } from "react";
import { IPersonInfo } from "~/types/interface";
import BoxContent from "./BoxContent";
import ProgressBar from "./ProgressBar";

interface ISkills {
    person: IPersonInfo
}

function Skills({ person }: ISkills) {
    const refSkills = useRef<HTMLDivElement>(null);

    return (
        <section className="section">
            <div className="container">

                <BoxContent class_div="section__header section__header--center link__skills" class_h3="section__title" content_h3="Профессиональные умения" />

                <div className="section__box">
                    <div className="section__skills" ref={refSkills}>

                        {person.skills &&
                            person.skills.map((prop) =>
                                // prop.soft !== "" && prop.progress !== "" &&
                                <ProgressBar refSkills={refSkills} key={prop.soft + prop.progress} soft={prop.soft} progress={prop.progress} />
                            )
                        }

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Skills;