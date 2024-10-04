interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Poprzednia
      </button>
      <div className="flex items-center gap-2 text-sm">
        <span>
          Strona {currentPage} z {totalPages}
        </span>
      </div>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold"
      >
        Następna
      </button>
    </div>
  );
};

export default Pagination;
