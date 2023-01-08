export default function countAge(date: string) {
    const dateSplit: string = date.split(".").reverse().join("-");
    const age: number = Date.now() - +new Date(dateSplit);
    const fullYear = new Date(age).getFullYear() - 1970
    if (isNaN(fullYear)) return "\u2013"
    return fullYear;
}