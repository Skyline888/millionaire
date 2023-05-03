import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "utils/routes";

import { Main } from "./pages/main";
import { Question } from "./pages/questions";
import { Final } from "./pages/final";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Main />} path={ROUTES.main} />
      <Route element={<Question />} path={ROUTES.question} />
      <Route element={<Final />} path={ROUTES.final} />
    </Routes>
  </BrowserRouter>
);
