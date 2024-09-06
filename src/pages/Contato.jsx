import ContactForm from "../Componentes/ContactForm";

function Contato() {
    
    return (
        <div className="sobre-info">  
            <section id="info">
                <div className="coluna">
        <h1>Dúvidas e suporte, entre em contato:</h1>

        <div  className="contato-img">
        <img src="./twitter.png" alt="passarinho" />
        <img src="./instagra.png" alt="instagra" />
        <img src="discord.png" alt="" />
 </div>
</div>
        <ContactForm/>
        </section>
        </div>
     );
}

export default Contato   