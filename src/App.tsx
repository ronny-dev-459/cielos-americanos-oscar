import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Obras from "./pages/Obras";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
}
