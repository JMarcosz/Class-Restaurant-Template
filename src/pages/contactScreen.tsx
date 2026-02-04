import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Schedule from "../components/Schedule";
import { data } from "../data/data";
import ContactForm from "../components/ContactForm";
import { Instagram } from "lucide-react";

export default function ContactScreen() {
  return (
    <div className="bg-black">
      <div className="w-[95%] md:w-full mx-auto">
        <Header />
        <main>
          <MainBanner
            title="Contáctanos"
            subtitle={[" ", " "]}
            btn={false}
            boxH="-mb-32 "
          />
        </main>

        <div className="animate-fade-in">
          <Schedule color={true} />
        </div>

        {/* Social Media & Contact Form Section */}
        <section className="bg-black flex flex-col justify-center items-center py-16 px-4">
          <div className="text-white text-center mb-12 animate-fade-in">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
              Síguenos en nuestras redes sociales
            </h2>
            <div className="flex justify-center gap-8 mt-8">
              <a
                href={data.imstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale hover-glow transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={48} className="text-white hover:text-yellow-400 md:w-16 md:h-16 lg:w-20 lg:h-20" />

              </a>
              <a
                href={data.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale hover-glow"
                aria-label="TikTok"
              >
                <img
                  src="/src/assets/images-webp/tiktok.webp"
                  alt="TikTok"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
          <ContactForm />
        </section>

        <Footer />
      </div>
    </div>
  );
}
