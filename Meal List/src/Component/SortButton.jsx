//button to sort Ascending or Descending
const SortButton = ({ sorted, setSorted }) => {
  return (
    <button onClick={() => setSorted(!sorted)}>
      Sort {sorted ? "Descending" : "Ascending"}
    </button>
  );
};

export default SortButton;
