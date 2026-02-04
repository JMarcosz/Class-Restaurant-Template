export interface dataItemsImg {
  id: number;
  text?: string;
  img: string;
  bgImg?: string;
  direction?: boolean;
  size?: string;
  data?: string;
}
export const itemImg: dataItemsImg[] = [
  {
    id: 1,
    img: "/src/assets/images-webp/image1.webp",
  },
  {
    id: 2,
    img: "/src/assets/images-webp/image2.webp",
  },
  {
    id: 3,
    img: "/src/assets/images-webp/image3.webp",
  },
  {
    id: 4,
    img: "/src/assets/images-webp/image4.webp",
  },
];

export const bannersImg: dataItemsImg[] = [
  {
    id: 1,
    text: "MENU GENERAL",
    img: "/src/assets/images-webp/bannersImg/image1.webp",
    direction: true,
    bgImg: "/src/assets/images-webp/bannersImg/Bbg1.webp",
    data: "Lorem Ipsum es simplemente  el texto de relleno de las imprentas y archivos de texto",
    // size: "h-64",
  },

  {
    id: 2,
    text: "MENU BEBIDAS",
    img: "/src/assets/images-webp/bannersImg/image2.webp",
    direction: false,
    bgImg: "/src/assets/images-webp/bannersImg/Bbg2.webp",
    data: "Lorem Ipsum es simplemente  el texto de relleno de las imprentas y archivos de texto",
    // size: "h-52",
  },
  {
    id: 3,
    text: "MENU GENERAL",
    img: "/src/assets/images-webp/bannersImg/image3.webp",
    direction: true,
    bgImg: "/src/assets/images-webp/bannersImg/Bbg1.webp",
    data: "Lorem Ipsum es simplemente  el texto de relleno de las imprentas y archivos de texto",
    // size: "h-52",
  },
];

export const bannersImgMenu: dataItemsImg[] = [
  {
    id: 1,
    text: "MENU GENERAL",
    img: "/src/assets/images-webp/bannersImg/image1.webp",
    direction: true,
    bgImg: "/src/assets/images-webp/bannersImg/Bbg1.webp",
    // size: "h-64",
  },

  {
    id: 2,
    text: "MENU ",
    img: "/src/assets/images-webp/bannersImg/image2.webp",
    direction: false,
    bgImg: "/src/assets/images-webp/bannersImg/Bbg2.webp",
    // size: "h-52",
  },
  {
    id: 3,
    text: "MENU GENERAL",
    img: "/src/assets/images-webp/bannersImg/image3.webp",
    direction: true,
    bgImg: "/src/assets/images-webp/bannersImg/Bbg1.webp",
    // size: "h-52",
  },
  {
    id: 4,
    text: "BEBIDAS VARIADAS",
    img: "/src/assets/images-webp/bannersImg/bebidas.webp",
    direction: false,
    bgImg: "/src/assets/images-webp/bannersImg/Bbg2.webp",
    size: "h-52",
  },
];

export const ScheduleImg = {
  id: 1,
  img: "/src/assets/images-webp/bannersImg/platored.webp",
};

export const DeliveryImg = [
  {
    id: 1,
    name: "general",
    imgbg: "/src/assets/images-webp/bannersImg/delivery.webp",
    pngImg: "/src/assets/images-webp/bannersImg/LogoPedidosYa.webp",
    pdfLink: "https://www.pedidosya.com.ar/",
  },
];
