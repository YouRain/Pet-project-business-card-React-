import React from "react";
import { IPersonInfo } from "../types/interface";
import BoxContent from "./BoxContent";
import ExperiencePoint from "./ExperiencePoint";

interface IExperience {
    person: IPersonInfo
}

function Experience({ person }: IExperience) {
    return (
        <section className="section">
            <div className="container">

                <BoxContent class_div="section__header section__header--center link__experience" class_h3="section__title" content_h3="Стаж" />

                {person.experience &&
                    person.experience.map((prop) =>
                        // prop.periodDate !== "" && prop.periodDate !== "" && prop.company !== "" && prop.postTitle !== "" && prop.postText !== "" &&
                        <ExperiencePoint key={prop.periodDate} periodDate={prop.periodDate} company={prop.company} postTitle={prop.postTitle} postText={prop.postText} />
                    )
                }

            </div>
        </section>
    )
}

export default Experience;