export default function ContactForm() {
  return (
    <form className="flex flex-col gap-10 mt-10 max-w-2xl w-full px-4">
      <h2 className="text-white text-5xl">
        ¡Contáctanos y reserva tu cupo para una sabrosa experiencia!
      </h2>
      <div className="flex flex-col gap-10 mt-10">
        <input type="text"></input>
        <input type="text"></input>
      </div>
      <input type="email"></input>
      <input type="number"></input>
      <textarea name="msg" id="msg"></textarea>
      <button></button>
    </form>
  );
}
