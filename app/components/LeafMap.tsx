"use client";
import React, { useEffect, forwardRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface Kebab {
  id: number;
  name: string;
  address: string;
  coordinatesX: number;
  coordinatesY: number;
  status: string;
}

interface LeafletMapProps {
  mapRef: React.RefObject<any>;
  kebabs: Kebab[];
}

const LeafletMap = forwardRef<HTMLDivElement, LeafletMapProps>(
  ({ mapRef, kebabs }, ref) => {
    useEffect(() => {
      const DefaultIcon = L.icon({
        iconUrl: "/kebab.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "/kebab.png",
        shadowSize: [41, 41],
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    }, []);

    return (
      <MapContainer
        center={[51.2055, 16.1663]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {kebabs.map((kebab) => (
          <Marker
            key={kebab.id}
            position={[kebab.coordinatesX, kebab.coordinatesY] as L.LatLngTuple}
          >
            <Popup>
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-semibold text-slate-700">
                  {kebab.name}
                </p>
                <p>{kebab.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
);

export default LeafletMap;
