import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos minimalistas
import { Link } from "react-router-dom";
import useWindowWidth from "../utils/windowWidth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const windWith = useWindowWidth();

  return (
    <header
      className={`z-50 w-full p-4 bg-white text-black flex justify-between items-center ${open ? "bg-opacity-10" : "bg-white"
        }`}
    >
      <div className="container mx-auto px-16 flex justify-between items-center">
        <div className="w-16 sm:w-20 hover-scale cursor-pointer">
          <img src="/src/assets/images-webp/logo.webp" alt="Restaurant Logo" />
        </div>

        {windWith > 768 && (
          <>
            <nav className="flex space-x-6 lg:space-x-8 text-sm md:text-base lg:text-lg xl:text-xl items-center font-light">
              <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
                Inicio
              </Link>
              <Link to="/menu" className="hover:text-yellow-400 transition-colors duration-300">
                Menú
              </Link>
              <Link to="/contacto" className="hover:text-yellow-400 transition-colors duration-300">
                Contacto
              </Link>
              <Link to="#" className="hover-scale">
                <img
                  className="w-5 md:w-6 lg:w-7"
                  src="/src/assets/images-webp/tiktok.webp"
                  alt="TikTok"
                />
              </Link>
              <Link to="#" className="hover-scale">
                <img
                  className="w-5 md:w-6 lg:w-7"
                  src="/src/assets/images-webp/ig.webp"
                  alt="Instagram"
                />
              </Link>
            </nav>
          </>
        )}
      </div>
      {/* Botón de Menú hamburguesa con el botonsito de Menú y X */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden z-50 hover-scale p-2"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menú desplegable para los celulares*/}
      {open && (
        <nav className="z-40 fixed inset-0 bg-white/95 flex flex-col justify-center items-center mt-0 animate-fade-in backdrop-blur-sm">
          <ul className="space-y-8 text-xl md:text-2xl font-semibold flex flex-col justify-center items-center">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition-colors duration-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Menu" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition-colors duration-300">
                Menú Restaurante
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setOpen(false)} className="hover:text-yellow-400 transition-colors duration-300">
                Contacto
              </Link>
            </li>
            <li className="flex gap-6 mt-4">
              <Link to="#" className="hover-scale">
                <img
                  className="w-8 h-8 object-contain"
                  src="/src/assets/images-webp/tiktok.webp"
                  alt="TikTok"
                />
              </Link>
              <Link to="#" className="hover-scale">
                <img
                  className="w-8 h-8 object-contain"
                  src="/src/assets/images-webp/ig.webp"
                  alt="Instagram"
                />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
