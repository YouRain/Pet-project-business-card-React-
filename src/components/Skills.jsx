import React, { useRef } from "react";
import ProgressBar from "./ProgressBar";

function Skills({ person }) {
    const refSkills = useRef({});

    return (
        <section className="section">
            <div className="container">

                <div className="section__header section__header--center link__skills">
                    <h3 className="section__title">Профессиональные умения</h3>
                </div>

                <div className="section__box">
                    <div className="section__skills" ref={refSkills}>

                        {person.skills &&
                            person.skills.map((prop) =>
                                <ProgressBar refSkills={refSkills} key={prop.soft} soft={prop.soft} progress={prop.progress} />
                            )
                        }

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Skills;