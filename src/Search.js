/** Actions */
import { search } from "./reduxReducers/search";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";

import styles from "./Search.module.scss";

const Search  = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.Search).searchResults;

  console.log("SearchResults - Searc", searchResults)

  const [searchText, setSearchText] = useState("");

  // const getTheSearchResults = useCallback(() => {
  //   dispatch(search(searchText));
  // }, [searchText, dispatch]);

  const getTheSearchResultsOnclick = () => {
    dispatch(search(searchText));
  };

  // useEffect(() => {
  //   // getTheSearchResults();
  // }, [getTheSearchResults])


  return (
      <div className={styles["page"]}>
      <div className={styles["search-bar"]}>
        <span> Product List</span>
        <div>
          <input value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button onClick={getTheSearchResultsOnclick}> Search </button>
        </div>
      </div>
        <div className={styles["search-page"]}>
          {
          searchResults.map(sR => <div key={sR.id} className={styles["search-item"]}>
             <img src={sR.data.url} alt="Search" height="40px" width="auto" />
            <span> {sR.value}</span>
            </div>)
          }
        </div>
      </div>
  );
}

export default Search;