import React, { useContext, useState } from "react";
import { storeContext } from "../service/store";

export default function Pagination() {
  const { numbers, setCurrentPage, currentPage, npage } =
    useContext(storeContext);

  const prvPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (num) => {
    setCurrentPage(num);
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPaginationNumbers = () => {
    if (numbers.length <= 4) {
      return numbers;
    }

    let pagination = [1];

    if (currentPage > 3) {
      pagination.push("...");
    }

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(currentPage + 1, numbers.length - 1);

    for (let i = start; i <= end; i++) {
      pagination.push(i);
    }

    if (end < numbers.length - 1) {
      pagination.push("...");
    }

    if (currentPage !== numbers.length) {
      pagination.push(numbers.length);
    }

    return pagination;
  };
  return (
    <>
      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
        <ol className="flex justify-end gap-1 text-xs font-medium">
          <li>
            <a
              onClick={prvPage}
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          {getPaginationNumbers().map((num, index) => (
            <li key={index}>
              <a
                href="#"
                className={`${
                  currentPage === num
                    ? "block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                    : "block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                }`}
                onClick={() => {
                  if (num !== "...") {
                    changePage(num);
                  }
                }}
              >
                {num}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              onClick={nextPage}
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
