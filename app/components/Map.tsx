"use client"
import L from "leaflet"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import markerIcon2x from "leaflet/dist/images/m-i-2x.png"
import markerIcon from "leaflet/dist/images/m-i.png"
import markerShadow from "leaflet/dist/images/m-s.png"

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    iconShadow: markerShadow.src
})

interface MapProps {
    center?: number[]
}

const Map: React.FC<MapProps> = ({center}) => {
    return (
        <MapContainer 
        center={ center as L.LatLngExpression || [30.375320, 69.345116] }
        zoom={ center ? 4 : 3 }
        scrollWheelZoom={false}
        className="h-[35vh] rounded-lg"
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {center && (
                <Marker 
                position={center as L.LatLngExpression}
                />
            )}
        </MapContainer>
    )
}
export default Map