"use client";

import ActionBtn from "@/app/components/ActionBtn";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";
import axios from "axios";
import Pagination from "@/app/components/Pagination";

interface Kebab {
  id: number;
  name: string;
  address: string;
  status: string;
}

const columns = [
  { header: "Nazwa" },
  { header: "Adres" },
  { header: "Status", className: "hidden md:table-cell" },
  { header: "Akcje" },
];

const Manage: React.FC = () => {
  const [kebabs, setKebabs] = useState<Kebab[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const token = Cookies.get("token");

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page: number) => {
    try {
      const response = await fetch(
        `https://kebapp.wheelwallet.cloud/api/kebabs/paginated?page=${page}`
      );

      if (!response.ok) {
        throw new Error("Odpowiedź sieci nie była w porządku");
      }

      const data = await response.json();
      console.log(data);
      setKebabs(data.data);
      setTotalPages(data.meta.last_page || 1); // Ustawiamy totalPages
    } catch (error) {
      console.error("Błąd z pobieraniem danych", error);
      toast.error("Nie można załadować kebabów, spróbuj ponownie.");
    }
  };

  const handleDeleteKebab = async (id: number) => {
    try {
      await axios.delete(`https://kebapp.wheelwallet.cloud/api/kebabs/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setKebabs((prevKebabs) => prevKebabs.filter((kebab) => kebab.id !== id));

      toast.success("Kebab usunięty!");
    } catch (error) {
      console.error("Błąd w usuwaniu kebaba:", error);
      toast.error("Błąd w usuwaniu kebaba, spróbuj ponownie");
    }
  };

  const handleEditKebab = (id: number) => {
    toast.success("Edytuj produkt");
  };

  const renderRow = (item: Kebab) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td>{item.address}</td>
      <td className="hidden md:table-cell">{item.status}</td>
      <td>
        <div className="flex flex-row gap-2">
          <ActionBtn icon={FaEdit} onClick={() => handleEditKebab(item.id)} />
          <ActionBtn
            icon={MdDelete}
            onClick={() => handleDeleteKebab(item.id)}
          />
        </div>
      </td>
    </tr>
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Zarządzaj Kebabami
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={kebabs} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default Manage;
