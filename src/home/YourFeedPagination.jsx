import React, { useContext } from "react";
import { Store } from "../store/store";

const YourFeedPagination = () => {
  const { yourFeeds, numberPerPage, paginate } = useContext(Store);
  const totalFeeds = yourFeeds.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFeeds / numberPerPage); i++) {
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

export default YourFeedPagination;

const style = {
  page_link: {
    background: "#FFFFFF",
    border: "1px solid #A8A5A5",
    boxSizing: "border-box",
    color: "#A8A5A5",
  },
};
