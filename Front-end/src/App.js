import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Promocao from "./views/Promocao";
import Destino from "./views/Destino";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Clientes from "./views/clientes";
import ClientesCreate from "./views/clientes/Create";



import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Promocao" element={<Promocao/>} />
        <Route path="/Destino" element={<Destino/>} />
        <Route path="/Clientes" element={<Clientes/>} />
        <Route path="/ClientesCreate" element={<ClientesCreate/>} />
        
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;