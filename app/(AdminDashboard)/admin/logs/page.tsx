"use client";
import { logs } from "@/app/lib/logs";
import TableSearch from "@/app/components/TableSearch";
import Table from "@/app/components/Table";

type LogsData = {
  username: string;
  action: string;
  id: string;
  hour: string;
  date: string;
};

const columns = [
  {
    header: "Nazwa",
    accessor: "username",
  },
  {
    header: "Operacja",
    accessor: "action",
  },
  {
    header: "Id",
    accessor: "id",
    className: "hidden md:table-cell",
  },

  {
    header: "Godzina",
    accessor: "hour",
  },
  {
    header: "Data",
    accessor: "date",
  },
];

const Logs = () => {
  const renderRow = (item: LogsData) => (
    <tr key={item.username} className="border-b border-gray-200 text-sm">
      <td className="flex items-center gap-4 p-4">{item.username}</td>
      <td>{item.action}</td>
      <td className="hidden md:table-cell">{item.id}</td>
      <td>{item.hour}</td>
      <td>{item.date}</td>
      <td></td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Logi</h1>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={logs} />
    </div>
  );
};

export default Logs;
