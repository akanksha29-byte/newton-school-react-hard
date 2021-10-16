import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_DATA
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  result: []
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      state = { ...state, loading: true };
      return state;
    }
    case FETCH_FAILED: {
      state = { ...state, loading: false, result: action.payload.error };
      return state;
    }
    case FETCH_SUCCESS: {
      state = { ...state, loading: false, result: action.payload.data };
      return state;
    }
    default: {
      return state;
    }
  }
};
