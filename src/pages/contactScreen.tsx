import Header from "../components/header";
import Footer from "../components/footer";
import MainBanner from "../components/mainBanner";
import useWindowWidth from "../utils/windowWidth";
import Schedule from "../components/Schedule";
import { data } from "../data/data";

export default function ContactScreen() {
  const windWith = useWindowWidth();
  return (
    <body className="bg-black">
      <Header />
      <main>
        <MainBanner
          title="Contactanos"
          subtitle={[" ", " "]}
          btn={false}
          Size="text-5xl md:text-8xl lg:text-[200px] md:pt-20"
        />
      </main>
      <Schedule color={true} />
      <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-10 my-20">
        {data.ubicacion.map((item) => (
          <div>
            <h2 className="text-white text-3xl">{item.ubicacion}</h2>
            <iframe
              src={item.link}
              width="700"
              height="450"
              className="max-w-[500px] lg:max-w-[700px]"
            ></iframe>
          </div>
        ))}
      </div>
      <section className="bg-black flex flex-col justify-center items-center py-20">
        <div className="text-white text-5xl">
          <h2>Síguenos En nuestras redes sociales</h2>
          <h2>Logos</h2>
        </div>

        <form className="flex flex-col gap-10 mt-10 max-w-2xl w-full px-4">
          <h2 className="text-white text-5xl">
            ¡Contáctanos y reserva tu cupo para una sabrosa experiencia!
          </h2>
          <div className="flex flex-col gap-10 mt-10">
            <input type="text"></input>
            <input type="text"></input>
          </div>
          <input type="email"></input>
          <input type="number"></input>
          <textarea name="msg" id="msg"></textarea>
          <button></button>
        </form>
      </section>

      <Footer />
    </body>
  );
}
