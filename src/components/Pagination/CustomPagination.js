import React from "react";
import { Pagination } from "@mui/material";
import './customPagination.css'


const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  // console.log(setPage);

  const handlePageChange = (page) => {
    // console.log(e);
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className='pagination-custom'>
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numberOfPages}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
