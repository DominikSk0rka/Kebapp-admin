import React from "react";

interface TableProps {
  columns: { header: React.ReactNode; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col, id) => (
            <th key={id} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
