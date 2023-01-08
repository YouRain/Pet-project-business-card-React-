import React, { useEffect, useState } from "react";

interface IProgressBar {
    soft: string
    progress: number | string
    refSkills: React.MutableRefObject<HTMLDivElement> | null
}

function ProgressBar({ soft, progress, refSkills }: IProgressBar) {
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
                }, 480 / +progress);
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
                <progress className="progress" max="100" value={dynamicProgress}></progress>
            </div>
        </div>
    )
}

export default ProgressBar;