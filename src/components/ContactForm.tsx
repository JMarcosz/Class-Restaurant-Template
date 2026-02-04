import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const INPUT_STYLE = "bg-transparent border-2 border-white text-white px-4 py-3 md:py-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300 placeholder-gray-400 text-sm md:text-base lg:text-lg w-full";
  const LABEL_STYLE = "text-white text-sm md:text-base lg:text-lg mb-2 font-light text-left";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 mt-10 max-w-4xl w-full px-4 animate-fade-in"
    >
      <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-4">
        ¡Contáctanos y reserva tu cupo para una sabrosa experiencia!
      </h2>

      {/* Name fields - responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="firstName" className={LABEL_STYLE}>
            Nombre *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className={INPUT_STYLE}
            aria-label="Nombre"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className={LABEL_STYLE}>
            Apellido *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Tu apellido"
            className={INPUT_STYLE}
            aria-label="Apellido"
          />
        </div>
      </div>

      {/* Email field */}
      <div className="flex flex-col">
        <label htmlFor="email" className={LABEL_STYLE}>
          Correo Electrónico *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="tu@email.com"
          className={INPUT_STYLE}
          aria-label="Correo electrónico"
        />
      </div>

      {/* Phone field */}
      <div className="flex flex-col">
        <label htmlFor="phone" className={LABEL_STYLE}>
          Teléfono *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+1 (123) 456-7890"
          className={INPUT_STYLE}
          aria-label="Teléfono"
        />
      </div>

      {/* Message field */}
      <div className="flex flex-col">
        <label htmlFor="message" className={LABEL_STYLE}>
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Cuéntanos sobre tu reserva o consulta..."
          className={`${INPUT_STYLE} resize-vertical`}
          aria-label="Mensaje"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitted}
        className="bg-transparent border-4 border-white text-white font-bold py-4 px-8 rounded-lg
                 hover:bg-white hover:text-black hover:scale-105
                 transition-all duration-300 text-base md:text-lg lg:text-xl xl:text-2xl
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent
                 disabled:hover:text-white disabled:hover:scale-100 hover-glow"
      >
        {isSubmitted ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
      </button>

      {/* Success message */}
      {isSubmitted && (
        <div className="text-center text-yellow-400 font-semibold text-lg md:text-xl animate-fade-in">
          ¡Gracias! Te contactaremos pronto.
        </div>
      )}
    </form>
  );
}
