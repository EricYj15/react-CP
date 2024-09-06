function ContactForm() {
  return (
    <section id="contact">
      

        <div  className="row3">
        <p>Nome:</p>
        <input type="text" placeholder="Nome" />
        </div>

        <div className="row3">
        E-mail:
        <input type="email" placeholder="Email" />
        </div>


        <textarea placeholder="Mensagem" />
        <button id="botao" type="submit">Enviar</button>
      
    </section>
  );
}

export default ContactForm;