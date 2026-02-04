import type { dataItemsImg } from "../data/itemsImg";
import Button from "./Button";

interface BannerSectionProps {
  banner: dataItemsImg;
  btn?: boolean;
  reverse?: boolean;
  winWidth: number;
}

export default function BannerSection({
  banner,
  btn,
  reverse,
  winWidth,
}: BannerSectionProps) {
  return (
    <div
      style={{ backgroundImage: `url(${banner.bgImg})` }}
      className="bg-cover bg-center bg-no-repeat py-12 px-6 md:px-12 lg:px-16 relative overflow-hidden group"
    >
      {/* Overlay oscuro mejorado para contraste */}
      <div className="absolute inset-0 bg-black/80 transition-all duration-300 group-hover:bg-black/90 "></div>

      <div
        className={`relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 ${reverse ? "md:flex-row-reverse" : ""
          }`}
      >
        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start lg:justify-center">
          <img
            src={banner.img}
            alt={banner.text}
            loading="lazy"
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] object-contain 
                     transform transition-transform duration-500 hover:scale-105 drop-shadow-2xl"
          />
        </div>

        {/* Texto */}
        <div className={`w-full md:w-1/2 text-white flex flex-col items-center md:items-start text-center md:text-left`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            {banner.text}
          </h2>

          {winWidth >= 768 && (
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-prose">
              {banner.data}
            </p>
          )}

          {btn && (
            <div className="mt-6 md:mt-8 w-[50%]">
              <Button variant="outline" size="sm" fullWidth={true}>
                Ver más
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
