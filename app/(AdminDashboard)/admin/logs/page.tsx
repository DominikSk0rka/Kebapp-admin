"use client";

import { useEffect, useState } from "react";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import Image from "next/image";

interface Log {
  id: number;
  userName: string;
  method: string;
  actionName: string;
  creationHour: string;
  creationDate: string;
}

const columns = [
  { header: "Nazwa Użytkownika" },
  { header: "Operacja" },
  {
    header: (
      <div className="flex justify-end gap-5 mr-10">
        <span className="hidden md:inline">Metoda</span>
        <span className="mr-2">Godzina</span>
        <span>Data</span>
      </div>
    ),
    className: "text-right",
  },
];

const Logs: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const token = Cookies.get("token");

  useEffect(() => {
    fetchLogs(currentPage);
  }, [currentPage]);

  const fetchLogs = async (page: number) => {
    try {
      const response = await fetch(
        `https://kebapp.bity24h.pl/api/admin-logs?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Odpowiedź sieci nie była w porządku");
      }

      const data = await response.json();
      setLogs(data.data);
      setTotalPages(data.meta?.last_page || 1);
    } catch (error) {
      console.error("Błąd z pobieraniem logów", error);
      toast.error("Nie można załadować logów, spróbuj ponownie.");
    }
  };

  const filteredLogs = logs.filter(
    (log) =>
      log.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.actionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.method.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderRow = (item: Log) => {
    const methodStyles: { [key: string]: string } = {
      PUT: "bg-green-200 p-1 rounded-lg",
      POST: "bg-blue-200 p-1 rounded-lg",
      DELETE: "bg-red-200 p-1 rounded-lg",
    };

    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm"
      >
        <td className="flex items-center gap-4 p-4">{item.userName}</td>
        <td>{item.actionName}</td>
        <td className="flex justify-end gap-8 p-4">
          <span
            className={`hidden md:inline ${methodStyles[item.method] || ""}`}
          >
            {item.method}
          </span>
          <span>{item.creationHour}</span>
          <span>{item.creationDate}</span>
        </td>
      </tr>
    );
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
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Logi</h1>
      </div>

      <Table columns={columns} renderRow={renderRow} data={filteredLogs} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default Logs;
