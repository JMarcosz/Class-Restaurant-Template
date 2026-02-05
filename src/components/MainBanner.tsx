import Button from "./Button";

interface MainBannerProps {
  title?: string;
  subtitle?: Array<string> | string;
  btnText?: string;
  imgUrl?: string;
  btn?: boolean;
  line?: boolean;
  boxH?: string;
}

export default function MainBanner({
  title,
  subtitle,
  btnText,
  imgUrl,
  btn,
  line,
  boxH,
}: MainBannerProps) {
  return (
    <div
      className={`bg-black bg-cover w-full h-96 bg-center bg-no-repeat -mb-10 md:h-auto md:mb-10 md:max-h-[88vh] justify-center items-center flex flex-col md:pt-20 relative ${boxH ? boxH : " "
        }`}
      style={{
        backgroundImage: imgUrl
          ? imgUrl
          : "url('/assets/images-webp/bannersImg/fondomenu.webp')",
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/80"></div>

      <h1
        className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white animate-scale-in relative z-10"}
      >
        {title ? title : "Seccion"}
      </h1>

      {/*aqui esta el contenedor con la linea, texto y el boton*/}

      <div
        className={`w-full max-w-md flex flex-col justify-center items-center border-white mt-4 md:mt-10 md:mb-0 relative z-10 px-4 ${line ? "border-t-4" : ""
          }  ${btn ? "-pb-4 md:pb-10 lg:pb-auto" : "pb-6 md:pb-20"}
       `}
      >
        <p className="text-white text-center mt-4 text-sm md:text-xl lg:text-2xl mb-2 md:mb-20">
          {subtitle ? (
            <>
              {subtitle[0]} <br /> {subtitle[1]}
            </>
          ) : (
            "Ver el menú principal de la selección selección 2025"
          )}
        </p>
        {btn && (
          <div className="w-full">
            <Button variant="outline" size="lg" fullWidth>
              {btnText ? btnText : "Ver pdf"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
