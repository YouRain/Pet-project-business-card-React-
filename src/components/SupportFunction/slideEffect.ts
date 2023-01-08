export default function slideEffectWrapper(refference: null | React.MutableRefObject<HTMLDivElement>, callbackFirst: (prop: string) => void, callbackTwo: (prop: string) => void, classNameOne: string, classNameTwo: string) {
    return function slideEffect() {
        if (refference.current) {
            if (document.documentElement.clientHeight > refference.current.getBoundingClientRect().y) {
                callbackFirst(`${classNameOne} transform`);
                callbackTwo(`${classNameTwo} transform`);
            };
            if (window.pageYOffset + document.documentElement.clientHeight < refference.current.offsetTop) {
                callbackFirst(`${classNameOne}`);
                callbackTwo(`${classNameTwo}`);
            };
        }
    }
}