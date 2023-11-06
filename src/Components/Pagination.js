import React from 'react';

const Pagination = ({selectedMeal = [], setCurrentPage = () => {}, currentPage = 1, itemsPerPage=3}) => {

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
    
    const totalPages = Math.ceil(selectedMeal.length / itemsPerPage);

    return (
        <div className="pagination-footer">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${
              (currentPage === index + 1) ? "active" : ""
            }`}
          >
            {index + 1}
          </div>
        ))}
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
}

export default Pagination;