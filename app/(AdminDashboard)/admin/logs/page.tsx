"use client";

import { useEffect, useState } from "react";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import Pagination from "@/app/components/Pagination";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

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
  { header: "Metoda", className: "hidden md:table-cell" },
  { header: "Godzina" },
  { header: "Data" },
];

const Logs: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const token = Cookies.get("token");

  useEffect(() => {
    fetchLogs(currentPage);
  }, [currentPage]);

  const fetchLogs = async (page: number) => {
    try {
      const response = await fetch(
        `https://kebapp.wheelwallet.cloud/api/admin-logs?page=${page}`,
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

  const renderRow = (item: Log) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.userName}</td>
      <td>{item.actionName}</td>
      <td className="hidden md:table-cell">{item.method}</td>
      <td>{item.creationHour}</td>
      <td>{item.creationDate}</td>
    </tr>
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Logi</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={logs} />

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
