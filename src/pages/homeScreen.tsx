import Header from "../components/Header";
import Button from "../components/Button";
import Banners from "../components/Banners";
import Schedule from "../components/Schedule";
import Cuadricula from "../components/Cuadricula";
import useWindowWidth from "../utils/windowWidth";
import DeliveriSection from "../components/DeliveriSection";

import { bannersImg } from "../data/itemsImg";
import Footer from "../components/Footer";

export default function HomeScreen() {
  const windWith = useWindowWidth();

  return (
    <main className="bg-black justify-center">
      <div className="w-[95%] md:w-full mx-auto">
        <Header />
        {/*Seccion de imagen de fondo con texto Welcome*/}
        <div
          className="bg-white w-full h-96 bg-cover bg-center bg-no-repeat mb-5 md:h-screen md:max-h-[88vh] justify-center items-center flex animate-fade-in relative"
          style={{ backgroundImage: "url('/src/assets/images-webp/local_bg.webp')" }}
        >
          {/* Overlay oscuro para mejorar contraste */}
          <div className="absolute inset-0 bg-black/40"></div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white animate-scale-in relative z-10">
            Welcome
          </h1>
        </div>

        {/*Seccion de bienvenida con boton ver mas y cuadricula de imagenes*/}
        <div className="w-full p-0 ph-10 justify-center text-center animate-slide-in-up">
          <div className="bg-black md:w-4/5 mx-auto md:-translate-y-40 md:pt-10">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-white lg:my-12">
              Hello you! welcome
            </h1>
            <p className="text-white m-4 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl lg:mx-40 lg:my-12">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum es simplemente el texto de relleno de
              las imprentas y archivos de texto.Lorem Ipsum es simplemente el
              texto de relleno de las imprentas y archivos de texto.{" "}
            </p>
            {windWith < 800 && (
              <div className="px-4 max-w-md mx-auto">
                <Button variant="outline" fullWidth>Ver Más</Button>
              </div>
            )}
          </div>

          <Cuadricula />

          <Banners data={bannersImg} />
        </div>
        <Schedule />

        {/*Delivery Section. Esto despues lo modificare con el componente Banners para que lo genere pasando props.*/}
        <DeliveriSection />

        {/*Este apartado es el espacio que va en blanco con el titulo inductivo.
          recordar modificar componentes para pasar los arreglos como argumentos
          para que sean dinamicos.*/}
        {windWith < 800 && (
          <div className="bg-white w-full pb-10 pt-8 ">
            <h2 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-left font-semibold mb-9 ml-8 mx-10 lg:text-center lg:my-16">
              Dale a tus invitados un recuerdo que puedan
              <b> degustar</b>
            </h2>
            <div className="px-4 max-w-md mx-auto">
              <Button variant="secondary" fullWidth>Detalles</Button>
            </div>
            <Cuadricula />
          </div>
        )}
        <Footer></Footer>
      </div>
    </main>
  );
}
