import { itemImg } from "../data/itemsImg";
import type { dataItemsImg } from "../data/itemsImg";

export default function Cuadricula() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-4 mt-8 md:mt-0 md:-translate-y-20 relative z-20">
      {itemImg.map((item: dataItemsImg) => (
        <div key={item.id} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg group">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={item.img}
            alt={`Gallery image ${item.id}`}
            loading="lazy"
          />
          {/* Overlay opcional al hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </div>
      ))}{" "}
    </div>
  );
}
