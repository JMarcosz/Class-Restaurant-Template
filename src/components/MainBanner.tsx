import BtnStroke from "./btn_stroke";

interface MainBannerProps {
  title?: string;
  subtitle?: Array<string> | string;
  btnText?: string;
  imgUrl?: string;
  btn?: boolean;
  Size?: string;
  line?: boolean;
  boxH?: string;
}

export default function MainBanner({
  title,
  subtitle,
  btnText,
  imgUrl,
  btn,
  Size,
  line,
  boxH,
}: MainBannerProps) {
  return (
    <div
      className={`bg-black bg-cover w-full h-96  bg-center bg-no-repeat -mb-10  md:h-auto md:mb-10 md:max-h-[88vh] justify-center items-center flex flex-col md:pt-20  ${
        boxH ? boxH : " "
      }`}
      style={{
        backgroundImage: imgUrl
          ? imgUrl
          : "url('/src/assets/images/bannersImg/fondomenu.png')",
      }}
    >
      <h1
        className={`text-5xl md:text-8xl lg:text-9xl font-bold text-white ${
          Size ? Size : "text-5xl md:text-8xl lg:text-9xl"
        } `}
      >
        {title ? title : "Seccion"}
      </h1>

      {/*aqui esta el contenedor con la linea, texto y el boton*/}

      <div
        className={`w-64 flex flex-col justify-center items-center   border-white mt-4 md:mt-10 md:w-2/3 md:mb-0 ${
          line ? "border-t-4" : ""
        }  ${btn ? "-pb-4 md:pb-10 lg:pb-auto" : "pb-6 md:pb-20"}
       `}
      >
        <p className="text-white text-center mt-4 md:text-3xl lg:md:text-4xl mb-2 md:mb-20">
          {subtitle ? (
            <>
              {subtitle[0]} <br /> {subtitle[1]}
            </>
          ) : (
            "Ver el menú principal de la selección selección 2025"
          )}
        </p>
        {btn && (
          <BtnStroke color="white" Size="h-4 mt-6 md:-mt-6">
            {btnText ? btnText : "Ver pdf"}
          </BtnStroke>
        )}
      </div>
    </div>
  );
}
