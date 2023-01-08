import React from "react";
import { IPersonInfo } from "../types/interface";
import BoxContent from "./BoxContent";
import EducationBox from "./EducationBox";

interface IEducation {
    person: IPersonInfo
}

function Education({ person }: IEducation) {
    return (
        <section className="section">
            <div className="container">

                <BoxContent class_div="section__header section__header--center" class_h3="section__title" content_h3="Образование" />

                {person.education &&
                    person.education.map((prop) =>
                        // prop.periodDate !== "" && prop.educationPost !== "" && prop.educationPostTitle !== "" && prop.educationText !== "" &&
                        <EducationBox key={prop.periodDate} periodDate={prop.periodDate} educationPost={prop.educationPost} educationPostTitle={prop.educationPostTitle} institution={prop.institution} educationText={prop.educationText} />
                    )
                }

            </div>
        </section>
    )
}

export default Education;