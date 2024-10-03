"use client";
import React, { useEffect, forwardRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { kebabs } from "../lib/data";

interface LeafletMapProps {
  mapRef: React.RefObject<any>;
}

const LeafletMap = forwardRef<HTMLDivElement, LeafletMapProps>(
  ({ mapRef }, ref) => {
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

        {kebabs.map((kebab, index) => (
          <Marker key={index} position={kebab.position as L.LatLngTuple}>
            <Popup>
              {kebab.name}, {kebab.position[0]} {kebab.position[1]}
              <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
);

export default LeafletMap;
