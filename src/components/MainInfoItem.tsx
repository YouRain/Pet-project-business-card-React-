import React from "react";
import BoxContent from "./BoxContent";

interface IMainInfoItem {
    infoTitle: string
    infoText: string | number
}

function MainInfoItem({ infoTitle, infoText }: IMainInfoItem) {

    if (infoText === "") {
        infoText = "\u2013"
    }

    return (
        <div className="info__item">
            <BoxContent class_div="info__title" content_h4={infoTitle} />
            <BoxContent class_div="info__text" content_p={infoText} />
        </div>
    )
}

export default MainInfoItem;