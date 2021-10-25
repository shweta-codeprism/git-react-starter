/** Actions */
import { search } from "./reduxReducers/search";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";

import styles from "./Search.module.scss";

const Search  = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.Search).searchResults;

  console.log("SearchResults - Searc", searchResults)


  const getTheSearchResults = useCallback(() => {
    dispatch(search());
  }, [dispatch]);

  useEffect(() => {
    getTheSearchResults();
  }, [getTheSearchResults])

  return (
        <div className={styles["search-page"]}>
          {
        searchResults.map(sR => <div className={styles["search-item"]}>
             <img src={sR.data.url} alt="Search" height="40px" width="auto" />
            <span> {sR.value}</span>
            </div>)
          }
        </div>
  );
}

export default Search;