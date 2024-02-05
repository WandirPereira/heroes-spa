import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  // const [authState, authDispatch] = useReducer(authReducer, initialState, init);
  const [authState, authDispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: "ABC", name };
    const action = {
      type: types.login,
      payload: user,
      // payload: {
      //   id: "ABC",
      //   name: name,
      // },
    };
    // console.log("action: ", action);
    localStorage.setItem("user", JSON.stringify(user));
    authDispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
      payload: {},
    };
    authDispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,

        //Methods
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
