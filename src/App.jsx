import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import PrincipalPage from "./Components/PrincipalPage";
import Playing from "./Components/Playing";
import Gameover from "./Components/GameOver/Gameover.jsx";
import Instrucciones from "./Components/Playing/Instrucciones.jsx";
function App() {
  /* mis rutas */
  return (
    <>
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/playing" element={<Playing />} />
        <Route path="/gameover" element={<Gameover />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
        <Route path="*" element={<Navigate to="/" PrincipalPage />} />
      </Routes>
    </>
  );
}

export default App;
