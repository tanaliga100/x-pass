import React, { useCallback, useReducer } from "react";

// Define action types
const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

// Reducer function
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unhandled action type");
  }
};

// Custom hook
export const useHttpWithReducer = (initialUrl, initialData) => {
  const [url, setUrl] = React.useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    data: initialData,
    error: null,
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: FETCH_INIT });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.message });
    }
  }, [url]);

  return { ...state, setUrl, fetchData };
};

// Usage
