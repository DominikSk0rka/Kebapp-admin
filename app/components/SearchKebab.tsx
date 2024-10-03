import React from "react";
import Button from "./Button";

interface KebabProps {
  name: string;
  position: [number, number];
  onClick: () => void;
}

const SearchKebab: React.FC<KebabProps> = ({ name, position, onClick }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="p-8 border border-slate-300 rounded-lg bg-white">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>
          Wspórzędne: {position[0]}, {position[1]}
        </p>
        <div className="w-1/2">
          <Button label={"Znajdz kebaba"} onClick={onClick} outline />
        </div>
      </div>
    </div>
  );
};

export default SearchKebab;
