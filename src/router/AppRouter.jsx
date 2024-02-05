import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { MarvelPage } from "../heroes/pages/MarvelPage";
// import { DcPage } from "../heroes/pages/DcPage";
// import { LoginPage } from "../auth/pages/LoginPage";
// import { Navbar } from "../ui/componentes/Navbar";
import { Navbar } from "../ui";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="login" element={<LoginPage />} /> */}

        {/* Rotas Públicas */}
        {/* <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        /> */}

        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        {/* Rotas Privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* // <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
