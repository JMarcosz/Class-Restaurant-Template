export default function DeliveriSection() {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/images-webp/bannersImg/Bbg1.webp")`,
      }}
      className="flex bg-cover bg-center bg-no-repeat h-48 md:h-80 lg:h-[640px] items-center xl:h-[500px] 2xl:h-[700px] animate-fade-in relative"
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="flex justify-center w-11/12 md:w-3/5 gap-x-1 mx-auto items-center relative z-10">
        <div className="flex flex-col gap-y-10 lg:gap-y-40">
          <h2 className="border-white border-b-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold hover:text-yellow-400 transition-colors duration-300">
            Pedidos Ya
          </h2>
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold hover:text-yellow-400 transition-colors duration-300">
            Uber Eats
          </h2>
        </div>
        <img
          src="/assets/images-webp/bannersImg/delivery.webp"
          alt="Delivery"
          className="w-52 -top-12 mt-10 md:w-96 md:translate-x-1/4 lg:w-3/5 2xl:max-w-[1100px] hover-scale"
        />
      </div>
    </div>
  );
}
