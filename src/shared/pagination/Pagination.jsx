import React, { useContext } from "react";
import { Store } from "../../store/store";

const Pagination = () => {
  const { articles, numberPerPage, paginate } = useContext(Store);
  const totalArticle = articles.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticle / numberPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination mt-5">
        {pageNumbers.map((number) => {
          return (
            <li key={Math.random()} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link rounded-0"
                style={style.page_link}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

const style = {
  page_link: {
    background: "#FFFFFF",
    border: "1px solid #A8A5A5",
    boxSizing: "border-box",
    color: "#A8A5A5",
  },
};
