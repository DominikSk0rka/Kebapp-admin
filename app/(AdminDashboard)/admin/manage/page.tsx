"use client";

import ActionBtn from "@/app/components/ActionBtn";
import Table from "@/app/components/Table";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";
import axios from "axios";
import Pagination from "@/app/components/Pagination";
import Modal from "@/app/components/Modal";
import EditKebabForm from "@/app/components/EditKebabForm";

interface MeatType {
  id: number;
  name: string;
}
interface OpeningHour {
  weekDay: string;
  opensAt: string;
  closesAt: string;
}

interface Sauce {
  id: number;
  name: string;
  isSpicy: boolean;
}

interface Kebab {
  id: number;
  name: string;
  address: string;
  status: "active" | "inactive" | "planned";
  coordinatesX: number;
  coordinatesY: number;
  closingYear: number;
  openingYear: number;
  network: string;
  isKraft: boolean;
  isFoodTruck: boolean;
  hasPyszne: boolean;
  hasGlovo: boolean;
  hasUberEats: boolean;
  phoneNumber: string;
  appLink: string;
  websiteLink: string;
  meatTypes: MeatType[];
  sauces: Sauce[];
  openingHours: OpeningHour[];
  mondayOpensAt: string;
  mondayClosesAt: string;
  tuesdayOpensAt: string;
  tuesdayClosesAt: string;
  wednesdayOpensAt: string;
  wednesdayClosesAt: string;
  thursdayOpensAt: string;
  thursdayClosesAt: string;
  fridayOpensAt: string;
  fridayClosesAt: string;
  saturdayOpensAt: string;
  saturdayClosesAt: string;
  sundayOpensAt: string;
  sundayClosesAt: string;
}

const statusTranslations: Record<string, string> = {
  inactive: "Nieaktywny",
  active: "Aktywny",
  planned: "Planowany",
};

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedKebab, setSelectedKebab] = useState<Kebab | null>(null);
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
      setTotalPages(data.meta.last_page || 1);
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

  const handleEditKebab = (kebab: Kebab) => {
    setSelectedKebab(kebab);
    setIsModalOpen(true);
  };

  const renderRow = (item: Kebab) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm p-8"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td>{item.address}</td>
      <td className="hidden md:table-cell">
        {" "}
        {statusTranslations[item.status.toLowerCase()] || item.status}
      </td>
      <td>
        <div className="flex flex-row gap-2">
          <ActionBtn icon={FaEdit} onClick={() => handleEditKebab(item)} />
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
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Zarządzaj Kebabami
        </h1>
      </div>

      <Table columns={columns} renderRow={renderRow} data={kebabs} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedKebab && (
          <EditKebabForm
            kebab={selectedKebab}
            onClose={() => setIsModalOpen(false)}
            onSave={() => fetchData(currentPage)}
          />
        )}
      </Modal>
    </div>
  );
};

export default Manage;
