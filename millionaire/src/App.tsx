import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mian from './pages/main';
import Question from './pages/questions';
import Final from './pages/final';
import { ROUTES } from 'utils/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<Mian />} />
        <Route path={ROUTES.question} element={<Question />} />
        <Route path={ROUTES.final} element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
