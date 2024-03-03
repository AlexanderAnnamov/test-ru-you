import { Routes, Route, Link } from "react-router-dom";

import { TimerPage } from "./pages/timer/Timer";
import { PalettePage } from "./pages/palette/Palette";
import { NotFound } from "./pages/not-found/NotFound";
import { Layout } from "./pages/layout/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/palette" element={<PalettePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
