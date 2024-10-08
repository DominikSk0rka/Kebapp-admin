import React from "react";
import SimpleButton from "./SimpleButton";

interface MessagesProps {
  id: string;
  description: string;
  timeMessage: string;
  isAccepted: boolean;
  onClick: () => void;
  onToggleAcceptance: () => void;
}

const Messages: React.FC<MessagesProps> = ({
  id,
  description,
  timeMessage,
  isAccepted,
  onClick,
  onToggleAcceptance,
}) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto my-4">
      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">ID: {id}</p>
            <p className="text-sm text-gray-600">Czas: {timeMessage}</p>
            <p className="text-sm text-gray-600">
              Akceptacja: {isAccepted ? "Tak" : "Nie"}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col max-h-24">
          <h2 className="text-lg font-semibold text-gray-800 overflow-auto">
            {description}
          </h2>
        </div>

        <div className="mt-4 flex justify-between">
          <div className="flex gap-2">
            <SimpleButton
              label={isAccepted ? "Anuluj" : "Zakceptuj"}
              onClick={onToggleAcceptance}
              className={
                isAccepted
                  ? "bg-red-400 text-white"
                  : "bg-green-500 text-white hover"
              }
            />
            <SimpleButton
              label="Usuń"
              onClick={onClick}
              className="bg-red-600 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
