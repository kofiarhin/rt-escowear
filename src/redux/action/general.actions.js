import { SHOW_SIDE_NAV, REMOVE_SIDE_NAV } from "../constants";
export const showSideNav = () => {
  return {
    type: SHOW_SIDE_NAV,
  };
};

export const removeSideNav = () => {
  return {
    type: REMOVE_SIDE_NAV,
  };
};
