import Header from "../components/header";
import Footer from "../components/footer";
import MainBanner from "../components/mainBanner";
import useWindowWidth from "../utils/windowWidth";
import Schedule from "../components/Schedule";

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
      <div>
        <h2 className="text-white text-5xl">Scursal 1</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2424998933925!2d-69.94352168818489!3d18.472671682539183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e4e39a2ab5%3A0x98df0764eaed40ca!2sBlueMall%20Santo%20Domingo!5e0!3m2!1ses-419!2sus!4v1759502904753!5m2!1ses-419!2sus"
          width="500"
          height="450"
          className="max-w-[500px]"
        ></iframe>
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
