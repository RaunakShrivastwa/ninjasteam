const Filter = ({ value, isClicked }) => {
  return (
    <div
      className={`flex w-64 items-center justify-center text-gray-500 text-sm py-3 cursor-pointer border-b-2 font-medium ${
        isClicked
          ? "border-red-500 text-black"
          : "border-transparent hover:bg-gray-200 hover:text-black"
      }`}
    >
      {value}
    </div>
  );
};

export default Filter;
