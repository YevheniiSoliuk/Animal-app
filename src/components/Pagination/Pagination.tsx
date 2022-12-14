import React from 'react';
import { usePagination } from '../../hooks/usePagination';
import Button from '../commons/Button/Button';

type PaginationProps = {
  onPageChange: Function,
  totalCount: number,
  siblingCount: number,
  currentPage: number,
  pageSize: number,
  className: string
}

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange:any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={className}
    >
       {/* Left navigation arrow */}
      <li
        className={currentPage === 1 ? "hidden" : ""}
        onClick={onPrevious}
      >
        <button className={"w-[35px] h-[35px] bg-orange border-2 border-green rounded-[10px] shadow-md"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px]">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd"/>
          </svg>
        </button>
      </li>
      {paginationRange.map((pageNumber: number|string) => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "...") {
          return <li>&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? "text-[20px] hover: text-yellow cursor-pointer" : "text-[20px] cursor-pointer"
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={currentPage === lastPage ? "hidden" : ""}
        onClick={onNext}
      >
        <button className={"w-[35px] h-[35px] bg-orange border-2 border-green rounded-[10px] shadow-md"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px]">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;