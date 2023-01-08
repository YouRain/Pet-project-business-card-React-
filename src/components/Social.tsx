import React from "react";
import { IPersonInfo } from "~/types/interface";

interface ISocial {
    person: IPersonInfo
}

function Social({ person }: ISocial) {
    return (
        <div className="social link__about" >
            <div className="container">
                <div className="social__inner">
                    <a className="social__item" href={person.linkGitHub} target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a className="social__item" href={person.linkLinkedIn} target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a className="social__item" href={person.linkTwitter} target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social;