import React from "react";

const Pages = ({ length, itemsPerPage, setCurrentPage, currentPage }) => {
  const totalPages = [
    ...Array(Math.floor(length / itemsPerPage))
      .fill()
      .map((_, i) => i + 1),
  ];

  const handlePrev = () => {
    if (currentPage === 1) {
      setCurrentPage(length / itemsPerPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage === length / itemsPerPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mt-10">
      <buton
        onClick={handlePrev}
        className="cursor-pointer px-3 py-1 bg-blue-400 text-white m-2 rounded-lg hover:bg-blue-600"
      >
        &lt;
      </buton>
      {totalPages.map((item, index) => (
        <button
          onClick={() => setCurrentPage(index + 1)}
          key={index}
          className={`cursor-pointer px-3 py-1 ${
            currentPage === index + 1 ? "bg-blue-700" : "bg-blue-400"
          } text-white m-2 rounded-lg hover:bg-blue-600`}
        >
          {item}
        </button>
      ))}
      <buton
        onClick={handleNext}
        className="cursor-pointer px-3 py-1 bg-blue-400 text-white m-2 rounded-lg hover:bg-blue-600"
      >
        &gt;
      </buton>
    </div>
  );
};

export default Pages;
