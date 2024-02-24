import { Routes, Route, Link } from "react-router-dom";

import { Timer } from "./pages/timer/Timer";
import { Palette } from "./pages/palette/Palette";
import { NotFound } from "./pages/not-found/NotFound";
import { Layout } from "./pages/layout/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/timer" element={<Timer />} />
          <Route path="/palette" element={<Palette />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
