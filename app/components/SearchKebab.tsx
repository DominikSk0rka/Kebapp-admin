import React from "react";
import Button from "./Button";

interface KebabProps {
  name: string;
  address: string;
  status: string;
  position: [number, number];

  onClick: () => void;
}

const SearchKebab: React.FC<KebabProps> = ({
  name,
  position,
  onClick,
  address,
  status,
}) => {
  let translatedStatus = "";
  let statusColor = "";

  if (status === "inactive") {
    translatedStatus = "Zamknięte";
    statusColor = "bg-red-200";
  } else if (status === "active") {
    translatedStatus = "Aktywne";
    statusColor = "bg-green-200";
  } else if (status === "planned") {
    translatedStatus = "W planach";
    statusColor = "bg-sky-200";
  }

  return (
    <div className="flex flex-col w-full border border-slate-300 rounded-lg bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">{name}</h2>
          {translatedStatus && (
            <h3
              className={`p-1 ml-4 rounded-2xl w-24 flex justify-center items-center ${statusColor}`}
            >
              {translatedStatus}
            </h3>
          )}
        </div>

        <p className="mt-2">{address}</p>
        <div className="w-1/2 mt-2">
          <Button label={"Znajdz kebaba"} onClick={onClick} outline />
        </div>
      </div>
    </div>
  );
};

export default SearchKebab;
