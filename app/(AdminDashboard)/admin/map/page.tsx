"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import SearchKebab from "@/app/components/SearchKebab";
import L from "leaflet";

interface Kebab {
  id: number;
  name: string;
  address: string;
  coordinatesX: number;
  coordinatesY: number;
  status: string;
}

const LeafletMap = dynamic(() => import("@/app/components/LeafMap"), {
  ssr: false,
});

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [kebabs, setKebabs] = useState<Kebab[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleKebabClick = (position: [number, number]) => {
    if (mapRef.current) {
      mapRef.current.setView(position, 18);
    }
  };

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status);
  };

  useEffect(() => {
    const fetchKebabs = async () => {
      try {
        const response = await fetch("https://kebapp.bity24h.pl/api/kebabs");
        const data = await response.json();
        console.log(data);
        setKebabs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchKebabs();
  }, []);

  // Filter kebabs based on the selected status
  const filteredKebabs = selectedStatus
    ? kebabs.filter((kebab) => kebab.status === selectedStatus)
    : kebabs;

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row mb-20">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col">
        <div className="w-full h-[1000px]">
          <LeafletMap mapRef={mapRef} kebabs={kebabs} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col bg-gray-50">
        <div className="flex flex-row justify-center gap-4 pb-5">
          <div
            className="flex flex-col justify-center items-center bg-white h-20 w-24 rounded-xl border border-slate-400 cursor-pointer transition hover:scale-105"
            onClick={() => handleStatusClick("active")}
          >
            <p className="bg-green-200 p-1 rounded-2xl w-20 flex justify-center items-center mb-2 font-semibold">
              Aktywne
            </p>
            <p className="text-xl font-semibold text-slate-500">
              {kebabs.filter((kebab) => kebab.status === "active").length}
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center bg-white h-20 w-48 rounded-xl border border-slate-400 cursor-pointer transition hover:scale-105"
            onClick={() => handleStatusClick("planned")}
          >
            <p className="bg-sky-200 p-1 rounded-2xl w-28 flex justify-center items-center mb-2 font-semibold">
              W planach
            </p>
            <p className="text-xl font-semibold text-slate-500">
              {kebabs.filter((kebab) => kebab.status === "planned").length}
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center bg-white h-20 w-24 rounded-xl border border-slate-400 cursor-pointer transition hover:scale-105"
            onClick={() => handleStatusClick("inactive")}
          >
            <p className="bg-rose-200 p-1 rounded-2xl w-20 flex justify-center items-center mb-2 font-semibold">
              Zamknięte
            </p>
            <p className="text-xl font-semibold text-slate-500">
              {kebabs.filter((kebab) => kebab.status === "inactive").length}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto h-[900px]">
          {filteredKebabs.map((kebab) => (
            <SearchKebab
              key={kebab.id}
              address={kebab.address}
              status={kebab.status}
              name={kebab.name}
              position={
                [kebab.coordinatesX, kebab.coordinatesY] as [number, number]
              }
              onClick={() =>
                handleKebabClick([kebab.coordinatesX, kebab.coordinatesY] as [
                  number,
                  number
                ])
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
