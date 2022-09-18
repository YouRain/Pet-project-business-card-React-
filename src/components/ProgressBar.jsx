import React, { useEffect, useState } from "react";

function ProgressBar({ soft, progress, refSkills }) {
    let [dynamicProgress, setDynamicProgress] = useState(0);
    let toggle = false;

    useEffect(() => {
        window.addEventListener("scroll", scrollProgress)
        return () => {
            window.removeEventListener("scroll", scrollProgress)
        }
    }, [])

    function scrollProgress() {
        if (document.documentElement.clientHeight < refSkills.current.getBoundingClientRect().y) {
            toggle = false;
            setDynamicProgress(0);
        }
        if (document.documentElement.clientHeight > refSkills.current.getBoundingClientRect().y) {
            if (toggle === false) {
                let localCount = 0;
                let intervalPerc = setInterval(() => {
                    setDynamicProgress(dynamicProgress => dynamicProgress + 1);
                    localCount++; //из-за замыкания
                    if (localCount >= progress) {
                        clearInterval(intervalPerc);
                    }
                }, 480 / progress);
                toggle = !toggle;
            }
        }
    }

    return (
        <div className="skills__item">
            <div className="skills__title">
                <div className="skills__name">{soft}</div>
                <div className="skills__percent"><span>{dynamicProgress}</span>%</div>
            </div>
            <div className="skills__progress">
                <progress className="progress" min="0" max="100" value={dynamicProgress}></progress>
            </div>
        </div>
    )
}

export default ProgressBar;