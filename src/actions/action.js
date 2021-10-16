import {
  NEXT_PAGE,
  PREV_PAGE,
  FETCH_DATA,
  FETCH_FAILED,
  FETCH_SUCCESS
} from "./actionTypes";
import axios from "axios";

export const fetchData = () => {
  return {
    type: FETCH_DATA
  };
};

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchFailed = (error) => {
  return {
    type: FETCH_FAILED,
    payload: {
      error
    }
  };
};

export const fetchStart = () => {
  return (dispatch) => {
    dispatch(fetchData());
    axios
      .get("https://jsonplaceholder.typicode.com/albums/")
      .then((data) => {
        dispatch(fetchSuccess(data.data));
      })
      .catch((err) => {
        dispatch(fetchFailed(err));
      });
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE
  };
};
