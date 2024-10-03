"use client";
import { kebabs } from "@/app/lib/data";
import TableSearch from "@/app/components/TableSearch";
import Table from "@/app/components/Table";
import { MdDelete } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

type Kebab = {
  name: string;
  adres: string;
  status: [];
};

const columns = [
  {
    header: "Nazwa",
    accessor: "name",
  },
  {
    header: "Adres",
    accessor: "adres",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden md:table-cell",
  },

  {
    header: "Akcje",
    accessor: "action",
  },
];

const Manage = () => {
  const handleDeleteKebab = () => {
    toast.success("Produkt usunięty");
  };
  const handleEditKebab = () => {
    toast.success("Edytuj produkt");
  };
  const renderRow = (item: Kebab) => (
    <tr
      key={item.name}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td>{item.adres}</td>
      <td className="hidden md:table-cell">{item.status}</td>
      <td>
        <div className="flex flex-row gap-2">
          <div>
            <ActionBtn icon={FaEdit} onClick={() => handleEditKebab()} />
          </div>
          <div>
            <ActionBtn icon={MdDelete} onClick={() => handleDeleteKebab()} />
          </div>
        </div>
      </td>
    </tr>
  );

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
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={kebabs} />
    </div>
  );
};

export default Manage;
