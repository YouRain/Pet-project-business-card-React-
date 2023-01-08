export default class FetchMap {
    static async getMap(ymaps: any, loc: string) {
        let response = await ymaps.geocode(loc)
        return response
    }
}