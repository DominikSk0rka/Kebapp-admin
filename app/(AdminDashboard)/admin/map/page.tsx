"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import SearchKebab from "@/app/components/SearchKebab";
import { kebabs } from "@/app/lib/data";
import L from "leaflet";

const LeafletMap = dynamic(() => import("@/app/components/LeafMap"), {
  ssr: false,
});

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);

  const handleKebabClick = (position: [number, number]) => {
    if (mapRef.current) {
      mapRef.current.setView(position, 18);
    }
  };

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col">
        <div className="w-full h-[1000px]">
          <LeafletMap mapRef={mapRef} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col bg-gray-50">
        <div className="flex flex-row justify-center gap-4 pb-10">
          <div className="flex flex-col justify-center items-center">
            <p>Active</p>
            <p>10</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Planned</p>
            <p>2</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Inactive</p>
            <p>12</p>
          </div>
        </div>
        {kebabs.map((kebab, index) => (
          <SearchKebab
            key={index}
            name={kebab.name}
            position={kebab.position as [number, number]}
            onClick={() => handleKebabClick(kebab.position as [number, number])}
          />
        ))}
      </div>
    </div>
  );
};

export default Map;
