import Header from "../components/header";
import Footer from "../components/footer";
import MainBanner from "../components/MainBanner";
/* import useWindowWidth from "../utils/windowWidth"; */
import Schedule from "../components/Schedule";
import { data } from "../data/data";
import ContactForm from "../components/ContactForm";

export default function ContactScreen() {
  /*   const windWith = useWindowWidth(); */
  return (
    <body className="bg-black">
      <Header />
      <main>
        <MainBanner
          title="Contactanos"
          subtitle={[" ", " "]}
          btn={false}
          Size="text-5xl md:text-8xl lg:text-[200px] md:pt-10
         md:h-82 "
          boxH="-mb-32 "
        />
      </main>
      <Schedule color={true} />
      <div className="flex flex-col lg:flex-row lg:justify-around items-center justify-center gap-10 my-20">
        {data.ubicacion.map((item) => (
          <div>
            <h2 className="text-white text-3xl mb-8  md:mb-10 md:text-5xl">
              {item.ubicacion}
            </h2>
            <iframe
              src={item.link}
              width="700"
              height="450"
              className="max-w-[500px] lg:max-w-[700px]"
            ></iframe>
          </div>
        ))}
      </div>
      <section className="bg-black flex flex-col justify-center items-center py-16">
        <div className="text-white text-5xl">
          <h2>Síguenos En nuestras redes sociales</h2>
          <h2>Logos</h2>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </body>
  );
}
