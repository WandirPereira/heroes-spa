import { types } from "../types/types";

// const initialState = {
//   logged: false,
//   name: wandir,
// };

export const authReducer = (authState = {}, action) => {
  switch (action.type) {
    case types.login:
      // console.log("action-reducer:", action);
      return {
        ...authState,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return authState;
  }
};
