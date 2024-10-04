import React from "react";
import Button from "./Button";

interface MessagesProps {
  id: string;
  description: string;
  onClick: () => void;
}

const Messages: React.FC<MessagesProps> = ({ id, description, onClick }) => {
  return (
    <div className="flex flex-row bg-white border border-gray-400 rounded-xl w-full max-w-sm h-64">
      <div className="w-1/4 mt-2 p-4 flex flex-col items-center gap-4 ">
        <p className="text-sm text-gray-500">id: {id}</p>
        <Button label={"Usuń"} onClick={onClick} outline />
      </div>
      <div className="w-px bg-gray-300 mx-2"></div>

      <div className="p-4  max-w-xs h-64 overflow-auto ">
        <h2 className="text-sm font-semibold  text-slate-700">{description}</h2>
      </div>
    </div>
  );
};

export default Messages;
