function ContactForm() {
  return (
    <section id="contact">
      
<div className="div_contact">
  <div  className="row777">
      <label htmlFor="">Nome: </label>
      <input type="text"  />
  </div>
    <div className="row666">
      <label htmlFor="">Email: </label>
      <input type="email"  />
    </div>
    <div className="row888">
    <label htmlFor="">Texto: </label>
      <br />
      <textarea className="txt"  />
      <br />
    </div>
</div>

    <div className="text">
      <div className="botao">
      <button id="botao" type="submit">Enviar</button>
      </div>
    </div>
      
    </section>
  );
}

export default ContactForm;