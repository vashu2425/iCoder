import React from "react";

const Paginations = ({ onPageChange, currentPage, blog, pageSize }) => {
  const totalPages = Math.ceil(blog.length / pageSize);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul>
      <li>
        <button>Prev</button>
      </li>
      <div> {renderPaginationLinks()}</div>
      <li>
        <button>Next</button>
      </li>
    </ul>
  );
};
export default Paginations;
