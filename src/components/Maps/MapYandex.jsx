import React, { useEffect, useMemo, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function MapYandex({ person, idPerson }) {
    const [ymap, setYmap] = useState(null)

    const [coord, setCoord] = useState({
        center: [null, null],
        zoom: 15,
        controls: ['zoomControl', "fullscreenControl"],
    })

    const loc = useMemo(() => {
        let localLocation = person.address.country + " " + person.address.city + " " + person.address.street + " " + person.address.flat;
        return localLocation;
    }, [idPerson])

    useEffect(() => {
        if (ymap !== null) {
            geocode(ymap)
        }
    }, [idPerson])

    function geocode(ymaps) {
        ymaps.geocode(loc).then(response => setCoord({ ...coord, center: response.geoObjects.get(0).geometry.getCoordinates() }))
    }

    return (
        <YMaps
            query={{
                apikey: "6e66d2cc-e230-48d1-80e5-04dd1dca8719",
            }}
        >
            <div className="section__map">
                {coord.center[0] === null
                    ? <Map
                        state={coord}
                        style={{ width: "100%", height: "100%", display: "none" }}
                        modules={['control.ZoomControl', "control.FullscreenControl", "geocode"]}
                        onLoad={ymaps => {
                            setYmap(ymaps)
                            geocode(ymaps)
                        }}
                    />
                    : <Map
                        state={coord}
                        style={{ width: "100%", height: "100%" }}
                        modules={['control.ZoomControl', "control.FullscreenControl", "geocode"]}
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