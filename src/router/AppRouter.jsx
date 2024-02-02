import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { MarvelPage } from "../heroes/pages/MarvelPage";
// import { DcPage } from "../heroes/pages/DcPage";
// import { LoginPage } from "../auth/pages/LoginPage";
// import { Navbar } from "../ui/componentes/Navbar";
import { Navbar } from "../ui";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
