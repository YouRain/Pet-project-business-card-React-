import React from "react";
import ExperiencePoint from "./ExperiencePoint";

function Experience({ person }) {
    return (
        <section className="section">
            <div className="container">

                <div className="section__header section__header--center link__experience">
                    <h3 className="section__title">Стаж</h3>
                </div>

                {person.experience &&
                    person.experience.map((prop) =>
                        <ExperiencePoint key={prop.periodDate} periodDate={prop.periodDate} company={prop.company} postTitle={prop.postTitle} postText={prop.postText} />
                    )
                }

            </div>
        </section>
    )
}

export default Experience;