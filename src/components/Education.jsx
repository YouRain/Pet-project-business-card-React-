import React, { useRef } from "react";
import EducationBox from "./EducationBox";

function Education({ person }) {
    return (
        <section className="section">
            <div className="container">

                <div className="section__header section__header--center">
                    <h3 className="section__title">Образование</h3>
                </div>

                {person.education &&
                    person.education.map((prop) =>
                                <EducationBox key={prop.periodDate} periodDate={prop.periodDate} educationPost={prop.educationPost} educationPostTitle={prop.educationPostTitle} institution={prop.institution} educationText={prop.educationText} />
                    )
                }


            </div>
        </section>
    )
}

export default Education;