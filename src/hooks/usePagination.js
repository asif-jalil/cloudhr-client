import { useState } from 'react';

const usePagination = (dataLength, itemPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(dataLength / itemPerPage);

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }
  return {next, prev, currentPage, maxPage}
};

export default usePagination;