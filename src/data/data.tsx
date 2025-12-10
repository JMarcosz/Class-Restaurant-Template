export interface dataType {
  name: string;
  phone: string;
  email: string;
  Horario: string;
  imstagram: string;
  tiktok: string;
  ubicacion1: { ubicacion1: string; link: string }[];
  delivery: { servicio1: string; link: string }[];
}

export const data = {
  name: "100 Montaditos",
  phone: "123-456-789",
  email: "l.castro@100montaditosrd.com",
  Horario: [
    "Lunes a Viernes: 11 am a 11 pm.",
    "Sábados y Domingos: 12 pm a 11 pm.",
  ],
  imstagram: "https://www.instagram.com/100montaditosrd/",
  tiktok: "https://www.tiktok.com/@100montaditosrd",
  globalUbicationLink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2424998933925!2d-69.94352168818489!3d18.472671682539183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e4e39a2ab5%3A0x98df0764eaed40ca!2sBlueMall%20Santo%20Domingo!5e0!3m2!1ses-419!2sus!4v1759502904753!5m2!1ses-419!2sus",
  ubicacion: [
    {
      ubicacion: "Galería 360",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2424998933925!2d-69.94352168818489!3d18.472671682539183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e4e39a2ab5%3A0x98df0764eaed40ca!2sBlueMall%20Santo%20Domingo!5e0!3m2!1ses-419!2sus!4v1759502904753!5m2!1ses-419!2sus",
    },
    {
      ubicacion: "Downtown Center",
      ubicacion1: "Sucursal Downtown Center",
      link: "https://goo.gl/maps/xyz123",
    },
  ],
  delivery: [
    {
      servicio: "Uber Eats ",
      link: "https://wa.me/123456789?text=Hola,%20quiero%20hacer%20un%20pedido",
    },
    {
      servicio: "Rappi",
      link: "https://wa.me/123456789?text=Hola,%20quiero%20hacer%20un%20pedido",
    },
  ],
};
