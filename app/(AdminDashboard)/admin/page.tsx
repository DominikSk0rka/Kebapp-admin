"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Messages from "@/app/components/Messages";
import Cookies from "js-cookie";
import Pagination from "@/app/components/Pagination";

const ManageMessages: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchMessages = async (page: number) => {
      const token = Cookies.get("token");

      try {
        const response = await axios.get(
          `https://kebapp.wheelwallet.cloud/api/admin-messages?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && Array.isArray(response.data.data)) {
          setMessages(response.data.data);
          setTotalPages(response.data.meta.last_page);
        } else {
          toast.error("Złe dane z API.");
        }
      } catch (error) {
        console.error("Błąd podczas pobierania", error);
        toast.error("Nie można załadować wiadomości");
      }
    };

    fetchMessages(currentPage);
  }, [currentPage]);

  const deleteMessage = async (id: number) => {
    const token = Cookies.get("token");

    try {
      await axios.delete(
        `https://kebapp.wheelwallet.cloud/api/admin-messages/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)
      );
      toast.success("Wiadomość została pomyślnie usunięta.");
    } catch (error) {
      console.error("Błąd podczas usuwania wiadomości:", error);
      toast.error("Nie można usunąć wiadomości, spróbuj ponownie.");
    }
  };

  const toggleAcceptance = async (id: number, currentAcceptance: boolean) => {
    const token = Cookies.get("token");

    try {
      const response = await axios.post(
        `https://kebapp.wheelwallet.cloud/api/admin-messages/${id}/accept`,
        { id: id, isAccepted: !currentAcceptance },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);

      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === id
            ? { ...message, isAccepted: !currentAcceptance }
            : message
        )
      );
      toast.success("Stan został zaktualizowany.");
    } catch (error) {
      console.error("Błąd podczas aktualizacji stanu", error);
      toast.error("Błąd w próbie zmiany stanu");
    }
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-10">
      <h1 className="text-lg font-semibold">Zarządzaj Wiadomościami</h1>
      <div className="flex flex-wrap">
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => (
            <Messages
              key={message.id}
              id={message.id}
              description={message.text}
              timeMessage={message.timeMessage}
              isAccepted={message.isAccepted}
              onClick={() => deleteMessage(message.id)}
              onToggleAcceptance={() =>
                toggleAcceptance(message.id, message.isAccepted)
              }
            />
          ))
        ) : (
          <p>Brak wiadomości do wyświetlenia.</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default ManageMessages;
