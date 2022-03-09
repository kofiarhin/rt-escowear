import { SHOW_SIDE_NAV, REMOVE_SIDE_NAV } from "../constants";
const initialReducer = {
  showSideNav: false,
};

const generalReducer = (state = initialReducer, action) => {
  switch (action.type) {
    case REMOVE_SIDE_NAV:
      return { ...state, showSideNav: false };
    case SHOW_SIDE_NAV:
      return { ...state, showSideNav: true };
    default:
      return state;
  }
};

export default generalReducer;
