const SEARCH = {
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTs"
}

const INITIAL_STATE = {
  searchResults: []
}

export const search = () => {
  return async (dispatch, getState) => {
    try {
      const searchResultsRes = await fetch("https://ac.cnstrc.com/search/apple?key=key_fygjntHGW7usvxC8", {
        method: "GET"
      });
      const searchResults = await searchResultsRes.json();
      dispatch({
        type: SEARCH.SET_SEARCH_RESULTS,
        searchResults: searchResults.response.results
      })
    } catch (e) {
      console.error("Search Results Error", e)
    }
  }
}

export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults
      };
    default:
      return state;
  }
}