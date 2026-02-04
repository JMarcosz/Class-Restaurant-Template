import { MapPinned, CalendarClock, NotebookPen } from "lucide-react";
import { ScheduleImg } from "../data/itemsImg";
import Button from "./Button";
import useWindowWidth from "../utils/windowWidth";
import { data } from "../data/data";

interface ScheduleProps {
  color?: boolean;
}

export default function Schedule({ color }: ScheduleProps) {
  const winWidth = useWindowWidth();

  //valores de estilos para evitar repeticion
  const titleStyle =
    "text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-left mb-6 flex gap-x-5 items-center";

  //logica para el responsive
  if (winWidth > 1200) {
    return (
      <div className={`py-20 ${color ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-16 relative">
          {/* Imagen decorativa */}
          <img
            className="absolute left-0 top-0 w-[400px] lg:w-[500px] xl:w-[600px] object-cover rounded-xl -translate-x-20 lg:-translate-x-32 hover-scale z-0"
            src={ScheduleImg.img}
            alt="Plato del restaurante"
          />

          {/* Grid de contenido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 relative z-10 ml-auto max-w-6xl">


            {/* Reserva Section */}
            <div className={`flex flex-col ${color ? "text-white" : "text-black"}`}>
              <h2 className={titleStyle}>
                <NotebookPen size={70} /> Reserva ya
              </h2>
              <ul className="text-sm md:text-base lg:text-lg xl:text-xl text-left font-normal space-y-4">
                <li>WhatsApp: {data.phone}</li>
                <li>{data.email}</li>
              </ul>
              <div className="mt-8">
                <Button variant={color ? "outline" : "secondary"} size="md" fullWidth>
                  Ver Detalles
                </Button>
              </div>
            </div>


            {/* Ubicación Section */}
            <div className={`flex flex-col ${color ? "text-white" : "text-black"}`}>
              <h2 className={titleStyle}>
                <MapPinned size={70} />
                Ubicación
              </h2>
              <ul className="text-sm md:text-base lg:text-lg xl:text-xl text-left font-normal space-y-4">
                {data.ubicacion.map((item, index) => (
                  <li key={index}>{item.ubicacion}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant={color ? "outline" : "secondary"} size="md" fullWidth>
                  Ver Detalles
                </Button>
              </div>
            </div>

            {/* Horarios Section */}
            <div className={`flex flex-col ${color ? "text-white" : "text-black"}`}>
              <h2 className={titleStyle}>
                <CalendarClock size={70} />
                Horarios
              </h2>
              <ul className="text-sm md:text-base lg:text-lg xl:text-xl text-left font-normal space-y-4">
                {data.Horario.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant={color ? "outline" : "secondary"} size="md" fullWidth>
                  Ver Detalles
                </Button>
              </div>
            </div>

            {/* Map Section - Full width below */}
            <div className="flex justify-center lg:justify-end relative z-10">
              <iframe
                src={data.globalUbicationLink}
                width="600"
                height="450"
                className="w-full max-w-[600px] rounded-xl shadow-lg hover-lift"
                loading="lazy"
                title="Ubicación del restaurante"
              ></iframe>
            </div>
          </div>


        </div>
      </div>
    );
  }
  //vista para pantallas pequeñas
  return (
    <div className="bg-black mb-10">
      <div className="relative flex items-center py-10 overflow-hidden">
        {/* Texto */}
        <div className="flex flex-col gap-8 pl-12 w-[80%]">
          <div>
            <div className="flex gap-5 items-center">
              <CalendarClock className="text-white" size={24} />
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-white">Horarios</h2>
            </div>
            <p className="font-normal text-white text-lg my-2 md:mb-10 md:text-3xl">
              Todos los días: 11 am a 11 pm.
            </p>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <MapPinned className="text-white" size={24} />
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-white">Ubicación</h2>
            </div>

            {data.ubicacion.map((item, index) => (
              <div key={index}>
                <h2 className="font-normal text-white text-lg my-2 lg:mb-10 md:text-3xl">
                  {item.ubicacion}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <img
          className="w-48 md:w-72 absolute -right-28 top-16 md:top-4"
          src={ScheduleImg.img}
          alt="Imagen decorativa del plato"
        />
      </div>
      <div className="pb-4 px-4">
        <Button variant="outline" fullWidth>Ver Más</Button>
      </div>
    </div>
  );
}
