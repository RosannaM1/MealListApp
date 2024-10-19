//button to sort Ascending or Descending
const SortButton = ({ sorted, setSorted }) => {
  return (
    <button
      onClick={() => setSorted(!sorted)}
      className="text-gray-600 hover:text-gray-800 flex items-center space-x-1"
    >
      <span>Sort {sorted ? "Descending" : "Ascending"}</span>
      {sorted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      )}
    </button>
  );
};

export default SortButton;

