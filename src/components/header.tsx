import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos minimalistas
import { Link } from "react-router-dom";
import useWindowWidth from "../utils/windowWidth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const windWith = useWindowWidth();

  return (
    <header
      className={`z-50 w-full p-4 bg-white text-black flex fixed absolute justify-between items-center w-full ${
        open ? "bg-opacity-10" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-16 sm:w-20">
          <img src="/src/assets/images/logo.webp" alt="" />
        </div>

        {windWith > 768 && (
          <>
            <nav className="flex space-x-8 text-lg font-light md:text-lg lg:text-2xl items-center ">
              <Link to="/" className="hover:text-yellow-400">
                Inicio
              </Link>
              <Link to="/menu" className="hover:text-yellow-400">
                Menú
              </Link>
              <Link to="/contacto" className="hover:text-yellow-400">
                Contacto
              </Link>
              <Link to="#">
                <img
                  className="w-8"
                  src="/src/assets/images/tiktok.png"
                  alt="Ig logo"
                />
              </Link>
              <Link to="#">
                <img
                  className="w-8"
                  src="/src/assets/images/ig.png"
                  alt="Ig logo"
                />
              </Link>
            </nav>
          </>
        )}
      </div>
      {/* Botón de Menú hamburguesa con el botonsito de Menú y X */}
      <button onClick={() => setOpen(!open)} className="md:hidden z-50">
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menú desplegable para los celulares*/}
      {open && (
        <div className="z-40 fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center mt-0">
          <ul className="space-y-6 text-2xl font-semibold flex flex-col justify-center items-center gap-4">
            <Link to="/" className="hover:text-yellow-400 cursor-pointer">
              Inicio
            </Link>
            <Link to="/Menu" className="hover:text-yellow-400 cursor-pointer">
              Menú Restaurante
            </Link>
            <Link
              to="/contacto"
              className="hover:text-yellow-400 cursor-pointer"
            >
              Contacto
            </Link>
            <Link to="#" className="inline-flex">
              <img
                className="w-8"
                src="/src/assets/images/tiktok.png"
                alt="Ig logo"
              />
            </Link>
            <Link to="#" className="inline-flex">
              <img
                className="w-8"
                src="/src/assets/images/ig.png"
                alt="Ig logo"
              />
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
