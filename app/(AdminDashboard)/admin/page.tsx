"use client";
import Messages from "@/app/components/Messages";
import { messagesData } from "@/app/lib/messages";
import toast from "react-hot-toast";

const AdminPage = () => {
  const handleDelete = () => {
    toast.success("Usunięto");
  };
  return (
    <div className="p-4 flex gap-4 flex-col ">
      <div className="w-full flex flex-col gap-8 items-center">
        {/* TOP */}
        <div className="flex gap-4 justify-between flex-wrap">
          <h1 className="font-semibold text-4xl text-slate-700">
            Strona Admina
          </h1>
        </div>
        <hr className="my-4 w-full border-t border-gray-300 " />
        <h1 className="font-semibold text-2xl text-slate-700">Zgłoszenia</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {messagesData.map((message) => (
            <Messages
              description={message.description}
              id={message.id}
              onClick={() => handleDelete()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
