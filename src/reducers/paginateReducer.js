import { NEXT_PAGE, PREV_PAGE } from "../actions/actionTypes";

const initialState = {
  pageX: 0,
  pageY: 5
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE: {
      state = { ...state };
      return state;
    }
    case PREV_PAGE: {
      state = { ...state };
      return state;
    }
    default: {
      return state;
    }
  }
};
