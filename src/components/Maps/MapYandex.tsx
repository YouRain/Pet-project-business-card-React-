import React, { useEffect, useMemo, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { IPersonInfo } from "../../types/interface";
import FetchMap from "./FetchMap";
import Loader from "../Loader/Loader";

interface IMapYandex {
    person: IPersonInfo
    idPerson: number
    cl: string
}

function MapYandex({ person, idPerson, cl }: IMapYandex) {
    const [ymap, setYmap] = useState(null)

    const [coord, setCoord] = useState({
        center: [null, null],
        zoom: 15,
        // controls: ['zoomControl', "fullscreenControl"],
        controls: ['zoomControl'],
    })

    const loc = useMemo(() => {
        let localLocation = person.address.country + " " + person.address.city + " " + person.address.street + " " + person.address.flat;
        return localLocation;
    }, [idPerson])

    useEffect(() => {

        async function geocode(ymaps: any) {
            let response = await FetchMap.getMap(ymaps, loc)
            setCoord({ ...coord, center: response.geoObjects.get(0).geometry.getCoordinates() })
        }

        if (ymap !== null) {
            geocode(ymap);
        }

        return () => { }

    }, [idPerson])

    async function geocode(ymaps: any) {
        let response = await FetchMap.getMap(ymaps, loc)
        setCoord({ ...coord, center: response.geoObjects.get(0).geometry.getCoordinates() })
    }

    return (
        <YMaps
            query={{
                apikey: "6e66d2cc-e230-48d1-80e5-04dd1dca8719",
            }}
        >
            <div className={cl}>
                {coord.center[0] === null
                    ? <>
                        <Loader />
                        <Map
                            state={coord}
                            style={{ width: "100%", height: "100%", display: "none" }}
                            modules={['control.ZoomControl', "control.FullscreenControl", "geocode"]}
                            onLoad={ymaps => {
                                setYmap(ymaps)
                                geocode(ymaps)
                            }}
                        />
                    </>
                    : <Map
                        state={coord}
                        style={{ width: "100%", height: "100%" }}
                        modules={['control.ZoomControl', "geocode"]}
                        onLoad={ymaps => geocode(ymaps)}
                    >
                        <Placemark geometry={coord.center} />
                    </Map>
                }
            </div>
        </YMaps>
    )
}

export default MapYandex;